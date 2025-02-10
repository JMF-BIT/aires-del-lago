import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Grid } from "@mui/material";
import "../../component/ContentSection/ContentSection.css";
import NavBar from "../../component/navbar/NavBar";
import ContentSection from "../../component/ContentSection/ContentSection";
import img1 from "../../imgs/ImagesNosotros/NosotrosImagePrincipalTop.jpg";
import img2 from "../../imgs/ImagesNosotros/NosotrosCasa1.jpg";
import img3 from "../../imgs/ImagesNosotros/NosotrosUbicacion.jpg";
import "./Template.css";

const Template = () => {
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
        <Box
          className="boxPrincipalTextTop"
          style={{ fontFamily: "Times New Roman, Garamond, Baskerville" }}
        >
          <h1 className="imagePrincipalTitleText">¿QUIENES SOMOS?</h1>
        </Box>
      </Box>

      <ContentSection
        title="Un rincón para compartir y disfrutar"
        text={[
          "Nuestro emprendimiento nació de algo simple y hermoso: la alegría de compartir momentos inolvidables con familia y amigos.",
          "Durante años, pasamos los fines de semana en este lugar mágico, a orillas del Lago Los Molinos, disfrutando de la paz, la naturaleza y la conexión con lo esencial.",
          "Quisimos llevar esa experiencia más allá y abrirle las puertas a quienes, como nosotros, buscan un espacio para relajarse, desconectar y crear recuerdos inolvidables.",
          "Así nació este emprendimiento familiar, con el deseo de que más personas descubran y disfruten este rincón especial que tanto amamos.",
          "Te invitamos a vivir la experiencia, a despertar con vistas al lago, a sentir la brisa fresca y a descubrir la magia de este lugar único. ¡Tu próximo descanso te espera! ✨",
        ]}
        imageUrl={img2}
      />

      <ContentSection
        title="UBICACIÓN"
        text={[
          "Aires del Lago se encuentra en un entorno privilegiado, sobre el Lago Los Molinos, a solo 80 km de la ciudad de Córdoba, pasando Potrero de Garay.",
          <p key="space1" style={{ margin: "10px 0" }} />,
          "Ubicados dentro del exclusivo country náutico 'Puerto del Águila', ofrecemos el equilibrio perfecto entre naturaleza, tranquilidad y confort, con la seguridad y las comodidades que necesitás para una estadía inolvidable.",
          <p key="space1" style={{ margin: "10px 0" }} />,
          "Además, estamos a solo 20 minutos de encantadoras localidades turísticas como Villa General Belgrano y Los Reartes, donde podés disfrutar de su gastronomía, cultura y actividades al aire libre.",
          <p key="space1" style={{ margin: "10px 0" }} />,
          "¡Un refugio ideal para conectar con la naturaleza sin renunciar al confort! 🌿✨",
        ]}
        imageUrl={img3}
        reverse={true} // La imagen se coloca a la izquierda
      />

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

export default Template;
