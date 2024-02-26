import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonFetcher = () => {
  const [textInput, setTextInput] = useState("");
  const [buttonEnable, setButtonEnable] = useState(false);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    setButtonEnable(textInput.length > 0 ? true : false);
  });

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTextInput(e.target.value.toLowerCase());
  };

  const handleSubmit = () => {
    setPokemonName(textInput);
  };

  return (
    <>
      <Paper>
        <Stack padding={"2rem"} height={"450px"} gap={"1rem"}>
          <Typography variant="h6">Pokemon Fetcher</Typography>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=""
            helperText="Enter Pokémon Name to Fetch"
            onChange={(e) => {
              handleTextChange(e);
            }}
          />
          <Button
            variant="contained"
            disabled={!buttonEnable}
            onClick={handleSubmit}
          >
            Fetch!
          </Button>
          {pokemonName != "" ? <Pokemon pokemonName={pokemonName} /> : ""}
        </Stack>
      </Paper>
    </>
  );
};

export default PokemonFetcher;
