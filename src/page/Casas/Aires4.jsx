import { Box } from "@mui/material";
import NavBar from "../../component/navbar/NavBar";
import ContentSectionHouse from "../../component/ContentSectionHouse/ContentSectionHouse.jsx";
import "../../component/ContentSectionHouse/ContentSectionHouse.css";
import img1 from "../../imgs/ImagesCasas/Aires2/Aires2ImagenTop.jpg";
import img2 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen1.jpg";
import img3 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen2.jpg";
import aires41 from "../../imgs/aires4/aires4-1.jpg";
import aires42 from "../../imgs/aires4/aires4-2.jpg";
import aires43 from "../../imgs/aires4/aires4-3.jpg";
import aires44 from "../../imgs/aires4/aires4-4.jpg";
import aires45 from "../../imgs/aires4/aires4-5.jpg";
import Galery from "../../component/galeri/Galery.jsx";

const Aires2 = () => {
  const images = [
    {
      original: aires41,
      thumbnail: aires41,
    },
    {
      original: aires42,
      thumbnail: aires42,
    },
    {
      original: aires43,
      thumbnail: aires43,
    },
    {
      original: aires44,
      thumbnail: aires44,
    },
    {
      original: aires45,
      thumbnail: aires45,
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
          "Ubicada en un entorno natural privilegiado, Aires 4 es una casa pensada para el descanso, la comodidad y el disfrute. Con capacidad para hasta 6 personas, estA CASA combina la tranquilidad del paisaje serrano con todas las comodidades de un hogar acogedor y funcional.",
          <p key="space1" style={{ margin: "10px 0" }} />,
          "Su amplio living-comedor invita a compartir momentos inolvidables, mientras que la cocina completamente equipada ofrece todo lo necesario para preparar deliciosas comidas en un ambiente cálido y confortable.",
          <p key="space2" style={{ margin: "10px 0" }} />,
          "La casa cuenta con TRES dormitorios, uno de ellos matrimonial en suite, y dos baños completos, garantizando privacidad y bienestar para todos los huéspedes.",
          <p key="space3" style={{ margin: "10px 0" }} />,
          "Espacios exteriores para disfrutar",
          <p key="space4" style={{ margin: "10px 0" }} />,
          "El exterior  está diseñado para el relax y la conexión con la naturaleza. Su amplia galería con asador es el lugar ideal para reuniones al aire libre, mientras que la pileta privada invita a refrescarse en los días soleados con vistas al entorno serrano.",
          <p key="space5" style={{ margin: "10px 0" }} />,
          "Además, la casa cuenta con cochera techada y un jardín espacioso, perfecto para disfrutar del aire libre en total tranquilidad.",
          <p key="space6" style={{ margin: "10px 0" }} />,
          "Un lugar perfecto en las Sierras de Córdoba. Cada rincón está pensado para ofrecer una experiencia única, donde la naturaleza y el confort se encuentran en perfecta armonía.",
          <p key="space7" style={{ margin: "10px 0" }} />,
          "Un lugar para descansar, disfrutar y crear recuerdos inolvidables.",
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
          <li key={index}>{item}</li> // Usamos <li> para cada elemento de la lista
        ))}
        imageUrl={img3}
        reverse={true} // La imagen se coloca a la izquierda
      />
      <Galery imgs={images}></Galery>
    </>
  );
};

export default Aires2;
