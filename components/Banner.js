import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from 'react';
function Banner() {
  return (
   

    <Carousel autoPlay={true} className=' w-[100%] flex-col flex justify-center items-center' interval={5000} infiniteLoop={true} width={370}>
   

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
    <div>
        <img src="./img/logo.jpg" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="./img/logo.jpg" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="./img/logo.jpg" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="./img/logo.jpg" />
        <p className="legend">Legend 3</p>
    </div>


</Carousel>

  );
}

export default Banner;
