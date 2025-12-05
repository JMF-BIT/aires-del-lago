import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import ContentSection from "../../component/ContentSection/ContentSection";
import Galery from "../../component/galeri/Galery.jsx";
import "./Aires2.css"; // Shared styles

// Images
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

const galleryImages = [
  { original: aires41, thumbnail: aires41 },
  { original: aires42, thumbnail: aires42 },
  { original: aires43, thumbnail: aires43 },
  { original: aires44, thumbnail: aires44 },
  { original: aires45, thumbnail: aires45 },
  { original: aires46, thumbnail: aires46 },
  { original: aires47, thumbnail: aires47 },
];

const services = [
  "4 habitaciones, una matrimonial en suite.",
  "3 baños (1 exterior para la pileta)",
  "Capacidad para 6 personas",
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
  "Bajada al lago y acceso a servicios del barrio",
];

const Aires4 = () => {
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
          <h1>Aires 4</h1>
          <p>Pensada para 6 personas · Confort y tranquilidad</p>
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
        title="Bienvenidos a Aires 4"
        text={[
          "Aires 4 combina la calidez de un hogar con la serenidad del entorno natural. Diseñada para hasta 6 personas, ofrece el equilibrio perfecto entre comodidad y conexión con la naturaleza.",
          "Sus dos habitaciones acogedoras y tres baños completos aseguran privacidad y confort para todos los huéspedes.",
          "El living integrado con amplios ventanales permite disfrutar de la luz natural durante todo el día, mientras la cocina completamente equipada invita a preparar deliciosas comidas.",
          "La galería con asador y la pileta privada completan una experiencia de descanso inolvidable.",
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
          <h2>¿Te gustaría alojarte en Aires 4?</h2>
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

export default Aires4;
