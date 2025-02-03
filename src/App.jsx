import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import Contact from "./page/Contact/Contact";
import Template from "./page/Template/Template";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quienes-somos" element={<Template />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
