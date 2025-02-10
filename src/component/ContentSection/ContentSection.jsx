import { Grid, Box } from "@mui/material";
import "./ContentSection.css";

const ContentSection = ({ title, text, imageUrl, reverse = false }) => {
  return (
    <Box className="boxGridContainer1">
      <Grid
        container
        className="gridContainer1"
        direction={reverse ? "row-reverse" : "row"} // Invierte imagen y texto si reverse = true
      >
        <Grid item xs={12} md={6} className="textPrincipalColumn1">
          <h1 className="textTitleColumn1">
            <strong>{title}</strong>
          </h1>
          {/* Aquí verificamos si text es un array y luego lo mapeamos */}
          {Array.isArray(text) ? (
            text.map((paragraph, index) => (
              <p key={index} className="textColumn1">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="textColumn1">{text}</p>
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

export default ContentSection;
