import { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "5493518171664";
const DEFAULT_MESSAGE = "Hola! Me interesa consultar sobre disponibilidad y tarifas de las casas.";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    // Show button after 2 seconds even without scroll
    const timer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="whatsapp-container"
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Tooltip/Message Box */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="whatsapp-popup"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="whatsapp-popup-header">
                  <div className="whatsapp-popup-avatar">
                    <WhatsAppIcon />
                  </div>
                  <div className="whatsapp-popup-info">
                    <span className="whatsapp-popup-name">Aires del Lago</span>
                    <span className="whatsapp-popup-status">
                      <span className="status-dot"></span>
                      Normalmente responde en minutos
                    </span>
                  </div>
                  <button 
                    className="whatsapp-popup-close"
                    onClick={() => setIsOpen(false)}
                    aria-label="Cerrar"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <div className="whatsapp-popup-body">
                  <div className="whatsapp-message">
                    <p>¡Hola! 👋</p>
                    <p>¿En qué podemos ayudarte?</p>
                    <p>Consultá disponibilidad y tarifas.</p>
                    <span className="message-time">Ahora</span>
                  </div>
                </div>
                <button 
                  className="whatsapp-popup-cta"
                  onClick={handleWhatsAppClick}
                >
                  <WhatsAppIcon />
                  Iniciar conversación
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          <motion.button
            className={`whatsapp-fab ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Cerrar WhatsApp" : "Abrir WhatsApp"}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <CloseIcon /> : <WhatsAppIcon />}
            </motion.div>
          </motion.button>

          {/* Pulse animation ring */}
          {!isOpen && (
            <motion.div
              className="whatsapp-pulse"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0.2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;

