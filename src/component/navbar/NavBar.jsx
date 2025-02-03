import { Box, Grid } from "@mui/material";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavBar = () => {
  const [navItem, setNavItem] = useState("openNavBra");

  const ChangueNavBar = () => {
    if (navItem == "openNavBra") {
      setNavItem("closeNavBra");
    } else {
      setNavItem("openNavBra");
    }
  };
  return (
    <Box className="navBarContainer">
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "start" },
          padding: "10px",
        }}
      >
        <Grid xs={2} lg={0.9}>
          LOGO
        </Grid>
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          kuntur
        </Grid>
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Domos
        </Grid>
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Tarifas
        </Grid>
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Actividades
        </Grid>
        <Grid
          xs={2}
          lg={0.9}
          className="navBarItem"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Contacto
        </Grid>
        <Grid
          onClick={() => ChangueNavBar()}
          md={1.5}
          lg={0.9}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </Grid>
      </Grid>
      <Grid className={navItem} sx={{ display: { xs: "block", md: "none" } }}>
        kuntur
      </Grid>
      <Grid className={navItem} sx={{ display: { xs: "block", md: "none" } }}>
        Domos
      </Grid>
      <Grid className={navItem} sx={{ display: { xs: "block", md: "none" } }}>
        Tarifas
      </Grid>
      <Grid className={navItem} sx={{ display: { xs: "block", md: "none" } }}>
        Actividades
      </Grid>
      <Grid className={navItem} sx={{ display: { xs: "block", md: "none" } }}>
        Contacto
      </Grid>
    </Box>
  );
};

export default NavBar;
