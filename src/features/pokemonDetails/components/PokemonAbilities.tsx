import { Box, Chip, Typography } from "@mui/material"
import { PokemonAbility } from "../../../types/pokemon"

export function PokemonAbilities(props: { abilities: PokemonAbility[] }) {

    const { abilities } = props
    return (
        <Box>
            <Typography variant="h6">
                Abilities
            </Typography>

            {
                abilities.map(({ ability }) => {
                    return (
                        <Chip label={`${ability.name}`} color="primary" sx={{ ml: 1, textTransform: 'capitalize' }} key={ability.name} />
                    )
                })
            }
        </Box>
    )
}