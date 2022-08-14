import { Box, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function PokedexNavigaton() {
    const navigate = useNavigate()
    const { id } = useParams()

    if (!id) return null

    const idAsANumber = parseInt(id)
    const handleBackClick = () => {
        if (id && idAsANumber > 1) {
            navigate(`/pokemon/${idAsANumber - 1}`)
        } else {
            navigate(`/pokemon/151`)

        }

    }

    const handleForwardClick = () => {

        if (id && idAsANumber < 151) {
            navigate(`/pokemon/${idAsANumber + 1}`)
        } else {
            navigate(`/pokemon/1`)

        }

    }
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'space-between', mb: 2, "& > div:hover": {
                cursor: 'pointer'
            }
        }}>
            <Box sx={{ display: 'flex' }} onClick={handleBackClick}><ArrowBackIosIcon /><Typography variant="body1"> Previous Pokemon </Typography></Box>
            <Box sx={{ display: 'flex' }} onClick={handleForwardClick}><Typography variant="body1">Next Pokemon </Typography><ArrowForwardIosIcon /></Box >
        </Box >

    )
}