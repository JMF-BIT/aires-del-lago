import { Box, Button, Grid, TextField } from "@mui/material";
import NavBar from "../../component/navbar/NavBar";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Box className="contactContainer">
        <Box className="formContainer">
          <Grid container>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              Nombre completo
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              <TextField id="filled-basic" variant="filled" />
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              Telefono
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              <TextField id="filled-basic" variant="filled" />
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              Email
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              <TextField id="filled-basic" variant="filled" />
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              Fecha de infreso
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              <TextField id="filled-basic" variant="filled" />
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              Fecha de egreso
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              <TextField id="filled-basic" variant="filled" />
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              Cantidad de personas
            </Grid>
            <Grid xs={6} lg={3} sx={{ padding: 2 }}>
              <TextField id="filled-basic" variant="filled" />
            </Grid>
            <Grid xs={6} sx={{ padding: 2 }}>
              Mensaje
            </Grid>
            <Grid xs={6} sx={{ padding: 2 }}>
              <textarea className="textArea"></textarea>
            </Grid>
            <Grid xs={12} sx={{ padding: 2 }}>
              <Button variant="contained">Enviar Whatsapp</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
