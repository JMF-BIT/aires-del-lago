import { Box, Grid } from "@mui/material";
import NavBar from "../../component/navbar/NavBar";
import ContentSectionHouse from "../../component/ContentSectionHouse/ContentSectionHouse.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../component/ContentSectionHouse/ContentSectionHouse.css";
import img1 from "../../imgs/ImagesCasas/Aires3/ImageTop.jpg";
import img2 from "../../imgs/ImagesCasas/Aires3/air31.jpg";
import img3 from "../../imgs/ImagesCasas/Aires3/air32.jpg";
import aires32 from "../../imgs/aires3/aires3-2.jpg";
import aires33 from "../../imgs/aires3/aires3-3.jpg";
import aires34 from "../../imgs/aires3/aires3-4.jpg";
import aires35 from "../../imgs/aires3/aires3-5.jpg";
import aires36 from "../../imgs/aires3/aires3-6.jpg";
import aires37 from "../../imgs/aires3/aires3-7.jpg";
import aires38 from "../../imgs/aires3/aires3-8.jpg";
import Galery from "../../component/galeri/Galery.jsx";

const Aires3 = () => {
  const images = [
    {
      original: aires32,
      thumbnail: aires32,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires33,
      thumbnail: aires33,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires34,
      thumbnail: aires34,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires35,
      thumbnail: aires35,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires36,
      thumbnail: aires36,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires37,
      thumbnail: aires37,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires38,
      thumbnail: aires38,
      originalHeight: 600,
      originalWidth: 1200,
    },
  ];

  return (
    <>
      <NavBar />

      <Box
        sx={{
          backgroundImage: `url(${img1})`,
          fontSize: { xs: "10px", md: "20px", lg: "20px" },
        }}
        className="boxImagePrincipalTop"
      >
        <Box className="boxPrincipalTextTop">
          <h1 className="imagePrincipalTitleText">Aires 3</h1>
          <p className="imagePrincipalText">
            PENSADA PARA 8 PERSONAS<br></br>CONFORT Y EXCLUSIVIDAD{" "}
          </p>
        </Box>
      </Box>

      <ContentSectionHouse
        title="BIENVENIDOS A AIRES 3"
        text={[
          "Ubicada en un entorno natural privilegiado, Aires 3 es una casa pensada para el descanso, la comodidad y el disfrute. Con capacidad para hasta 8 personas, esta casa combina la tranquilidad del paisaje serrano con todas las comodidades de un hogar acogedor y funcional.",
          "Su amplio living-comedor invita a compartir momentos inolvidables, mientras que la cocina completamente equipada ofrece todo lo necesario para preparar deliciosas comidas en un ambiente cálido y confortable.",
          "La casa cuenta con tres dormitorios, uno de ellos matrimonial en suite, y dos baños completos, garantizando privacidad y bienestar para todos los huéspedes.",
          "Espacios exteriores para disfrutar",
          "El exterior está diseñado para el relax y la conexión con la naturaleza. Su amplia galería con asador es el lugar ideal para reuniones al aire libre, mientras que la pileta privada invita a refrescarse en los días soleados con vistas al entorno serrano.",
          "Además, la casa cuenta con cochera techada y un jardín espacioso, perfecto para disfrutar del aire libre en total tranquilidad.",
          "Un lugar perfecto en las Sierras de Córdoba. Cada rincón está pensado para ofrecer una experiencia única, donde la naturaleza y el confort se encuentran en perfecta armonía.",
          "Un lugar para descansar, disfrutar y crear recuerdos inolvidables.",
        ]}
        imageUrl={img2}
      />

      <ContentSectionHouse
        title="SERVICIOS"
        text={[
          "3 habitaciones, una matrimonial en suite.",
          "3 baños (1 exterior para la pileta).",
          "Agua caliente para la ducha y la cocina.",
          "Amplia galería con asador.",
          "Asador equipado con parrilla y kit de asador.",
          "Pileta privada.",
          "Reposeras.",
          "Aire acondicionado en todos los espacios.",
          "Calefacción mediante calefactor tiro balanceado.",
          "Internet satelital de alta velocidad Starlink.",
          "DirecTV.",
          "Living con amplios ventanales.",
          "Cocina, comedor y living integrados.",
          "Cocina completamente equipada con ollas, utensilios, vajilla completa, etc.",
          "Ropa blanca.",
          "Acceso a cancha de pádel.",
          "Bajada al lago y acceso a demás servicios del barrio (canchas de fútbol, tenis, vóley, kayaks, gimnasio, sala de juegos, restaurante, etc.).",
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        imageUrl={img3}
        reverse={true}
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "black",
            textTransform: "uppercase",
            letterSpacing: "2px",
            paddingTop: "50px",
            fontFamily: "Times New Roman, Garamond, Baskerville",
          }}
        >
          GALERIA DE FOTOS
        </h1>
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "1200px" },
            maxHeight: { xs: "auto", sm: "900px" },
          }}
        >
          <Galery imgs={images} />
        </Box>
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
    </>
  );
};

export default Aires3;
