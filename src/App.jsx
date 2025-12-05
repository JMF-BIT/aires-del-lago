import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import "./App.css";

// Lazy load pages for better performance
const Home = lazy(() => import("./page/home/Home"));
const Contact = lazy(() => import("./page/Contact/Contact"));
const Template = lazy(() => import("./page/Template/Template"));
const Aires2 = lazy(() => import("./page/Casas/Aires2"));
const Aires3 = lazy(() => import("./page/Casas/Aires3"));
const Aires4 = lazy(() => import("./page/Casas/Aires4"));
const Activities = lazy(() => import("./page/Activities/Activities"));
const Tarifas = lazy(() => import("./page/tarifas/Tarifas"));
const NotFound = lazy(() => import("./page/NotFound/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-spinner"></div>
    <p>Cargando...</p>
  </div>
);

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quienes-somos" element={<Template />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/aires2" element={<Aires2 />} />
          <Route path="/aires3" element={<Aires3 />} />
          <Route path="/aires4" element={<Aires4 />} />
          <Route path="/actividades" element={<Activities />} />
          {/* 404 catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
