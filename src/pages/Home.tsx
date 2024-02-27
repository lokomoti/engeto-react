import { Box, Divider, Stack, Typography } from "@mui/material";
import "../pages/Home.css";
import PokemonCard from "../components/Home/PokemonCard";
import BottomSwitcher from "../components/Home/BottomSwitcher";
import RandomText from "../components/Home/RandomText";
import data from "../helpers/data.json";

const Home = () => {
  return (
    <Box>
      <Stack direction={"column"} alignItems={"center"}>
        <img className="pokemon-logo" src="src/assets/img/pokemon.png"></img>
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
          {data["pokemons"].map((pokemon) => (
            <PokemonCard
              imagePath={pokemon.image}
              name={pokemon.name.toUpperCase()}
              key={pokemon.name}
            />
          ))}
        </Stack>
        <BottomSwitcher />
      </Stack>
    </Box>
  );
};

export default Home;
