import { Fragment } from "react";

import Presentation from "../components/Layout/Presentation";
import Carousel from "../components/Layout/Carousel";
import qrcode from "../assets/images/qrcode.png";

const HomePage = () => {
   return (
      <Fragment>
			<Presentation />
         <Carousel />
         <div>
            <img width="200" src={qrcode} alt="qrcode of curriculum vitae" />
         </div>
      </Fragment>
   );
};

export default HomePage;
