import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Projects from "./Projects";

const NavBar = () => {
  return (
    <AppBar position='fixed' sx={{ backgroundColor: "#25316D", zIndex: 9999 }}>
      <Toolbar>
        <Grid container direction='row' justifyContent='flex-end'>
          <Grid item xs={4}>
            <Projects />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
