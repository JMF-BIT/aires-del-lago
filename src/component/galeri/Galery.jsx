import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Galery = ({ imgs }) => {
  return (
    <ImageGallery
      items={imgs}
      showFullscreenButton={false}
      showPlayButton={false}
      disableSwipe={false}
      showBullets={true}
    />
  );
};

export default Galery;
