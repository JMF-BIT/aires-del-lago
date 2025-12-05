import { Box } from "@mui/material";
import NavBar from "../navbar/NavBar";
import Footer from "../Footer/Footer";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <Box className="layout-container">
      <NavBar />
      <Box component="main" className="layout-main">
        {children}
      </Box>
      <Footer />
      <WhatsAppButton />
    </Box>
  );
};

export default Layout;

