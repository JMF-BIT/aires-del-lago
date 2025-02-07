import { Box, Grid } from "@mui/material";
import "./Aires.css";
import NavBar from "../../component/navbar/NavBar";
import TarifaItem from "../../component/tarifaItem/TarifaItem.jsx";
import ContentSectionHouse from "../../component/ContentSectionHouse/ContentSectionHouse.jsx";
import "../../component/ContentSectionHouse/ContentSectionHouse.css";
import img1 from "../../imgs/ImagesCasas/Aires4/ImagenPrincipalTop.jpg";
import img2 from "../../imgs/ImagesCasas/Aires4/ImagenPrueba1.jpg";
import img3 from "../../imgs/ImagesCasas/Aires4/Aires4Imagen2.jpg";
import img4 from "../../imgs/ImagesCasas/Aires4/AiresTarifa1.jpg";

const Aires4 = () => {
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
          "Ubicada en un entorno natural privilegiado, Aires 4 es una casa pensada para el descanso, la comodidad y el disfrute. Con capacidad para hasta 6 personas, esta casa combina la tranquilidad del paisaje serrano con todas las comodidades de un hogar acogedor y funcional.",
          "Su amplio living-comedor invita a compartir momentos inolvidables, mientras que la cocina completamente equipada ofrece todo lo necesario para preparar deliciosas comidas en un ambiente cálido y confortable.",
          "La casa cuenta con tres dormitorios, uno de ellos matrimonial en suite, y dos baños completos, garantizando privacidad y bienestar para todos los huéspedes.",
          "Espacios exteriores para disfrutar.",
          "El exterior está diseñado para el relax y la conexión con la naturaleza. Su amplia galería con asador es el lugar ideal para reuniones al aire libre, mientras que la pileta privada invita a refrescarse en los días soleados con vistas al entorno serrano.",
          "Además, la casa cuenta con cochera techada y un jardín espacioso, perfecto para disfrutar del aire libre en total tranquilidad.",
          "Un lugar perfecto en las Sierras de Córdoba. Cada rincón está pensado para ofrecer una experiencia única, donde la naturaleza y el confort se encuentran en perfecta armonía.",
          "Un lugar para descansar, disfrutar y crear recuerdos inolvidables.",
        ]}
        imageUrl={img2}
      />

      <ContentSectionHouse
        title="SERVICIOS"
        text={
          <ul>
            {[
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
          </ul>
        }
        imageUrl={img3}
        reverse={true} // La imagen se coloca a la izquierda
      />
      <Box className="boxGridContainer">
        {/* Sección de texto que ocupa el ancho completo */}
        <Grid container className="gridTextContainer">
          <Grid item xs={12} className="gridText">
            <h1 className="hola">TARIFAS</h1>
            <h4 className="hola">
              Los precios a continuación corresponden a AIRES 4.
            </h4>
            <p className="hola textoCentrado">
              TEMPORADA ALTA: entre el 1 de diciembre y el 28 de febrero.
              TEMPORADA BAJA: entre el 1 de marzo y el 30 de noviembre. Las
              tarifas pueden ser modificadas sin previo aviso. Los precios están
              expresados en dólares estadounidenses. El pago se realizará en
              DÓLARES o pesos argentinos de acuerdo a la cotización del dólar
              blue venta que informa el sitio web de Ámbito Financiero al
              momento de cada pago -{" "}
              <a
                href="https://www.ambito.com/contenidos/dolar-informal.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ámbito Financiero
              </a>
              .
            </p>
          </Grid>
        </Grid>

        {/* Sección de tarifas en dos columnas */}
        <Grid container className="gridContainer1">
          <Grid item xs={12} md={6} className="itemhola">
            <TarifaItem
              precio="$200 USD"
              noches="1 noche"
              texto="(Mínimo de 2 noches)"
              img={img4}
            />
          </Grid>
          <Grid item xs={12} md={6} className="itemhola">
            <TarifaItem
              precio="$200 USD"
              noches="1 noche"
              texto="(Mínimo de 2 noches)"
              img={img3}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Aires4;
