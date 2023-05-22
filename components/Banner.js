import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from 'react';
function Banner() {
  return (
    <Carousel autoPlay={true} interval={5000} infiniteLoop={true} width={400}>
    <div>
        <img src="./img/logo.jpg" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="./img/logo.jpg" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="./img/logo.jpg" />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
  );
}

export default Banner;
