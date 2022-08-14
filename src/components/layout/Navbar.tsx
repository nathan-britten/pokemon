import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export const NavigationBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonIcon sx={{ display: { md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              "& a": {
                color: "white",
                textDecoration: "none",
              },
              textDecoration: "none",
              mr: 2,
              display: { md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            <NavLink to="/pokemon">Pokédex</NavLink>
          </Typography>
          <Box
            sx={{
              display: "flex",
              "& a": {
                color: "white",
                textDecoration: "none",
              },
            }}
          >
            <NavLink to={`/pokemon`}>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                All Pokemon
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
