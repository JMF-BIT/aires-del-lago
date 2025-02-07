import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Home.css";
import { Grid, Box, Button, Typography } from "@mui/material";
import NavBar from "../../component/navbar/NavBar";
import SliderHomeComponent from "../../component/sliderhome/SliderHomeComponent";
import HousePhotoSlider from "../../component/sliderhouseshome/SliderHouse1";
import { Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

import imga1 from "../../imgs/casas/aires2.jpg";
import imga2 from "../../imgs/casas/air2.jpg";
import imga3 from "../../imgs/casas/aires3.jpg";
import imga4 from "../../imgs/casas/air3.jpg";
import imga5 from "../../imgs/casas/aires4.jpg";
import imga6 from "../../imgs/casas/air4.jpg";
import img8 from "../../imgs/home/cinta.jpg";

const cardsData = [
  {
    id: 1,
    images: [imga1, imga2],
    title: "Aires 2",
    description: "Capacidad para 6 personas.",
    button: "/aires2",
  },
  {
    id: 2,
    images: [imga3, imga4],
    title: "Aires 3",
    description: "Capacidad para 8 personas.",
    button: "/aires3",
  },
  {
    id: 3,
    images: [imga5, imga6],
    title: "Aires 4",
    description: "Capacidad para 6 personas.",
    button: "/aires4",
  },
];

const card = ({ title, description, button }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <motion.a
      href={button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="button"
    >
      Ver más
    </motion.a>
  </div>
);

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Box className="mainBox">
        <Box className="boxSliderImage" position={"relative"}>
          {/* link para slider de imagenes */}
          <SliderHomeComponent />
          <Box
            className="boxSliderTextImage"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white", // Ajusta el color según tu imagen
              textAlign: "center",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h2"
              className="title"
              style={{
                letterSpacing: 5,
                fontFamily: "Times New Roman, Garamond, Baskerville",
              }}
            >
              AIRES DEL LAGO
            </Typography>
            <Typography
              variant="h4"
              className="subtitle"
              style={{
                letterSpacing: 3,
                fontFamily: "Times New Roman, Garamond, Baskerville",
              }}
            >
              Casas de Campo
            </Typography>
            <p>un lugar pensado para disfrutar.</p>
          </Box>
        </Box>

        <Box className="boxContainerText">
          <h1>¡BIENVENIDOS!</h1>
          <h2>Conoce nuestras opciones para tu merecido descanso.</h2>
          <img
            src={img8}
            alt="Decorative Ribbon"
            className="decorative-image"
          />
          <p>
            Aires del Lago es un lugar increíble ubicado frente al lago Los
            Molinos, nuestro complejo de casas de alquiler ofrece comodidad y
            elegancia. Disfruta de nuestra cancha de pádel y pileta al aire
            libre. Ideal para familias y grupos de amigos. Relajación y
            diversión en un entorno natural.
            <p>
              Veni y descubrí la experiencia perfecta, un lugar pensado para
              vos!
            </p>
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              mt: 2,
              justifyContent: "center",
            }} // margin top para separar el botón del texto
            onClick={() => {
              const element = document.getElementById("BoxConteinHouse");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            EXPLORA NUESTRAS CASAS
          </Button>
        </Box>

        <Box
          id="BoxConteinHouse"
          className="boxConteinHouse"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <Grid
            container
            spacing={2}
            className="gridConteinCardsHouses"
            sx={{ width: "100%" }}
          >
            {cardsData.map((card) => (
              <Grid item xs={12} sm={12} md={12} lg={4} key={card.id}>
                <div className="card">
                  {" "}
                  <Card
                    sx={{
                      backgroundColor: "white",
                      maxWidth: "400px",
                      borderRadius: "10px",
                      paddingBottom: "5px",
                      border: "10px solid white",
                      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
                      width: "auto",
                      height: "auto",
                      mx: "auto",
                    }}
                  >
                    <CardMedia sx={{ height: 350, position: "relative" }}>
                      <HousePhotoSlider images={card.images} />
                    </CardMedia>
                    <CardContent>
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: "1.5rem",
                          color: "black",
                          textShadow: "3px 3px 10px rgba(0, 0, 0, 0.1)",
                          fontFamily: "Times New Roman, Garamond, Baskerville",
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="#666666" mt={1}>
                        {card.description}
                      </Typography>
                      <div className="card-button">
                        <motion.a
                          href={card.button}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "rgb(228, 228, 228)",
                              color: "black",
                              mt: 2,
                            }}
                          >
                            Ver más
                          </Button>
                        </motion.a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="boxConteinerFooter">
          <Grid spacing={10} item xs={12} className="gridConteinerBoxFooter">
            <footer className="footer">
              <a
                href="https://www.instagram.com/airesdellago_/"
                target="_blanck"
                rel="noopener noreferrer"
                className="icon1"
              >
                <InstagramIcon style={{ fontSize: "65px" }} />
              </a>
              <a
                href="https://wa.me/5493518171664"
                target="_blank"
                rel="noopener noreferrer"
                className="icon2"
              >
                <WhatsAppIcon style={{ fontSize: "65px" }} />
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
