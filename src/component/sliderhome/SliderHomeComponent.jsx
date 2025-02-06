import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Importación de imágenes
import img1 from "../../imgs/home/1.jpg";
import img2 from "../../imgs/home/2.jpg";
import img3 from "../../imgs/home/4.jpg";
import img4 from "../../imgs/home/6.jpg";
import img5 from "../../imgs/home/7.jpg";

const images = [img1, img2, img3, img4, img5];

const SliderComponent = () => {
  console.log(images);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "600px",
        overflow: isAnimating ? "hidden" : "visible",
        position: "relative",
        margin: 0,
        padding: 0,
      }}
    >
      <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
        {images.map(
          (image, index) =>
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )
        )}
      </AnimatePresence>
    </Box>
  );
};

export default SliderComponent;
