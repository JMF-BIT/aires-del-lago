import { Grid, Box } from "@mui/material";
import "./ContentSectionHouse.css";
import Galery from "../galeri/Galery";

const ContentSectionHouse = ({
  title,
  text,
  imageUrl,
  reverse = false,
  images,
}) => {
  return (
    <Box className="boxGridContainer">
      <Grid
        container
        className="gridContainer"
        direction={reverse ? "row-reverse" : "row"} // Invierte imagen y texto si reverse = true
      >
        <Grid item xs={12} md={6} className="textPrincipalColumn">
          <h1 className="textTitleColumn">
            <strong>{title}</strong>
          </h1>
          {/* Aquí verificamos si text es un array y luego lo mapeamos */}
          {Array.isArray(text) ? (
            text.map((paragraph, index) => (
              <p key={index} className="textColumn">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="textColumn">{text}</p>
          )}
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            minHeight: "300px",
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover", // Hace que la imagen cubra todo el contenedor
            backgroundPosition: "center", // Centra la imagen
            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default ContentSectionHouse;
