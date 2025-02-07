import { Grid, Box } from "@mui/material";
import "./ContentSectionHouse.css";

const ContentSectionHouse = ({ title, text, imageUrl, reverse = false }) => {
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
              <div key={index} className="textColumn">
                {paragraph}
              </div>
            ))
          ) : (
            <p className="textColumn">{text}</p>
          )}
        </Grid>

        <Grid item xs={12} md={6} className="imagePrincipalColumn">
          <Box
            sx={{
              backgroundImage: `url(${imageUrl})`,
            }}
            className="imagePrincipalColumnItem"
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentSectionHouse;
