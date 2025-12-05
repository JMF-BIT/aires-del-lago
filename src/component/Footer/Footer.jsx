import { Box, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import "./Footer.css";

const socialLinks = {
  instagram: "https://www.instagram.com/airesdellago_/",
  whatsapp: "https://wa.me/5493518171664",
  location: "https://www.google.com/maps/place/31%C2%B050'09.0%22S+64%C2%B033'48.0%22W/@-31.8358307,-64.5659065,17z",
};

const Footer = () => {
  return (
    <Box component="footer" className="footer-container">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            fill="var(--color-primary)" 
            d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 C1350,100 1440,50 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
      
      <Box className="footer-content">
        <Grid container spacing={4} className="footer-grid">
          {/* Logo y descripción */}
          <Grid item xs={12} md={4}>
            <Box className="footer-brand">
              <h3 className="footer-logo">Aires del Lago</h3>
              <p className="footer-description">
                Un lugar pensado para disfrutar. Casas de campo frente al Lago Los Molinos, Córdoba.
              </p>
            </Box>
          </Grid>
          
          {/* Enlaces de contacto */}
          <Grid item xs={12} md={4}>
            <Box className="footer-contact">
              <h4 className="footer-title">Contacto</h4>
              <ul className="footer-contact-list">
                <li>
                  <WhatsAppIcon className="footer-contact-icon" />
                  <span>+54 9 351 817 1664</span>
                </li>
                <li>
                  <InstagramIcon className="footer-contact-icon" />
                  <span>@airesdellago_</span>
                </li>
                <li>
                  <LocationOnIcon className="footer-contact-icon" />
                  <span>Lago Los Molinos, Córdoba</span>
                </li>
              </ul>
            </Box>
          </Grid>
          
          {/* Redes sociales */}
          <Grid item xs={12} md={4}>
            <Box className="footer-social">
              <h4 className="footer-title">Seguinos</h4>
              <Box className="footer-social-links">
                <motion.a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Seguinos en Instagram"
                >
                  <InstagramIcon />
                </motion.a>
                <motion.a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link whatsapp"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Contactanos por WhatsApp"
                >
                  <WhatsAppIcon />
                </motion.a>
                <motion.a
                  href={socialLinks.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link location"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Ver ubicación en Google Maps"
                >
                  <LocationOnIcon />
                </motion.a>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        {/* Copyright */}
        <Box className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Aires del Lago. Todos los derechos reservados.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

