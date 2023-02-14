import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = ({ cartItemCount }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Grid container justify="space-between">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Wear Me
            </Typography>
            <ShoppingCartIcon></ShoppingCartIcon>
            <Badge badgeContent={cartItemCount} color="primary" />
          </Grid>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
