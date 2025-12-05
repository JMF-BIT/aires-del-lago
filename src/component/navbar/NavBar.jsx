import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./NavBar.css";
import logoImg from "../../imgs/home/Logo.jpg";

const navLinks = [
  { path: "/home", label: "Inicio" },
  { path: "/quienes-somos", label: "Nosotros" },
  {
    label: "Casas",
    submenu: [
      { path: "/tarifas", label: "Tarifas" },
      { path: "/aires2", label: "Aires 2" },
      { path: "/aires3", label: "Aires 3" },
      { path: "/aires4", label: "Aires 4" },
    ],
  },
  { path: "/actividades", label: "Actividades" },
  { path: "/contact", label: "Contacto" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHouseMenuOpen, setIsHouseMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const houseMenuRef = useRef(null);
  const houseMenuTimeoutRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsHouseMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavigate = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsHouseMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const handleHouseMenuEnter = () => {
    if (houseMenuTimeoutRef.current) {
      clearTimeout(houseMenuTimeoutRef.current);
    }
    setIsHouseMenuOpen(true);
  };

  const handleHouseMenuLeave = () => {
    houseMenuTimeoutRef.current = setTimeout(() => {
      setIsHouseMenuOpen(false);
    }, 150);
  };

  return (
    <Box
      component="nav"
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="navbar__container">
        {/* Logo */}
        <motion.div
          className="navbar__logo"
          onClick={() => handleNavigate("/home")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img src={logoImg} alt="Aires del Lago - Logo" />
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="navbar__menu">
          {navLinks.map((link, index) =>
            link.submenu ? (
              <li
                key={index}
                className="navbar__item navbar__item--dropdown"
                onMouseEnter={handleHouseMenuEnter}
                onMouseLeave={handleHouseMenuLeave}
                ref={houseMenuRef}
              >
                <button
                  className={`navbar__link navbar__link--dropdown ${
                    link.submenu.some((sub) => isActive(sub.path))
                      ? "navbar__link--active"
                      : ""
                  }`}
                  aria-expanded={isHouseMenuOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <KeyboardArrowDownIcon
                    className={`navbar__dropdown-icon ${
                      isHouseMenuOpen ? "navbar__dropdown-icon--open" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isHouseMenuOpen && (
                    <motion.ul
                      className="navbar__submenu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.submenu.map((sublink) => (
                        <li key={sublink.path}>
                          <button
                            className={`navbar__submenu-link ${
                              isActive(sublink.path)
                                ? "navbar__submenu-link--active"
                                : ""
                            }`}
                            onClick={() => handleNavigate(sublink.path)}
                          >
                            {sublink.label}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.path} className="navbar__item">
                <button
                  className={`navbar__link ${
                    isActive(link.path) ? "navbar__link--active" : ""
                  }`}
                  onClick={() => handleNavigate(link.path)}
                >
                  {link.label}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="navbar__toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="navbar__mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="navbar__mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="navbar__mobile-list">
                {navLinks.map((link, index) =>
                  link.submenu ? (
                    <li key={index} className="navbar__mobile-item">
                      <span className="navbar__mobile-label">{link.label}</span>
                      <ul className="navbar__mobile-submenu">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.path}>
                            <button
                              className={`navbar__mobile-link ${
                                isActive(sublink.path)
                                  ? "navbar__mobile-link--active"
                                  : ""
                              }`}
                              onClick={() => handleNavigate(sublink.path)}
                            >
                              {sublink.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={link.path} className="navbar__mobile-item">
                      <button
                        className={`navbar__mobile-link ${
                          isActive(link.path)
                            ? "navbar__mobile-link--active"
                            : ""
                        }`}
                        onClick={() => handleNavigate(link.path)}
                      >
                        {link.label}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default NavBar;
