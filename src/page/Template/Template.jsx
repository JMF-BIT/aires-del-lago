import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../../component/Layout/Layout";
import ContentSection from "../../component/ContentSection/ContentSection";
import "./Template.css";

import img1 from "../../imgs/contact1.png";
import img2 from "../../imgs/ImagesNosotros/NosotrosCasa1.jpg";
import img3 from "../../imgs/ImagesNosotros/NosotrosUbicacion.jpg";

const Template = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="template-hero"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="template-hero-overlay" />
        <motion.div
          className="template-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>¿Quiénes Somos?</h1>
          <p>Conocé nuestra historia y pasión por este lugar</p>
        </motion.div>
      </section>

      {/* Content Sections */}
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
        title="Ubicación Privilegiada"
        text={[
          "Aires del Lago se encuentra en un entorno privilegiado, sobre el Lago Los Molinos, a solo 80 km de la ciudad de Córdoba, pasando Potrero de Garay.",
          "Ubicados dentro del exclusivo country náutico 'Puerto del Águila', ofrecemos el equilibrio perfecto entre naturaleza, tranquilidad y confort, con la seguridad y las comodidades que necesitás para una estadía inolvidable.",
          "Además, estamos a solo 20 minutos de encantadoras localidades turísticas como Villa General Belgrano y Los Reartes, donde podés disfrutar de su gastronomía, cultura y actividades al aire libre.",
          "¡Un refugio ideal para conectar con la naturaleza sin renunciar al confort! 🌿✨",
        ]}
        imageUrl={img3}
        reverse={true}
      />
    </Layout>
  );
};

export default Template;
