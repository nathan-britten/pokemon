import {
  FormControl,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  pokemonName: string;
  setPokemonName: (name: string) => void
}
export function SearchBar(props: Props) {
  const { pokemonName, setPokemonName } = props

  return (
    <>
      <FormControl
        variant="filled"
        sx={{
          "& > div": {
            my: 1,
          },
        }}
      >
        <Typography variant="h5">Search Pokemon</Typography>
        <TextField
          label="Search Pokemon By Name"
          id="name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          sx={{ minWidth: 350 }}
        />
      </FormControl>
    </>
  );
}
