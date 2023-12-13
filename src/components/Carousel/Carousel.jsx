/* eslint-disable jsx-a11y/img-redundant-alt */
import { Card, Carousel } from "@material-tailwind/react";
import { imageData } from "./ImageData/LoginPageImageData";

export function CarouselTransition() {
  return (
    <Card className=" max-w-[40rem] h-3/5">
      <Carousel
        autoplay={true}
        loop={true}
        transition={{ duration: 2 }}
        className="rounded-xl"
      >
        {imageData.map((item, index) => (
          <img
            key={index}
            src={item.link}
            alt={index}
            className="h-full w-full object-contain"
          />
        ))}
      </Carousel>
    </Card>
  );
}
