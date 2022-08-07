import { Fragment } from "react";

import Carousel from "../components/Layout/Carousel";
import qrcode from "../assets/images/qrcode.png";

const Home = () => {
   return (
      <Fragment>
         <img width="200" src={qrcode} alt="qrcode of CV" />
         <Carousel />
      </Fragment>
   );
};

export default Home;
