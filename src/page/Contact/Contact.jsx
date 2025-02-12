import { useState } from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import NavBar from "../../component/navbar/NavBar";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import "./Contact.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import imgA from "../../imgs/contact1.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import imgB from "../../imgs/contact2.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    fechaIngreso: "",
    fechaEgreso: "",
    cantidadPersonas: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessageToWhatsApp = () => {
    const {
      nombre,
      telefono,
      email,
      fechaIngreso,
      fechaEgreso,
      cantidadPersonas,
      mensaje,
    } = formData;

    const phoneNumber = "5493518171664"; // Número de WhatsApp de destino (sin + ni 0 inicial)
    const message = `Hola, me gustaría solicitar información:
    - Nombre: ${nombre}
    - Teléfono: ${telefono}
    - Email: ${email}
    - Fecha de ingreso: ${fechaIngreso}
    - Fecha de egreso: ${fechaEgreso}
    - Cantidad de personas: ${cantidadPersonas}
    - Mensaje: ${mensaje}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <NavBar />
      <Box className="contactContainer">
        <Box
          className="contactImgContainer"
          sx={{
            backgroundImage: `url(${imgA})`,
          }}
        >
          <h1>Contacto</h1>
        </Box>
        <Box className="contactTextContainerBox">
          <Grid container className="contactTextContainer">
            <Grid
              xs={12}
              sm={4}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/31%C2%B050'09.0%22S+64%C2%B033'48.0%22W/@-31.8358307,-64.5659065,17z/data=!4m4!3m3!8m2!3d-31.8358307!4d-64.5633316?hl=es&entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                )
              }
              sx={{ cursor: "pointer" }}
            >
              <Box className="contactTextContainerItem">
                <Box className="contactTextContainerItem-logo">
                  <FmdGoodIcon sx={{ fontSize: "60px", color: "grey" }} />
                </Box>
                <Box className="contactTextContainerItem-title">Ubicación</Box>
                <Box className="contactTextContainerItem-text"></Box>
              </Box>
            </Grid>
            <Grid
              xs={12}
              sm={4}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/airesdellago_/",
                  "_blank"
                )
              }
              sx={{ cursor: "pointer" }}
            >
              <Box className="contactTextContainerItem">
                <Box className="contactTextContainerItem-logo">
                  <InstagramIcon sx={{ fontSize: "60px", color: "grey" }} />
                </Box>
                <Box className="contactTextContainerItem-title">Instagram</Box>
                <Box className="contactTextContainerItem-text"></Box>
              </Box>
            </Grid>
            <Grid
              xs={12}
              sm={4}
              onClick={() =>
                window.open("https://wa.me/5493518171664", "_blank")
              }
              sx={{ cursor: "pointer" }}
            >
              <Box className="contactTextContainerItem">
                <Box className="contactTextContainerItem-logo">
                  <WhatsAppIcon sx={{ fontSize: "60px", color: "grey" }} />
                </Box>
                <Box className="contactTextContainerItem-title">WhatsApp</Box>
                <Box className="contactTextContainerItem-text"></Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          className="formContainerBack"
          sx={{
            backgroundImage: `url(${imgB})`,
          }}
        >
          <Box className="formContainer">
            <Grid container spacing={2}>
              <Grid item xs={12} className="contactTitle">
                Contactanos para reservar
              </Grid>
              <Grid item xs={12} className="contactText">
                Completá el siguiente formulario para consultar Tarifas y
                Disponibilidades; responderemos a la brevedad.¡Muchas gracias!
              </Grid>
              <Grid item xs={6} lg={3}>
                <TextField
                  label="Nombre completo"
                  variant="filled"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} lg={3}>
                <TextField
                  label="Teléfono"
                  variant="filled"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} lg={3}>
                <TextField
                  label="Email"
                  variant="filled"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} lg={3}>
                <TextField
                  label="Cantidad de personas"
                  type="number"
                  variant="filled"
                  name="cantidadPersonas"
                  value={formData.cantidadPersonas}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} lg={6}>
                <TextField
                  label="Fecha de ingreso"
                  type="date"
                  variant="filled"
                  name="fechaIngreso"
                  value={formData.fechaIngreso}
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6} lg={6}>
                <TextField
                  label="Fecha de egreso"
                  type="date"
                  variant="filled"
                  name="fechaEgreso"
                  value={formData.fechaEgreso}
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Mensaje"
                  variant="filled"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "gray",
                    color: "white",
                    "&:hover": { backgroundColor: "#757575" },
                  }}
                  onClick={sendMessageToWhatsApp}
                >
                  Enviar WhatsApp
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
