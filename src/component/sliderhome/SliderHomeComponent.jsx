import { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../imgs/home/1.jpg";
import img2 from "../../imgs/home/2.jpg";
import img3 from "../../imgs/home/4.jpg";
import img4 from "../../imgs/home/6.jpg";
import img5 from "../../imgs/home/7.jpg";

const images = [img1, img2, img3, img4, img5];

const SliderHomeComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "absolute",
        inset: 0,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Slide Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, sm: 30 },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: { xs: "6px", sm: "10px" },
          zIndex: 3,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: index === currentIndex ? { xs: 20, sm: 24 } : { xs: 8, sm: 10 },
              height: { xs: 8, sm: 10 },
              borderRadius: "5px",
              backgroundColor:
                index === currentIndex
                  ? "rgba(255, 255, 255, 0.95)"
                  : "rgba(255, 255, 255, 0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              },
              "&:active": {
                transform: "scale(0.9)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SliderHomeComponent;
