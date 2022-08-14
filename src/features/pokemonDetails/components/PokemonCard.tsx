import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useGetSinglePokemon } from "../hooks/useGetSinglePokemon"
import { PokemonAbilities } from "./PokemonAbilities"
import { PokemonStats } from "./PokemonStats"
import { PokemonTypes } from "./PokemonTypes"

export function PokemonCard() {

    const { data } = useGetSinglePokemon()

    if (!data) return null

    const { id, abilities, types, stats, height, weight, sprites, name } = data

    return (
        <Card variant="outlined" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Box sx={{ height: 500 }}>
                <CardMedia
                    component="img"
                    sx={{ height: "100%", objectFit: 'contain' }}
                    image={`${sprites.other["official-artwork"].front_default}`}
                />
            </Box>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <Typography variant="h5" sx={{ mb: 2 }}>{`${name?.toUpperCase()} - #${id?.toString().padStart(3, "0")}`}</Typography>

                <Box sx={{ minWidth: 300 }}>
                    <Typography variant="body1">
                        Height: {height / 10} m
                    </Typography>
                    <Typography variant="body1">
                        Weight: {weight / 10} kg
                    </Typography>
                </Box>
                <PokemonTypes types={types} />
                <PokemonAbilities abilities={abilities} />
                <PokemonStats stats={stats} />
            </CardContent>
        </Card>
    )
}