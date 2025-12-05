import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box className="notfound-container">
      {/* Background Animation */}
      <div className="notfound-bg">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <motion.div
        className="notfound-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 404 Number */}
        <motion.div
          className="notfound-number"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="four">4</span>
          <motion.span
            className="zero"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            🏠
          </motion.span>
          <span className="four">4</span>
        </motion.div>

        <h1 className="notfound-title">¡Ups! Página no encontrada</h1>
        
        <p className="notfound-text">
          Parece que esta página se fue de vacaciones al lago. 
          Mientras tanto, te invitamos a explorar nuestras casas de campo.
        </p>

        <div className="notfound-actions">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              className="notfound-btn notfound-btn-primary"
              startIcon={<HomeIcon />}
              onClick={() => navigate("/home")}
            >
              Volver al inicio
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              className="notfound-btn notfound-btn-secondary"
              startIcon={<WhatsAppIcon />}
              onClick={() => window.open("https://wa.me/5493518171664", "_blank")}
            >
              Contactanos
            </Button>
          </motion.div>
        </div>

        {/* Quick Links */}
        <div className="notfound-links">
          <span>O visitá:</span>
          <button onClick={() => navigate("/aires2")}>Aires 2</button>
          <button onClick={() => navigate("/aires3")}>Aires 3</button>
          <button onClick={() => navigate("/aires4")}>Aires 4</button>
          <button onClick={() => navigate("/tarifas")}>Tarifas</button>
        </div>
      </motion.div>
    </Box>
  );
};

export default NotFound;

