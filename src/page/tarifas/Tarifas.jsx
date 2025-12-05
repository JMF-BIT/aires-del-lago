import { Box, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import "./Tarifas.css";

// Images
import img1 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen1.jpg";
import img2 from "../../imgs/ImagesCasas/Aires3/air31.jpg";

const tarifasAires2y4 = [
  {
    temporada: "Alta",
    precio: "$200 USD",
    noches: "Mínimo 2 noches",
    descripcion: "Precio por noche para 6 personas",
    destacado: true,
  },
  {
    temporada: "Baja",
    precio: "$150 USD",
    noches: "Mínimo 2 noches",
    descripcion: "Precio por noche para 6 personas",
    destacado: false,
  },
];

const tarifasAires3 = [
  {
    temporada: "Alta",
    precio: "$250 USD",
    noches: "Mínimo 2 noches",
    descripcion: "Precio por noche para 8 personas",
    destacado: true,
  },
  {
    temporada: "Baja",
    precio: "$200 USD",
    noches: "Mínimo 2 noches",
    descripcion: "Precio por noche para 8 personas",
    destacado: false,
  },
];

const aclaraciones = [
  "Fines de semana largos se alquilan completos sin excepción.",
  "Las tarifas pueden ser modificadas sin previo aviso.",
  "Para confirmar la reserva, se debe abonar una seña del 50% del valor total de la estadía. La seña no es reembolsable.",
  "El saldo restante deberá abonarse al momento de llegar al alojamiento en efectivo (pesos o dólares).",
  "Check-in: 14:00 hs — Check-out: 11:00 hs",
];

const TarifaCard = ({ temporada, precio, noches, descripcion, destacado }) => (
  <motion.div
    className={`tarifa-card ${destacado ? "tarifa-card--destacado" : ""}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    {destacado && <span className="tarifa-badge">Más solicitada</span>}
    <span className="tarifa-temporada">Temporada {temporada}</span>
    <div className="tarifa-precio">{precio}</div>
    <span className="tarifa-noches">{noches}</span>
    <p className="tarifa-descripcion">{descripcion}</p>
  </motion.div>
);

const Tarifas = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="tarifas-hero"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="tarifas-hero-overlay" />
        <motion.div
          className="tarifas-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Tarifas</h1>
          <p>Precios transparentes para tu estadía perfecta</p>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="tarifas-info">
        <div className="tarifas-info-container">
          <div className="tarifas-info-card">
            <h3>📅 Temporada Alta</h3>
            <p>1 de Diciembre al 28 de Febrero, fines de semana largos y vacaciones de julio</p>
          </div>
          <div className="tarifas-info-card">
            <h3>🍂 Temporada Baja</h3>
            <p>1 de Marzo al 30 de Noviembre</p>
          </div>
          <div className="tarifas-info-card">
            <h3>💵 Forma de Pago</h3>
            <p>
              Precios en USD. Pago en dólares o pesos argentinos según cotización dólar blue venta de{" "}
              <a href="https://www.ambito.com/contenidos/dolar-informal.html" target="_blank" rel="noopener noreferrer">
                Ámbito Financiero
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Aires 2 y 4 */}
      <section className="tarifas-section">
        <div className="tarifas-section-header">
          <motion.img
            src={img1}
            alt="Aires 2 y Aires 4"
            className="tarifas-section-img"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />
          <div>
            <span className="section-label">6 personas</span>
            <h2>Aires 2 y Aires 4</h2>
          </div>
        </div>
        <div className="tarifas-cards">
          {tarifasAires2y4.map((tarifa, index) => (
            <TarifaCard key={index} {...tarifa} />
          ))}
        </div>
      </section>

      {/* Aires 3 */}
      <section className="tarifas-section tarifas-section--alt">
        <div className="tarifas-section-header">
          <motion.img
            src={img2}
            alt="Aires 3"
            className="tarifas-section-img"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />
          <div>
            <span className="section-label">8 personas</span>
            <h2>Aires 3</h2>
          </div>
        </div>
        <div className="tarifas-cards">
          {tarifasAires3.map((tarifa, index) => (
            <TarifaCard key={index} {...tarifa} />
          ))}
        </div>
      </section>

      {/* Aclaraciones */}
      <section className="tarifas-aclaraciones">
        <div className="aclaraciones-container">
          <h3>📋 Información Importante</h3>
          <ul>
            {aclaraciones.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="tarifas-cta">
        <motion.div
          className="tarifas-cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>¿Listo para reservar?</h2>
          <p>Consultá disponibilidad y asegurá tu lugar</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              className="tarifas-cta-btn"
              onClick={() => navigate("/contact")}
            >
              Consultar ahora
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Tarifas;
