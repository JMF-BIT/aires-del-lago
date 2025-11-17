import { Grid, Box } from "@mui/material";
import "./ContentSectionActivities.css";

const ContentSectionActivities = ({
  title,
  text,
  imageUrl,
  reverse = false,
}) => {
  return (
    <Box className="boxGridContainer">
      <Grid
        container
        spacing={0}
        className="gridContainer"
        direction={reverse ? "row-reverse" : "row"}
      >
        <Grid item xs={12} md={6} className="textPrincipalColumn">
          <h1 className="textTitleColumn">
            <strong>{title}</strong>
          </h1>

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

        <Grid item xs={12} md={6} className="imagePrincipalColumn">
          <img className="imageColumn" src={imageUrl} alt="Sección Imagen" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentSectionActivities;
