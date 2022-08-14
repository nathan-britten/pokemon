import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PokemonListItem as PokemonListItemType } from "../types";

interface Props {
    pokemon: PokemonListItemType
    id: number
}
export function PokemonListItem(props: Props) {
    const { pokemon, id } = props;
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/pokemon/${id}`)
    }

    return (
        <Card sx={{ m: 2, minWidth: 200 }} >
            <CardContent>
                <Typography sx={{ textTransform: 'capitalize' }} variant="h5" color="text.secondary" gutterBottom>
                    {pokemon.name}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" onClick={handleClick}>Learn More</Button>
            </CardActions>
        </Card>
    )
}