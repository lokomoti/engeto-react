import React from "react";
import { useState, useEffect } from "react";
import { fetchPokemon } from "../../services/pokemonService";
import PokemonType from "../../types/PokemonType";
import { Paper, Skeleton, Stack, Typography } from "@mui/material";

// Zde pooužil toto: https://mui.com/material-ui/react-skeleton/ plus další.
// Ten skeleton se mi tam nezdrží moc dlouho.

type PokemonProps = {
  pokemonName: string;
};

const Pokemon: React.FC<PokemonProps> = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchPokemon(pokemonName)
      .then((fetchedPokemon) => {
        setPokemon(fetchedPokemon);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pokemonName]);

  if (loading) {
    return (
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Paper>
      <Stack
        direction={"column"}
        gap={"1rem"}
        alignItems={"center"}
        padding={"1rem"}
      >
        <Typography variant="body1">
          {`ID:${pokemon?.id}, Name: ${pokemon?.name}`}
        </Typography>
        <img src={pokemon?.spriteUrl} />
        <Typography variant="body2">
          Experience: {pokemon?.baseExperience} exp
        </Typography>
        <Typography variant="body2">Weight: {pokemon?.weight} Kg</Typography>
      </Stack>
    </Paper>
  );
};

export default Pokemon;
