// install 3d-react-carousal
import { Carousel } from '3d-react-carousal';

import { slides } from '../../assets/config/carouselSlides';

import '../../assets/scss/partials/_carousel.scss';

const CarouselComponent = () => {
   return (
      <Carousel
         slides={slides}
         autoplay={true}
         interval={1750}
         arrows={false}
      />
   );
};

export default CarouselComponent;
