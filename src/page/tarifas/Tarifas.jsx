import { Box, Grid } from "@mui/material";
import "./Tarifas.css";
import img2 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen1.jpg";
import img3 from "../../imgs/ImagesCasas/Aires2/Aires2ImagenTop.jpg";
import img4 from "../../imgs/ImagesCasas/Aires3/air31.jpg";
import img5 from "../../imgs/ImagesCasas/Aires3/air32.jpg";

import NavBar from "../../component/navbar/NavBar";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TarifaItem from "../../component/tarifaItem/TarifaItem";

const Tarifas = () => {
  return (
    <>
      <NavBar></NavBar>
      <Box
        sx={{
          backgroundImage: `url(${img2})`,
          fontSize: { xs: "10px", md: "20px", lg: "20px" },
        }}
        className="boxImagePrincipalTop1"
      >
        <Box className="boxPrincipalTextTop1">
          <h1 className="imagePrincipalTitleText1">Tarifas</h1>
          <p className="imagePrincipalText1">¡Gracias por visitarnos!</p>
        </Box>
      </Box>
      <Box className="tarifaContainer">
        <Grid container className="tarifaBox">
          <Grid xs={12} sx={{ justifyContent: "center", display: "flex" }}>
            <h1>Tarifas por temporada</h1>
          </Grid>
          <Grid
            xs={12}
            sx={{
              justifyContent: "center",
              display: "flex",
              px: "12px",
              textAlign: "center",
            }}
          >
            <h4>
              Temporada ALTA: entre el 1 de Diciembre y 28 de Febrero, fines de
              semana largos y vacaciones de julio. Temporada BAJA: entre el 1 de
              Marzo al 30 de Noviembre. Las tarifas pueden ser modificadas sin
              previo aviso. Los precios están expresados en dólares
              estadounidenses. El pago se realizará en Dolares o Pesos
              argentinos de acuerdo a la cotización del dólar blue venta que
              informa el sitio web de ámbito financiero al momento de cada pago
              -{" "}
              <a href="https://www.ambito.com/contenidos/dolar-informal.html">
                https://www.ambito.com/contenidos/dolar-informal.html
              </a>
            </h4>
          </Grid>
          <Grid xs={12} className="tarifasItemBox">
            <h2>Aires 2 y Aires 4</h2>
          </Grid>
          <Grid xs={12} md={6} lg={4} className="tarifasItemBox">
            <TarifaItem
              img={img2}
              precio={"$200 USD"}
              noches={"Minimo 2 noches"}
              texto={"Precio por noche para 6 personas temporada alta"}
            ></TarifaItem>
          </Grid>
          <Grid xs={12} md={6} lg={4} className="tarifasItemBox">
            <TarifaItem
              img={img3}
              precio={"$150 USD"}
              noches={"Minimo 2 noches"}
              texto={"Precio por noche para 6 personas temporada baja"}
            ></TarifaItem>
          </Grid>
          <Grid xs={12} className="tarifasItemBox">
            <h2>Aires 3</h2>
          </Grid>
          <Grid xs={12} md={6} lg={4} className="tarifasItemBox">
            <TarifaItem
              img={img4}
              precio={"$250 USD"}
              noches={"Minimo 2 noches"}
              texto={"Precio por noche para 8 personas temporada alta"}
            ></TarifaItem>
          </Grid>
          <Grid xs={12} md={6} lg={4} className="tarifasItemBox">
            <TarifaItem
              img={img5}
              precio={"$200 USD"}
              noches={"Minimo 2 noches"}
              texto={"Precio por noche para 8 personas temporada baja"}
            ></TarifaItem>
          </Grid>
          <Grid
            xs={12}
            className="gridTextBot"
            sx={{
              justifyContent: "center",
              px: "12px",
            }}
          >
            <h3>ACLARACIONES: </h3> <br />
            <ul>
              <li>
                Fines de semana largos se alquilan completos sin excepción.
              </li>
              <li> Las tarifas pueden ser modificadas sin previo aviso.</li>
              <li>
                Para confirmar la reserva, se debe abonar una seña del 50% del
                valor total de la estadía. La seña no es reembolsable. El saldo
                restante deberá abonarse AL MOMENTO DE LLEGAR AL ALOJAMIENTO EN
                EFECTIVO (PESOS O DOLARES).
              </li>{" "}
              <li>LA CASA TIENE UNA capacidad máxima de 6 personas.</li>
              <li>El check-in es a las 14:00 y el check-out a las 11:00</li>
            </ul>
          </Grid>
        </Grid>
      </Box>
      <Box className="boxConteinerFooter">
        <Grid spacing={10} item xs={12} className="gridConteinerBoxFooter">
          <footer className="footer">
            <a
              href="https://www.instagram.com/airesdellago_/"
              target="_blanck"
              rel="noopener noreferrer"
              className="icon1"
            >
              <InstagramIcon style={{ fontSize: "65px" }} />
            </a>
            <a
              href="https://wa.me/5493518171664"
              target="_blank"
              rel="noopener noreferrer"
              className="icon2"
            >
              <WhatsAppIcon style={{ fontSize: "65px" }} />
            </a>
            <p>WhatsApp: +54 9 3518171664</p>
            <p>Instagram: @airesdellago_</p>
          </footer>
        </Grid>
      </Box>
    </>
  );
};

export default Tarifas;
