import { useState } from "react";
import { Box } from "@mui/material";

const HousePhotoSlider = ({ images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleMouseEnter = () => {
    if (images.length > 1) {
      setCurrentIndex(1); // Cambia a la segunda imagen al hacer hover
    }
  };

  const handleMouseLeave = () => {
    setCurrentIndex(initialIndex); // Vuelve a la imagen inicial al quitar el hover
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "all opacity 1s ease-in-out",
      }}
    />
  );
};

export default HousePhotoSlider;
