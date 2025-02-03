import { Box, Grid } from "@mui/material";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [navItem, setNavItem] = useState("openNavBra");

  const navigate = useNavigate();

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
        <Grid xs={2} lg={0.9} onClick={() => navigate("/home")}>
          LOGO
        </Grid>
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          onClick={() => navigate("/quienes-somos")}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          kuntur
        </Grid>
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          onClick={() => navigate("/home")}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Domos
        </Grid>
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          sx={{ display: { xs: "none", md: "block" } }}
          onClick={() => navigate("/home")}
        >
          Tarifas
        </Grid>
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          sx={{ display: { xs: "none", md: "block" } }}
          onClick={() => navigate("/home")}
        >
          Actividades
        </Grid>
        <Grid
          xs={2}
          lg={0.9}
          className="navBarItem"
          sx={{ display: { xs: "none", md: "block" } }}
          onClick={() => navigate("/contact")}
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
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => navigate("/quienes-somos")}
      >
        kuntur
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => navigate("/home")}
      >
        Domos
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => navigate("/home")}
      >
        Tarifas
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => navigate("/home")}
      >
        Actividades
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => navigate("/contact")}
      >
        Contacto
      </Grid>
    </Box>
  );
};

export default NavBar;
