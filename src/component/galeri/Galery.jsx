import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Galery = ({ imgs }) => {
  return (
    <ImageGallery
      items={imgs}
      showFullscreenButton={false} // Deshabilita el botón de pantalla completa
      showPlayButton={false} // Deshabilita el botón de reproducción automática
      disableSwipe={false} // Mantiene la navegación táctil activada
      showBullets={true}
    />
  );
};

export default Galery;
