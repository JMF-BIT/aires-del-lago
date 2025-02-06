import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import Contact from "./page/Contact/Contact";
import Template from "./page/Template/Template";
import Aires2 from "./page/Casas/Aires2";
import Aires3 from "./page/Casas/Aires3";
import Aires4 from "./page/Casas/Aires4";
import Activities from "./page/Activities/Activities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quienes-somos" element={<Template />} />
        <Route path="/aires2" element={<Aires2 />} />
        <Route path="/aires3" element={<Aires3 />} />
        <Route path="/aires4" element={<Aires4 />} />
        <Route path="/actividades" element={<Activities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
