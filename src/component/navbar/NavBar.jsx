import { Box, Grid } from "@mui/material";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img7 from "../../imgs/home/Logo.jpg";

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
          justifyContent: "center", // Center items horizontally
          alignItems: "center", // Center items vertically
          padding: "5px",

          gap: 1, // Add spacing between Grid items
        }}
      >
        <img
          src={img7}
          alt="Logo Aires Del Lago"
          style={{ maxWidth: "120px", maxHeight: "100px" }}
        />
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center", // Center items horizontally
          alignItems: "center", // Center items vertically
          padding: "5px",
          gap: 1, // Add spacing between Grid items
        }}
      >
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          onClick={() => navigate("/home")}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Inicio
        </Grid>
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          onClick={() => navigate("/quienes-somos")}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Nosotros
        </Grid>
        <Grid
          md={1.5}
          lg={0.9}
          className="navBarItem"
          onClick={() => navigate("/quienes-somos")}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Casas
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
        onClick={() => navigate("/home")}
      >
        Inicio
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => navigate("/quienes-somos")}
      >
        Nosotros
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => navigate("/quienes-somos")}
      >
        Casas
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
