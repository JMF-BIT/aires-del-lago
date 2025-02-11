import { Box, Grid } from "@mui/material";
import "./Aires2.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import NavBar from "../../component/navbar/NavBar";
import ContentSectionHouse from "../../component/ContentSectionHouse/ContentSectionHouse.jsx";
import "../../component/ContentSectionHouse/ContentSectionHouse.css";
import img1 from "../../imgs/ImagesCasas/Aires2/Aires2ImagenTop.jpg";
import img2 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen1.jpg";
import img3 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen2.jpg";
import aires21 from "../../imgs/aires2/aires2-1.jpg";
import aires22 from "../../imgs/aires2/aires2-2.jpg";
import aires23 from "../../imgs/aires2/aires2-3.jpg";
import aires24 from "../../imgs/aires2/aires2-4.jpg";
import aires25 from "../../imgs/aires2/aires2-5.jpg";
import aires26 from "../../imgs/aires2/aires2-6.jpg";
import Galery from "../../component/galeri/Galery.jsx";

const Aires2 = () => {
  const images = [
    {
      original: aires21,
      thumbnail: aires21,
    },
    {
      original: aires22,
      thumbnail: aires22,
    },
    {
      original: aires23,
      thumbnail: aires23,
    },
    {
      original: aires24,
      thumbnail: aires24,
    },
    {
      original: aires25,
      thumbnail: aires25,
    },
    {
      original: aires26,
      thumbnail: aires26,
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
          <h1 className="imagePrincipalTitleText">Aires 2</h1>
          <p className="imagePrincipalText">
            PENSADA PARA 6 PERSONAS<br></br>CONFORT Y EXCLUSIVIDAD{" "}
          </p>
        </Box>
      </Box>

      <ContentSectionHouse
        title="BIENVENIDOS A AIRES 2"
        text={[
          "Ubicada en un entorno natural privilegiado, Aires 2 es una casa pensada para el descanso, la comodidad y el disfrute. Con capacidad para hasta 6 personas, esta casa combina la tranquilidad del paisaje serrano con todas las comodidades de un hogar acogedor y funcional.",
          "Su amplio living-comedor invita a compartir momentos inolvidables, mientras que la cocina completamente equipada ofrece todo lo necesario para preparar deliciosas comidas en un ambiente cálido y confortable.",
          "La casa cuenta con dos dormitorios, uno de ellos matrimonial en suite, y dos baños completos, garantizando privacidad y bienestar para todos los huéspedes.",
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
          "2 habitaciones, una matrimonial en suite",
          "3 baños (1 exterior para la pileta)",
          "agua caliente para la ducha y la cocina",
          "amplia galería con asador",
          "asador equipado con parrilla y kit de asador",
          "pileta privada",
          "reposeras",
          "aire acondicionado en todos los espacios",
          "calefacción mediante calefactor tiro balanceado",
          "internet satelital de alta velocidad starlink",
          "directv",
          "living con amplios ventanales",
          "cocina comedor y living integrados",
          "cocina completamente equipada con ollas, utensilios, vajilla completa, etc.",
          "ropa blanca",
          "acceso a cancha de pádel",
          "bajada al lago y acceso a demás servicios del barrio (canchas de fútbol, tenis, vóley, kayaks, gimnasio, sala de juegos, restaurante, etc.)",
        ].map((item, index) => (
          <li key={index}>{item}</li> // Usamos <li> para cada elemento de la lista
        ))}
        imageUrl={img3}
        reverse={true} // La imagen se coloca a la izquierda
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
        <Box sx={{ maxWidth: "1200px", maxHeight: "900px" }}>
          <Galery imgs={images}></Galery>
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

export default Aires2;
