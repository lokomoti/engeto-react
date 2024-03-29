import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Box, Stack } from "@mui/material";
import MenuBar from "./components/Menu";
import PokemonApi from "./pages/PokemonApi";

const App = () => {
  return (
    <Box p={4} m={"auto"}>
      <MenuBar />
      <Stack direction={"column"} alignItems={"center"} flexBasis={"800px"}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemonapi" element={<PokemonApi />} />
          </Routes>
        </BrowserRouter>
      </Stack>
    </Box>
  );
};

export default App;
