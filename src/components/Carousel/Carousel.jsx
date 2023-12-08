/* eslint-disable jsx-a11y/img-redundant-alt */
import { Card, Carousel } from "@material-tailwind/react";

const imageData = [
  { link: "https://i.ibb.co/8PSfGYJ/1.png" },
  { link: "https://i.ibb.co/dpmhRXq/2.png" },
  { link: "https://i.ibb.co/xhSzJ4h/3.png" },
  { link: "https://i.ibb.co/HGfSq23/4.png" },
];
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
            src={item.link}
            alt={index}
            className="h-full w-full object-contain"
          />
        ))}
      </Carousel>
    </Card>
  );
}
