import {
  Box,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Paper,
  Typography,
} from "@mui/material";
import pokemons from "../../../assets/data";
import { useState } from "react";

const BottomSwitcher = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<string[]>(["0"]);

  const handlePokemonChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedPokemon: string[]
  ) => {
    setSelectedPokemon(updatedPokemon);
  };
  console.log(pokemons);

  return (
    <Box width={"600px"} height={"300px"}>
      <Stack>
        <ToggleButtonGroup
          value={selectedPokemon}
          onChange={handlePokemonChange}
          exclusive
        >
          {pokemons.map((pokemon, index) => (
            <ToggleButton value={index.toString()}>{pokemon.name}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>
      <Paper>
        <Typography variant="body1" padding={2}>
          {pokemons[parseInt(selectedPokemon[0])].text}
        </Typography>
      </Paper>
    </Box>
  );
};

export default BottomSwitcher;
