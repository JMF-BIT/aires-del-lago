import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import ContentSection from "../../component/ContentSection/ContentSection";
import Galery from "../../component/galeri/Galery.jsx";
import "./Aires2.css"; // Shared styles

// Images
import img1 from "../../imgs/ImagesCasas/Aires3/ImageTop.jpg";
import img2 from "../../imgs/ImagesCasas/Aires3/air31.jpg";
import img3 from "../../imgs/ImagesCasas/Aires3/air32.jpg";
import aires31 from "../../imgs/aires3/aires3-1.jpg";
import aires32 from "../../imgs/aires3/aires3-2.jpg";
import aires33 from "../../imgs/aires3/aires3-3.jpg";
import aires34 from "../../imgs/aires3/aires3-4.jpg";
import aires35 from "../../imgs/aires3/aires3-5.jpg";
import aires36 from "../../imgs/aires3/aires3-6.jpg";
import aires37 from "../../imgs/aires3/aires3-7.jpg";
import aires38 from "../../imgs/aires3/aires3-8.jpg";

const galleryImages = [
  { original: aires31, thumbnail: aires31 },
  { original: aires32, thumbnail: aires32 },
  { original: aires33, thumbnail: aires33 },
  { original: aires34, thumbnail: aires34 },
  { original: aires35, thumbnail: aires35 },
  { original: aires36, thumbnail: aires36 },
  { original: aires37, thumbnail: aires37 },
  { original: aires38, thumbnail: aires38 },
];

const services = [
  "3 habitaciones, una matrimonial en suite.",
  "3 baños (1 exterior para la pileta).",
  "Capacidad para 8 personas",
  "Amplia galería con asador",
  "Asador equipado con parrilla y kit de asador",
  "Pileta privada con vista al lago",
  "Reposeras y sombrilla",
  "Aire acondicionado en todos los espacios",
  "Calefacción mediante calefactor tiro balanceado",
  "Internet satelital de alta velocidad Starlink",
  "DirecTV",
  "Living con amplios ventanales panorámicos",
  "Cocina comedor y living integrados",
  "Cocina completamente equipada",
  "Ropa blanca",
  "Bajada al lago y acceso a servicios del barrio",
  "Estacionamiento techado",
];

const Aires3 = () => {
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
          <h1>Aires 3</h1>
          <p>Pensada para 8 personas · Espacios amplios y vistas únicas</p>
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
        title="Bienvenidos a Aires 3"
        text={[
          "Aires 3 es nuestra casa más espaciosa, diseñada para grupos más grandes que buscan comodidad sin sacrificar privacidad. Con capacidad para hasta 8 personas, es perfecta para familias numerosas o grupos de amigos.",
          "Sus tres habitaciones amplias y luminosas, junto con cuatro baños completos, garantizan espacio y confort para todos los huéspedes.",
          "El diseño de espacios integrados permite disfrutar de momentos compartidos, mientras que los amplios ventanales ofrecen vistas panorámicas del entorno serrano.",
          "La galería exterior con asador es el corazón de las reuniones, complementada por una pileta privada con vistas espectaculares al lago.",
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
          <h2>¿Te gustaría alojarte en Aires 3?</h2>
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

export default Aires3;
