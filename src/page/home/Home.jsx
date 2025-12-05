import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import SliderHomeComponent from "../../component/sliderhome/SliderHomeComponent";
import HousePhotoSlider from "../../component/sliderhouseshome/SliderHouse1";
import "./Home.css";

// Images
import imga1 from "../../imgs/casas/aires2.jpg";
import imga2 from "../../imgs/casas/air2.jpg";
import imga3 from "../../imgs/casas/aires3.jpg";
import imga4 from "../../imgs/casas/air3.jpg";
import imga5 from "../../imgs/casas/aires4.jpg";
import imga6 from "../../imgs/casas/air4.jpg";
import ribbonImg from "../../imgs/home/cinta.jpg";

const housesData = [
  {
    id: 1,
    images: [imga1, imga2],
    title: "Aires 2",
    description: "Capacidad para 6 personas.",
    path: "/aires2",
    features: ["2 habitaciones", "Pileta privada", "Asador"],
  },
  {
    id: 2,
    images: [imga3, imga4],
    title: "Aires 3",
    description: "Capacidad para 8 personas.",
    path: "/aires3",
    features: ["3 habitaciones", "Pileta privada", "Asador"],
  },
  {
    id: 3,
    images: [imga5, imga6],
    title: "Aires 4",
    description: "Capacidad para 6 personas.",
    path: "/aires4",
    features: ["2 habitaciones", "Pileta privada", "Asador"],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  const navigate = useNavigate();

  const scrollToHouses = () => {
    const element = document.getElementById("houses-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* Hero Section with Slider */}
      <section className="hero-section">
        <Box className="hero-slider">
          <SliderHomeComponent />
          <div className="hero-overlay" />
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="h1" className="hero-title">
              AIRES DEL LAGO
            </Typography>
            <Typography variant="h2" className="hero-subtitle">
              casas de campo
            </Typography>
            <p className="hero-tagline">un lugar pensado para disfrutar</p>
            <motion.button
              className="hero-cta"
              onClick={scrollToHouses}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar casas
            </motion.button>
          </motion.div>
        </Box>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <motion.div
          className="welcome-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Bienvenidos</span>
          <h2 className="welcome-title">
            Conoce nuestras opciones para tu merecido descanso
          </h2>
          <img
            src={ribbonImg}
            alt=""
            className="welcome-ribbon"
            aria-hidden="true"
          />
          <div className="welcome-text">
            <p>
              Aires del Lago es un lugar increíble ubicado frente al lago Los
              Molinos. Nuestro complejo de casas de alquiler ofrece comodidad y
              elegancia. Disfruta de nuestras piletas privadas y todas las
              comodidades del complejo.
            </p>
            <p>
              Ideal para familias y grupos de amigos. Relajación y diversión en
              un entorno natural. Vení y descubrí la experiencia perfecta,
              <strong> un lugar pensado para vos!</strong>
            </p>
          </div>
          <motion.button
            className="btn btn-primary"
            onClick={scrollToHouses}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            EXPLORA NUESTRAS CASAS
          </motion.button>
        </motion.div>
      </section>

      {/* Houses Section */}
      <section id="houses-section" className="houses-section">
        <div className="section-header">
          <span className="section-label">Alojamiento</span>
          <h2 className="section-title">Nuestras Casas</h2>
        </div>

        <motion.div
          className="houses-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {housesData.map((house) => (
            <motion.div
              key={house.id}
              className="house-card-wrapper"
              variants={itemVariants}
            >
              <Card className="house-card">
                <CardMedia className="house-card-media">
                  <HousePhotoSlider images={house.images} />
                </CardMedia>
                <CardContent className="house-card-content">
                  <Typography variant="h3" className="house-card-title">
                    {house.title}
                  </Typography>
                  <Typography className="house-card-description">
                    {house.description}
                  </Typography>
                  <ul className="house-card-features">
                    {house.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <motion.div
                    className="house-card-action"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="contained"
                      className="house-card-button"
                      onClick={() => navigate(house.path)}
                    >
                      Ver más
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <motion.div
            className="feature-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="feature-icon">🏊</div>
            <h3>Pileta Privada</h3>
            <p>
              Cada casa cuenta con su propia pileta para disfrutar en familia
            </p>
          </motion.div>
          <motion.div
            className="feature-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="feature-icon">🌊</div>
            <h3>Frente al Lago</h3>
            <p>Vistas increíbles y acceso directo al Lago Los Molinos</p>
          </motion.div>
          <motion.div
            className="feature-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="feature-icon">📶</div>
            <h3>Internet Starlink</h3>
            <p>Conexión satelital de alta velocidad en todas las casas</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
