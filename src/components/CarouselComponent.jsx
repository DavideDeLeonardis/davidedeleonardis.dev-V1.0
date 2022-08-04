import { Carousel } from "3d-react-carousal";

import { slides } from "../assets/config/carouselSlides";
import "../assets/scss/partials/_carousel.scss";

const CarouselComponent = () => {
   return <Carousel slides={slides} autoplay={true} interval={2000} />;
};

export default CarouselComponent;
