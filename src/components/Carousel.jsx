import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import image1 from "../assets/tanker1.jpg";
import image2 from "../assets/tanker2.png";
import image3 from "../assets/tanker3.webp";
import image4 from "../assets/tanker4.jpg";
import image5 from "../assets/tanker5.jpg";
import image6 from "../assets/tanker6.jpg";
import image7 from "../assets/tanker7.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];  

export function Demo() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const slides = images.map((url) => (
    <Carousel.Slide key={url} className="h-[400px]">
      <Image src={url} className="h-full" />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      loop
      withIndicators
      plugins={[autoplay.current]}
        // onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.play}
    >
      {slides}
    </Carousel>
  );
}
