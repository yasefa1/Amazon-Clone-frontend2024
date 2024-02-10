
import React from "react"
import { Carousel } from "react-responsive-carousel";
import { img } from "./Images/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";

function CarouselEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img  src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero__img}> 
      </div>
    </>
  );
}

export default CarouselEffect;