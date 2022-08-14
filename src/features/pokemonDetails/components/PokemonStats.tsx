import { Box, LinearProgress, Typography } from "@mui/material"
import { PokemonStat } from "../../../types/pokemon"

export function PokemonStats(props: { stats: PokemonStat[] }) {

    const { stats } = props
    return (
        <Box>
            <Typography variant="h6">
                Stats
            </Typography>
            {
                stats.map((stat) => {
                    return (
                        <Box sx={{ display: 'flex', alignItems: 'center' }} key={stat.stat.name}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                                <Typography variant="body2" sx={{ textTransform: 'capitalize', minWidth: 'min-content' }}>
                                    {stat.stat.name}
                                </Typography>
                            </Box>
                            <Box sx={{ width: '100%', mr: 1 }}>
                                <LinearProgress variant="determinate" value={stat.base_stat / 10} />
                            </Box>
                            <Box sx={{ minWidth: 35 }}>
                                <Typography variant="body2" color="text.secondary">{`${Math.round(
                                    stat.base_stat,
                                ) / 10}`}</Typography>
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    )
}