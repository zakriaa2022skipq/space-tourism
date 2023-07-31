import React, { useState } from "react";
import { destinations } from "../helpers/data";
import imgMoon from "../assets/destination/image-moon.png";
import imgMars from "../assets/destination/image-mars.png";
import imgEuropa from "../assets/destination/image-europa.png";
import imgTitan from "../assets/destination/image-titan.png";
import Navbar from "./Navbar";

function Destination() {
  const moonDest = 0;
  const marsDest = 1;
  const europaDest = 2;
  const titanDest = 3;
  const [activeDest, setActiveDest] = useState(0);
  const [destImg, setDestImg] = useState(imgMoon);

  const handleClick = (e) => {
    if (!e.target.dataset.dest) return;
    const eventVal = parseInt(e.target.value);
    setActiveDest(eventVal || 0);
    switch (eventVal) {
      case moonDest:
        setDestImg(imgMoon);
        break;
      case marsDest:
        setDestImg(imgMars);
        break;
      case europaDest:
        setDestImg(imgEuropa);
        break;
      case titanDest:
        setDestImg(imgTitan);
        break;
      default:
        setDestImg(imgMoon);
    }
  };
  return (
    <div className="relative min-h-screen  bg-mobile-destination  sm:bg-tablet-destination md:bg-desktop-destination text-white bg-no-repeat bg-cover bg-center bg-fixed">
      <Navbar />
      <div className="w-[90%] mx-auto text-center md:w-[80%] md:text-left">
        <h1 className="font-bellefair text-[22px] md:text-left">
          01 Pick your destination
        </h1>
        <div className="md:flex md:items-center md:justify-between md:mt-9">
          <div className="md:basis-[45%]">
            <img
              src={destImg}
              alt="destination"
              className="w-[170px] h-[170px] md:w-[400px] md:h-[400px] my-6 block mx-auto"
            />
          </div>

          <div className="md:basis-[45%]">
            <div className="border-b-[1px] border-[rgba(255,255,255,1)] pb-8">
              <ul
                className="flex gap-5 justify-center font-barlow text-[16px] tracking-[2.7ch] md:justify-start"
                onClick={handleClick}
              >
                <li
                  className={`capitalize border-white ${
                    activeDest === moonDest ? "border-b-2" : ""
                  }`}
                >
                  <button
                    data-dest={"moon"}
                    className="w-[100%] h-[100%]"
                    value={moonDest}
                  >
                    Moon
                  </button>
                </li>
                <li
                  className={`capitalize border-white ${
                    activeDest === marsDest ? "border-b-2" : ""
                  }`}
                >
                  <button
                    data-dest={"mars"}
                    className="w-[100%] h-[100%]"
                    value={marsDest}
                  >
                    Mars
                  </button>
                </li>
                <li
                  className={`capitalize border-white ${
                    activeDest === titanDest ? "border-b-2" : ""
                  }`}
                >
                  <button
                    data-dest={"titan"}
                    className="w-[100%] h-[100%]"
                    value={titanDest}
                  >
                    Titan
                  </button>
                </li>
                <li
                  className={`capitalize border-white ${
                    activeDest === europaDest ? "border-b-2" : ""
                  }`}
                >
                  <button
                    data-dest={"europa"}
                    className="w-[100%] h-[100%]"
                    value={europaDest}
                  >
                    Europa
                  </button>
                </li>
              </ul>
              <h2 className="text-[100px] font-bellefair">
                {destinations[activeDest].title}
              </h2>
              <p className="text-[14px] font-serif font-thin tracking-wide">
                {destinations[activeDest].desc}
              </p>
            </div>
            <div className="mt-5 sm:flex sm:gap-20 ">
              <div className="sm:ml-auto md:ml-0">
                <p className="text-[14px] font-barlow tracking-[0.5ch]">
                  Avg. distance
                </p>
                <p className="text-[28px] font-bellefair mb-3">
                  {destinations[activeDest].distance}
                </p>
              </div>
              <div className="sm:mr-auto">
                <p className="text-[14px] font-barlow tracking-[0.5ch]">
                  Est. travel time
                </p>
                <p className="text-[28px] font-bellefair">
                  {destinations[activeDest].time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
