import { useState } from "react";
import { Box, Grid, TextField, Button, Alert, Snackbar } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import Layout from "../../component/Layout/Layout";
import "./Contact.css";
import imgA from "../../imgs/contact1.png";
import imgB from "../../imgs/contact2.png";

const contactOptions = [
  {
    icon: FmdGoodIcon,
    title: "Ubicación",
    subtitle: "Lago Los Molinos, Córdoba",
    url: "https://www.google.com/maps/place/31%C2%B050'09.0%22S+64%C2%B033'48.0%22W/@-31.8358307,-64.5659065,17z",
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    subtitle: "@airesdellago_",
    url: "https://www.instagram.com/airesdellago_/",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    subtitle: "+54 9 351 817 1664",
    url: "https://wa.me/5493518171664",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    fechaIngreso: "",
    fechaEgreso: "",
    cantidadPersonas: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }
    
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^[\d\s+-]+$/.test(formData.telefono)) {
      newErrors.telefono = "Ingresa un teléfono válido";
    }
    
    if (!formData.cantidadPersonas) {
      newErrors.cantidadPersonas = "Indica la cantidad de personas";
    } else if (formData.cantidadPersonas < 1 || formData.cantidadPersonas > 20) {
      newErrors.cantidadPersonas = "Entre 1 y 20 personas";
    }
    
    if (!formData.fechaIngreso) {
      newErrors.fechaIngreso = "Selecciona la fecha de ingreso";
    }
    
    if (!formData.fechaEgreso) {
      newErrors.fechaEgreso = "Selecciona la fecha de egreso";
    } else if (formData.fechaIngreso && formData.fechaEgreso < formData.fechaIngreso) {
      newErrors.fechaEgreso = "La fecha debe ser posterior al ingreso";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendMessageToWhatsApp = () => {
    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: "Por favor completa los campos requeridos",
        severity: "error",
      });
      return;
    }

    const { nombre, telefono, fechaIngreso, fechaEgreso, cantidadPersonas, mensaje } = formData;
    const phoneNumber = "5493518171664";
    
    const messageText = `¡Hola! Me gustaría consultar disponibilidad:

*Nombre:* ${nombre}
*Teléfono:* ${telefono}
*Fecha de ingreso:* ${fechaIngreso}
*Fecha de egreso:* ${fechaEgreso}
*Cantidad de personas:* ${cantidadPersonas}
${mensaje ? `*Mensaje:* ${mensaje}` : ""}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(url, "_blank");
    
    setSnackbar({
      open: true,
      message: "¡Redirigiendo a WhatsApp!",
      severity: "success",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${imgA})` }}
      >
        <div className="contact-hero-overlay" />
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contacto</h1>
          <p>Estamos para ayudarte con tu reserva</p>
        </motion.div>
      </section>

      {/* Contact Options */}
      <section className="contact-options">
        <div className="contact-options-container">
          {contactOptions.map((option, index) => (
            <motion.a
              key={option.title}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-option-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="contact-option-icon">
                <option.icon />
              </div>
              <h3>{option.title}</h3>
              <p>{option.subtitle}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="contact-form-section"
        style={{ backgroundImage: `url(${imgB})` }}
      >
        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-form-header">
            <h2>Consultá disponibilidad</h2>
            <p>
              Completá el formulario y te responderemos a la brevedad. 
              ¡Muchas gracias!
            </p>
          </div>

          <Box component="form" className="contact-form">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nombre completo"
                  variant="outlined"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  error={!!errors.nombre}
                  helperText={errors.nombre}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Teléfono"
                  variant="outlined"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  error={!!errors.telefono}
                  helperText={errors.telefono}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Cantidad de personas"
                  type="number"
                  variant="outlined"
                  name="cantidadPersonas"
                  value={formData.cantidadPersonas}
                  onChange={handleChange}
                  error={!!errors.cantidadPersonas}
                  helperText={errors.cantidadPersonas}
                  inputProps={{ min: 1, max: 20 }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Fecha de ingreso"
                  type="date"
                  variant="outlined"
                  name="fechaIngreso"
                  value={formData.fechaIngreso}
                  onChange={handleChange}
                  error={!!errors.fechaIngreso}
                  helperText={errors.fechaIngreso}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Fecha de egreso"
                  type="date"
                  variant="outlined"
                  name="fechaEgreso"
                  value={formData.fechaEgreso}
                  onChange={handleChange}
                  error={!!errors.fechaEgreso}
                  helperText={errors.fechaEgreso}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mensaje (opcional)"
                  variant="outlined"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="¿Alguna consulta adicional?"
                />
              </Grid>
              <Grid item xs={12}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="contained"
                    size="large"
                    className="contact-submit-btn"
                    onClick={sendMessageToWhatsApp}
                    startIcon={<WhatsAppIcon />}
                    endIcon={<SendIcon />}
                  >
                    Enviar por WhatsApp
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </section>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default Contact;
