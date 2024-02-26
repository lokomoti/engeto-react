import { Box, Divider, Stack, Typography } from "@mui/material";
import "../Home/Home.css";
import PokemonCard from "./components/PokemonCard";
import BottomSwitcher from "./components/BottomSwitcher";
import pokemons from "../../assets/data";
import RandomText from "./components/RandomText";

const Home = () => {
  return (
    <Box>
      <Stack direction={"column"} alignItems={"center"}>
        <img className="pokemon-logo" src="src/assets/pokemon.png"></img>
        <Typography variant="body1" marginBottom={4}>
          Where Adventure and Friendship Evolve in a World of Endless
          Possibilities! Random text: <RandomText />
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Typography variant="h5" marginTop={4}>
          4 Most powerful Pokémons
        </Typography>
        <Stack
          direction={"row"}
          spacing={2}
          marginTop={4}
          flexWrap={"wrap"}
          marginBottom={6}
        >
          {pokemons.map((pokemon) => (
            <PokemonCard
              imagePath={pokemon.image}
              name={pokemon.name.toUpperCase()}
            />
          ))}
        </Stack>
        <BottomSwitcher />
      </Stack>
    </Box>
  );
};

export default Home;
