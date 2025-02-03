import { Grid, Box } from "@mui/material";
import "./Template.css";

const Template = () => {
  return (
    <Box className="boxPrincipal">
      <Box className="imagenGrandePrincipal">
        <h1 className="imageTitleText">¿Qué es Kuntur?</h1>
        <p className="imageText">
          Kuntur es más que domos. Es una experiencia mágica en un lugar remoto{" "}
          <br></br>
          cargado de increíbles paisajes y posibilidades.
        </p>
      </Box>
      <Box className="boxTextContainer">
        <Grid container spacing={2} className="gridContainer">
          <Grid item xs={12} md={6} className="leftColumn">
            <h1 className="columTitle">
              <strong>¿Por qué Kuntur?</strong>
            </h1>

            {/* Primer párrafo */}
            <p className="columText">
              El vocablo Kuntur refiere a una palabra en quechua que significa
              “Cóndor”. Nuestro nombre nos asocia con la naturaleza y con el
              dueño indiscutido de los cielos en la inmensidad de las Altas
              Cumbres.
            </p>

            {/* Segundo párrafo */}
            <p className="columText">
              Somos un concepto exclusivo de domos basado en llevar la
              experiencia de glamping al siguiente nivel, manteniendo la
              simbiosis perfecta entre naturaleza y confort.
            </p>

            {/* Tercer párrafo */}
            <p className="columText">
              Enfrentamos para ello el enorme desafío de la construcción de
              domos geodésicos en un enclave de difícil acceso, hacia donde
              trasladar materiales era una apuesta difícil, superable sólo con
              ingenio y perseverancia, viendo crecer de a poco sus resultados,
              que por eso se valoran doblemente.
            </p>
          </Grid>
          <Grid item xs={12} md={6} className="rightColum">
            <Box className="rightImage"></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Template;
