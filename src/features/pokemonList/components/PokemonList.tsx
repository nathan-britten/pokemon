import { Box } from "@mui/material";
import { PokemonListItem } from "../index";
import { PokemonListItem as PokemonListItemType } from "../types";

interface Props {
    pokemon: PokemonListItemType[] | undefined
}
export function DisplayAllPokemon(props: Props) {
    const { pokemon } = props;

    if (!pokemon || !pokemon.length) return <Box>No Pokemon match your search</Box>

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {pokemon.map((pokemon, index) => {
                return (
                    <PokemonListItem pokemon={pokemon} key={pokemon.url} id={index + 1} />
                )
            })}
        </Box>
    )
}