import Main from "./components/Main/Main";
import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../src/assets/logo.svg";
import { ReactComponent as DownArrow } from "../src/assets/down.svg";
import { ReactComponent as Menu } from "../src/assets/menu.svg";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(intervalId);
    //eslint-disable-next-line
  }, []);

  const slides = [
    "Our biggest sale ever is live NOW",
    "40% OFF all sauna products | offer ends soon",
  ];

  return (
    <div>
      <div className="sticky top-0 z-10">
        <div className="w-full flex justify-center items-center min-h-8 text-white bg-[#131112] z-50 relative text-sm md:text-base">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "" : "hidden"}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="text-black bg-contrast w-full leading-none px-6 py-8 flex justify-between items-center gap-4 md:gap-8 md:px-12 lg:py-[0px]">
        <div className="flex items-center gap-12 w-full lg:w-auto">
          <a
            href="/"
            className="self-stretch flex-grow md:leading-[4rem] inline w-auto h-auto leading-none"
            style={{ width: "6.25rem" }}
          >
            <Logo />
          </a>
        </div>

        <div className="hidden lg:flex gap-8 text-sm uppercase font-bold py-10">
          <div className="group flex items-center gap-1 font-bold" href="#">
            <span>Sauna</span>
            <DownArrow />
          </div>
          <div className="group flex items-center gap-1 font-bold" href="#">
            <span>Ice Bath</span>
            <DownArrow />
          </div>
          <div className="group flex items-center gap-1 font-bold" href="#">
            <span>Bundle & Save</span>
            <DownArrow />
          </div>
          <div className="group flex items-center gap-1 font-bold" href="#">
            <span>Resources</span>
            <DownArrow />
          </div>
        </div>

        <div className="flex items-center justify-end w-full gap-6 lg:gap-1 lg:w-auto">
          <div className="relative flex cursor-pointer items-center justify-center ">
            <a href="/cart">
              <h1 className="text-xs md:text-sm font-bold uppercase duration-300">
                Cart (0)
              </h1>
            </a>
          </div>
          <div className="flex items-center justify-start gap-4 lg:hidden">
            <Menu />
          </div>
        </div>
      </div>
      <Main />
    </div>
  );
}

export default App;
