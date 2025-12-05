import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import ContentSection from "../../component/ContentSection/ContentSection";
import Galery from "../../component/galeri/Galery.jsx";
import "./Aires2.css";

// Images
import img1 from "../../imgs/ImagesCasas/Aires2/Aires2ImagenTop.jpg";
import img2 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen1.jpg";
import img3 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen2.jpg";
import aires21 from "../../imgs/aires2/aires2-1.jpg";
import aires22 from "../../imgs/aires2/aires2-2.jpg";
import aires23 from "../../imgs/aires2/aires2-3.jpg";
import aires24 from "../../imgs/aires2/aires2-4.jpg";
import aires25 from "../../imgs/aires2/aires2-5.jpg";
import aires26 from "../../imgs/aires2/aires2-6.jpg";
import aires27 from "../../imgs/aires2/aires2-7.jpg";

const galleryImages = [
  { original: aires21, thumbnail: aires21 },
  { original: aires22, thumbnail: aires22 },
  { original: aires23, thumbnail: aires23 },
  { original: aires24, thumbnail: aires24 },
  { original: aires25, thumbnail: aires25 },
  { original: aires26, thumbnail: aires26 },
  { original: aires27, thumbnail: aires27 },
];

const services = [
  "2 habitaciones, una matrimonial en suite",
  "3 baños (1 exterior para la pileta)",
  "Agua caliente para la ducha y la cocina",
  "Amplia galería con asador",
  "Asador equipado con parrilla y kit de asador",
  "Pileta privada",
  "Reposeras",
  "Aire acondicionado en todos los espacios",
  "Calefacción mediante calefactor tiro balanceado",
  "Internet satelital de alta velocidad Starlink",
  "DirecTV",
  "Living con amplios ventanales",
  "Cocina comedor y living integrados",
  "Cocina completamente equipada",
  "Ropa blanca",
  "Bajada al lago y acceso a servicios del complejo",
  "Estacionamiento techado",
];

const Aires2 = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="casa-hero"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="casa-hero-overlay" />
        <motion.div
          className="casa-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="casa-hero-label">Casa de campo</span>
          <h1>Aires 2</h1>
          <p>Pensada para 6 personas · Confort y exclusividad</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              className="casa-hero-cta"
              onClick={() => navigate("/contact")}
            >
              Consultar disponibilidad
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Description Section */}
      <ContentSection
        title="Bienvenidos a Aires 2"
        text={[
          "Ubicada en un entorno natural privilegiado, Aires 2 es una casa pensada para el descanso, la comodidad y el disfrute. Con capacidad para hasta 6 personas, esta casa combina la tranquilidad del paisaje serrano con todas las comodidades de un hogar acogedor y funcional.",
          "Su amplio living-comedor invita a compartir momentos inolvidables, mientras que la cocina completamente equipada ofrece todo lo necesario para preparar deliciosas comidas en un ambiente cálido y confortable.",
          "La casa cuenta con dos dormitorios, uno de ellos matrimonial en suite, y dos baños completos, garantizando privacidad y bienestar para todos los huéspedes.",
          "El exterior está diseñado para el relax y la conexión con la naturaleza. Su amplia galería con asador es el lugar ideal para reuniones al aire libre, mientras que la pileta privada invita a refrescarse en los días soleados.",
        ]}
        imageUrl={img2}
      />

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <motion.div
            className="services-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Comodidades</span>
            <h2>Servicios incluidos</h2>
          </motion.div>

          <motion.div
            className="services-image"
            style={{ backgroundImage: `url(${img3})` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />

          <motion.ul
            className="services-list"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {services.map((service, index) => (
              <li key={index}>
                <span className="service-check">✓</span>
                {service}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-header">
          <span className="section-label">Galería</span>
          <h2>Conocé cada rincón</h2>
        </div>
        <div className="gallery-container">
          <Galery imgs={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="casa-cta-section">
        <motion.div
          className="casa-cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>¿Te gustaría alojarte en Aires 2?</h2>
          <p>
            Consultá disponibilidad y tarifas. Te respondemos a la brevedad.
          </p>
          <div className="casa-cta-buttons">
            <Button
              variant="contained"
              className="btn-primary-casa"
              onClick={() => navigate("/contact")}
            >
              Reservar ahora
            </Button>
            <Button
              variant="outlined"
              className="btn-secondary-casa"
              onClick={() => navigate("/tarifas")}
            >
              Ver tarifas
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Aires2;
