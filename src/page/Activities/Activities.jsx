import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../../component/Layout/Layout";
import ContentSection from "../../component/ContentSection/ContentSection";
import "./Activities.css";

import img1 from "../../imgs/ImagesActivities/ImagePrincipalTop.jpg";
import img4 from "../../imgs/ImagesActivities/cancha.jpg";
import img5 from "../../imgs/ImagesActivities/activ.jpg";

const barrioAmenities = [
  { icon: "🎾", name: "Cancha de tenis" },
  { icon: "⚽", name: "Cancha de fútbol" },
  { icon: "🏐", name: "Cancha de vóley" },
  { icon: "🏊", name: "Piletas comunitarias" },
  { icon: "🏋️", name: "Gimnasio" },
  { icon: "🎮", name: "Sala de juegos" },
  { icon: "🍽️", name: "Restaurante" },
  { icon: "🛒", name: "Proveeduría" },
  { icon: "🌊", name: "Bajada al lago" },
  { icon: "🚣", name: "Kayaks" },
  { icon: "⛵", name: "Servicio de botadura y varadura" },
];

const Activities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="activities-hero"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="activities-hero-overlay" />
        <motion.div
          className="activities-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Actividades</h1>
          <p>Descubrí todo lo que podés hacer durante tu estadía</p>
        </motion.div>
      </section>

      {/* El Complejo */}
      <ContentSection
        title="El Complejo"
        text={[
          "La ubicación de Aires del Lago te permite disfrutar de la tranquilidad del lago y, al mismo tiempo, explorar dos de los destinos turísticos más atractivos de Córdoba: Villa General Belgrano y Los Reartes, que se encuentran a solo 20 minutos de distancia.",
          "En Los Reartes podés disfrutar de sus playas de río, recorrer senderos rodeados de naturaleza y visitar su casco histórico. Ideal para cabalgatas, trekking y mountain bike.",
          "En Villa General Belgrano podés pasear por sus pintorescas calles, degustar su gastronomía, visitar cervecerías artesanales y participar en festivales como la Oktoberfest.",
          "Ya sea que prefieras la calma del lago, la aventura en la montaña o la cultura y gastronomía, Aires del Lago es el punto de partida perfecto para vivir experiencias inolvidables.",
        ]}
        imageUrl={img4}
      />

      {/* Amenidades del Barrio */}
      <section className="amenities-section">
        <div className="amenities-container">
          <motion.div
            className="amenities-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Puerto del Águila</span>
            <h2>Servicios del Barrio</h2>
            <p>Disfrutá de todas las instalaciones del country náutico</p>
          </motion.div>

          <motion.div
            className="amenities-image"
            style={{ backgroundImage: `url(${img5})` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />

          <div className="amenities-grid">
            {barrioAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                className="amenity-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="amenity-icon">{amenity.icon}</span>
                <span className="amenity-name">{amenity.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Piletas Privadas */}
      <section className="padel-section">
        <motion.div
          className="padel-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Exclusivo</span>
          <h2>Piletas Privadas por Casa</h2>
          <p>
            Además de todas las actividades del barrio, cada cabaña cuenta con
            su propia pileta privada exclusiva para los huéspedes de Aires del
            Lago. Disfrutá de un momento de relax y frescura en cualquier momento de tu estadía.
          </p>
          <div className="padel-features">
            <div className="padel-feature">
              <span>🏊</span>
              <span>Pileta privada</span>
            </div>
            <div className="padel-feature">
              <span>🏠</span>
              <span>Una por cabaña</span>
            </div>
            <div className="padel-feature">
              <span>✨</span>
              <span>Acceso exclusivo</span>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Activities;
