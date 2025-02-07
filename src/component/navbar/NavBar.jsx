import { Box, Grid } from "@mui/material";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img7 from "../../imgs/home/Logo.jpg";

const NavBar = () => {
  const [navItem, setNavItem] = useState("openNavBra");
  const [house, setHouse] = useState("closeHouse");

  const navigate = useNavigate();

  const ChangueNavBar = () => {
    if (navItem == "openNavBra") {
      setNavItem("closeNavBra");
    } else {
      setNavItem("openNavBra");
    }
  };

  const ChangeHouse = () => {
    if (house == "openHouse") {
      setHouse("closeHouse");
    } else {
      setHouse("openHouse");
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
          item
          md={2}
          lg={0.9}
          className="navBarItem"
          onClick={() => navigate("/home")}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Inicio
        </Grid>
        <Grid
          md={2}
          lg={0.9}
          className="navBarItem"
          onClick={() => navigate("/quienes-somos")}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Nosotros
        </Grid>
        <Grid
          md={2}
          lg={0.9}
          className="navBarItem"
          sx={{ display: { xs: "none", md: "block" }, position: "relative" }}
        >
          <Box onClick={ChangeHouse} pb={"5px"}>
            Casas
          </Box>

          {/* Contenedor del dropdown */}
          <Box className={house}>
            <Box className="floatingBox" onClick={() => navigate("/aires2")}>
              Aires 2
            </Box>
            <Box className="floatingBox" onClick={() => navigate("/aires3")}>
              Aires 3
            </Box>
            <Box className="floatingBox" onClick={() => navigate("/aires4")}>
              Aires 4
            </Box>
          </Box>
        </Grid>
        <Grid
          md={2}
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
          className="navBarItem"
        >
          <MenuIcon />
        </Grid>
      </Grid>

      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none", cursor: "pointer" } }}
        onClick={() => navigate("/home")}
      >
        Inicio
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none", cursor: "pointer" } }}
        onClick={() => navigate("/quienes-somos")}
      >
        Nosotros
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none", cursor: "pointer" } }}
        onClick={() => navigate("/aires2")}
      >
        Aires 2
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none", cursor: "pointer" } }}
        onClick={() => navigate("/aires3")}
      >
        Aires 3
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none", cursor: "pointer" } }}
        onClick={() => navigate("/aires4")}
      >
        Aires 4
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none", cursor: "pointer" } }}
        onClick={() => navigate("/home")}
      >
        Actividades
      </Grid>
      <Grid
        className={navItem}
        sx={{ display: { xs: "block", md: "none", cursor: "pointer" } }}
        onClick={() => navigate("/contact")}
      >
        Contacto
      </Grid>
    </Box>
  );
};

export default NavBar;
