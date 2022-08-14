import { Box, Chip, Typography } from "@mui/material"
import { PokemonType } from "../../../types/pokemon"

export function PokemonTypes(props: { types: PokemonType[] }) {

    const { types } = props
    return (
        <Box>
            <Typography variant="h6">
                Type
            </Typography>

            {
                types.map(({ type }) => {
                    return (
                        <Chip label={`${type.name}`} variant="outlined" sx={{ ml: 1, textTransform: 'capitalize' }} key={type.name} />
                    )
                })
            }
        </Box>
    )
}