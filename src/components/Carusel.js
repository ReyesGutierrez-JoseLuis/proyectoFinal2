import React, { useState } from "react";
import PopularAndRecentBlogPost from "./blogs/PopularAndRecentBlogPosts";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniCenteredFooter from "./footers/MiniCenteredFooter";
const items = [
  {
    src:
      "/img/img1.jpg",
    altText: "Bienvenido",
    caption: "Consultoría en TI",
  },
  {
    src:
      "/img/img2.jpg",
    altText: "Bienvenido",
    caption: "Una solución para tu negocio",
  },
  {
    src:
      "/img/img3.jpg",
    altText: "Somos La Mejor Opción",
    caption: "Contactanos",
  },
];

const Carusel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return ( 
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" heigth="550px"/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
      
    );
  });

  return (<div> 
    
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
        
    </Carousel>
    
    <div className="footer">
    <PopularAndRecentBlogPost />
     <MiniCenteredFooter />

    </div>
  </div>
  );
};

export default Carusel;
