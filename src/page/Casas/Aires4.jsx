import { Box, Grid } from "@mui/material";
import NavBar from "../../component/navbar/NavBar";
import ContentSectionHouse from "../../component/ContentSectionHouse/ContentSectionHouse.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../component/ContentSectionHouse/ContentSectionHouse.css";
import img1 from "../../imgs/ImagesCasas/Aires4/ImageTopp.jpg";
import img2 from "../../imgs/ImagesCasas/Aires4/air41.jpg";
import img3 from "../../imgs/ImagesCasas/Aires4/air42.jpg";
import aires41 from "../../imgs/aires4/aires4-1.jpg";
import aires42 from "../../imgs/aires4/aires4-2.jpg";
import aires43 from "../../imgs/aires4/aires4-3.jpg";
import aires44 from "../../imgs/aires4/aires4-4.jpg";
import aires45 from "../../imgs/aires4/aires4-5.jpg";
import aires46 from "../../imgs/aires4/aires4-6.jpg";
import aires47 from "../../imgs/aires4/aires4-7.jpg";
import Galery from "../../component/galeri/Galery.jsx";

const Aires4 = () => {
  const images = [
    {
      original: aires41,
      thumbnail: aires41,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires42,
      thumbnail: aires42,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires43,
      thumbnail: aires43,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires44,
      thumbnail: aires44,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires45,
      thumbnail: aires45,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires46,
      thumbnail: aires46,
      originalHeight: 600,
      originalWidth: 1200,
    },
    {
      original: aires47,
      thumbnail: aires47,
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
          <h1 className="imagePrincipalTitleText">Aires 4</h1>
          <p className="imagePrincipalText">
            PENSADA PARA 6 PERSONAS<br></br>CONFORT Y EXCLUSIVIDAD{" "}
          </p>
        </Box>
      </Box>

      <ContentSectionHouse
        title="BIENVENIDOS A AIRES 4"
        text={[
          "Ubicada en un entorno natural privilegiado, Aires 4 es una casa diseñada para el descanso, la comodidad y el disfrute. Con capacidad para hasta seis personas, esta casa combina la tranquilidad del paisaje serrano con todas las comodidades de un hogar acogedor y funcional.",
          "Su amplio living-comedor invita a compartir momentos inolvidables, mientras que la cocina, completamente equipada, ofrece todo lo necesario para preparar deliciosas comidas en un ambiente cálido y confortable.",
          "La casa cuenta con tres dormitorios, uno de ellos matrimonial en suite, y dos baños completos, garantizando privacidad y bienestar para todos los huéspedes.",
          "Espacios exteriores para disfrutar.",
          "El exterior está diseñado para el relax y la conexión con la naturaleza. Su amplia galería con asador es el lugar ideal para reuniones al aire libre, mientras que la pileta privada invita a refrescarse en los días soleados con vistas al entorno serrano.",
          "Además, la casa cuenta con cochera techada y un jardín espacioso, perfecto para disfrutar del aire libre en total tranquilidad.",
          "Un lugar perfecto en las Sierras de Córdoba. Cada rincón ha sido pensado para ofrecer una experiencia única, donde la naturaleza y el confort se encuentran en perfecta armonía.",
          "Un espacio para descansar, disfrutar y crear recuerdos inolvidables.",
        ]}
        imageUrl={img2}
      />

      <ContentSectionHouse
        title="SERVICIOS"
        text={[
          "4 habitaciones, una matrimonial en suite.",
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

export default Aires4;
