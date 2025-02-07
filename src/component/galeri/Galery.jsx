import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Galery = ({ imgs }) => {
  return <ImageGallery items={imgs} />;
};

export default Galery;
