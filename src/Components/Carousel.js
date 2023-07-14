import React from 'react' ;
import { useState, useEffect } from 'react';
import "../Styles/Carousel.css" ;
import { images } from "../Data/carouselData";

function Carousel() {

  const [currentImg, setImg] = useState(0);

  //change the img in every 5sec
  useEffect( () => {
    const interval = setInterval( () => {
      setImg ( (prevImg) =>
        prevImg === images.length-1 ? 0 : prevImg+1 
    )
    }, 5000);
    //cleanup function  
    return () => clearInterval(interval);
  },[]);

  return (
    <div className='carousel'>
      {images.map((image, index) => (
        <img src={images[currentImg].img} alt={images[currentImg].alt} />
      ))}
    </div>     
  )
}

export default Carousel
