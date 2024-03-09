import React, { useState, useEffect } from "react";
import { ReactComponent as Prev } from "../../assets/prev.svg";
import { ReactComponent as Next } from "../../assets/next.svg";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    "//getvitalplus.com/cdn/shop/files/solosauna1_1.jpg?v=1705011880",
    "//getvitalplus.com/cdn/shop/files/Untitleddesign_30.jpg?v=1705011880",
    "//getvitalplus.com/cdn/shop/files/File.jpg?v=1705548594",
    "//getvitalplus.com/cdn/shop/files/Untitleddesign_28.jpg?v=1705548594",
    "//getvitalplus.com/cdn/shop/files/Untitleddesign_29.jpg?v=1705548594",
    "//getvitalplus.com/cdn/shop/files/Untitleddesign_32.jpg?v=1705548594",
    "//getvitalplus.com/cdn/shop/files/ScreenShot2024-01-12at2.31.00pm.png?v=1705548594",
    "//getvitalplus.com/cdn/shop/files/Untitleddesign_31.jpg?v=1705548594",
    "//getvitalplus.com/cdn/shop/files/ScreenShot2023-11-22at9.50.01am.png?v=1705548594",
    "//getvitalplus.com/cdn/shop/files/ScreenShot2024-01-12at2.31.24pm.png?v=1705548594",
    "//getvitalplus.com/cdn/shop/files/BPAFree_1.jpg?v=1705548594",
  ];

  useEffect(() => {
    setSelectedImageIndex(currentSlide);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="w-full flex-col flex gap-4 items-center h-full">
        <div className="relative mx-auto flex flex-col-reverse w-[320px] md:w-auto">
          <div className="thumbnail-viewport relative mx-auto flex h-16 md:h-24 w-full overflow-hidden 2xl:w-[648px] xl:w-[580px] lg:w-[480px] md:w-[400px]">
            <div
              className="mx-auto flex h-full w-full gap-2"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square h-full cursor-pointer rounded-xl ${
                    selectedImageIndex === index ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => {
                    setCurrentSlide(index);
                    setSelectedImageIndex(index);
                  }}
                >
                  <img
                    src={image}
                    alt={`Product ${index}`}
                    className="aspect-square object-cover transition-all rounded-xl "
                    width="2040"
                    height="2040"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="main-viewport w-full max-w-full h-[342px] md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px] xl:h-[580px] xl:w-[580px] 2xl:h-[648px] 2xl:w-[648px] flex-1 overflow-hidden relative">
            <button
              onClick={prevSlide}
              className={`absolute top-1/2 left-[16px] z-[5] flex -translate-y-1/2 items-center justify-center rounded-full bg-black/80 ${
                currentSlide === 0 ? "opacity-50" : "opacity-100"
              } md:w-[28px] md:h-[28px]`}
              disabled={currentSlide === 0}
            >
              <Prev />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute top-1/2 right-[16px] z-[5] flex -translate-y-1/2 items-center justify-center rounded-full bg-black/80 ${
                currentSlide === images.length - 1
                  ? "opacity-50"
                  : "opacity-100"
              } md:w-[28px] md:h-[28px]`}
              disabled={currentSlide === images.length - 1}
            >
              <Next />
            </button>
            <div className="flex w-full">
              <div className="h-auto w-full flex-shrink-0 cursor-pointer rounded-2xl">
                <div className="mx-auto my-4 w-[98%] rounded-2xl">
                  <img
                    src={images[currentSlide]}
                    alt="carousel"
                    className="aspect-square object-cover rounded-2xl transition-all w-full"
                    width="2040"
                    height="2040"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
