import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Home.css";
import { Grid, Box } from "@mui/material";
import NavBar from "../../component/navbar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>

      <Box className="mainBox">
        <Box className="boxTextSup">
          <Grid item xs={12} className="gridConteinerBoxSup">
            <h1>Bienvenidos a</h1>
            <p>La escapada que necesitás.</p>
          </Grid>
          <Grid item xs={12} className="gridConteinerBoxImgSup">
            {/* imagen */}
          </Grid>
          <Grid item xs={12} className="gridConteinerBoxTextSup2">
            <h2>Viví la experiencia KUNTUR</h2>
            <p>
              Llevamos la experiencia de glamping al siguiente nivel,
              manteniendo la simbiosis perfecta entre naturaleza y confort.
            </p>
          </Grid>
        </Box>

        <Box className="BoxConteinHouse">
          <Grid container spacing={3} className="gridConteinerBoxHouse">
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="gridLeftConteinerBoxHouse"
            >
              <img src="Ihome/INTI.jpg" alt="Domo Inti" />
              <h3>Domo INTI</h3>
              <p>
                Concepto único para 2 personas que buscan una escapada
                romántica.
              </p>
              <a href="#">Ver más</a>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="gridMediumConteinerBoxHouse"
            >
              <img src="Ihome/WASI.jpg" alt="Domo Wasi" />
              <h3>Domo WASI</h3>
              <p>
                Diseñado para quienes desean una experiencia inolvidable en
                familia o con amigos.
              </p>
              <a href="#">Ver más</a>
            </Grid>

            <Grid
              item
              xs={12}
              md={12}
              lg={4}
              className="gridRightConteinerBoxHouse"
            >
              <img src="Ihome/WASI.jpg" alt="Domo Wasi" />
              <h3>Domo Mojito</h3>
              <p>
                Diseñado para quienes desean una experiencia inolvidable en
                familia o con amigos.
              </p>
              <a href="#">Ver más</a>
            </Grid>
          </Grid>
        </Box>

        <Box className="boxConteinerFooter">
          <Grid item xs={12} className="gridConteinerBoxFooter">
            <footer className="footer">
              <a href=""></a>
              <a
                href="https://wa.me/5493518171664"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <WhatsAppIcon />
              </a>
              <p>WhatsApp: +54 9 3518171664</p>
              <p>Instagram: @airesdellago_</p>
            </footer>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
