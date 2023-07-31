import React, { useState } from "react";
import lauchVehicleLandscapeImg from "../assets/technology/image-launch-vehicle-landscape.png";
import spacePortLandscapeImg from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleLandscapeImg from "../assets/technology/image-space-capsule-landscape.jpg";
import lauchVehiclePortraitImg from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortPortraitImg from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsulePortraitImg from "../assets/technology/image-space-capsule-portrait.jpg";
import { technologyData } from "../helpers/data";
import Navbar from "./Navbar";

function Technology() {
  const [currTech, setCurrTech] = useState(0);
  const techImgLandscape = [
    lauchVehicleLandscapeImg,
    spacePortLandscapeImg,
    spaceCapsuleLandscapeImg,
  ];
  const techImgPortrait = [
    lauchVehiclePortraitImg,
    spacePortPortraitImg,
    spaceCapsulePortraitImg,
  ];
  const vehicleTech = 0;
  const portTech = 1;
  const capsuleTech = 2;
  const handleClick = (e) => {
    if (!e.target.dataset.tech) return;
    const eventVal = parseInt(e.target.value);
    setCurrTech(eventVal || 0);
  };
  return (
    <div className="relative min-h-screen  bg-mobile-tech  sm:bg-tablet-tech md:bg-desktop-tech text-white bg-no-repeat bg-cover bg-center bg-fixed">
      <Navbar />
      <div className="text-center md:text-left md:ml-32">
        <div className="w-[95%] mx-auto">
          <h1 className="font-barlow text-[22px] sm:text-left">
            <span className="text-white/30 ">03</span> Space launch 101
          </h1>
        </div>
        <div className="md:flex md:justify-center ">
          <div className="md:order-3">
            <img
              src={`${techImgLandscape[currTech]}`}
              alt="technology"
              className="md:hidden my-6 w-screen object-cover "
            />
            <img
              src={`${techImgPortrait[currTech]}`}
              alt="technology"
              className="hidden md:block my-6 w-[470px] h-[470px] object-cover "
            />
          </div>
          <div className="md:order-1">
            <ul
              className="flex md:flex-col md:my-0 md:mt-24 md:mr-12 gap-4 justify-center my-6"
              onClick={handleClick}
            >
              <li>
                <button
                  data-tech={"vehicle"}
                  value={vehicleTech}
                  className={` w-[40px] h-[40px] rounded-full border border-white border-opacity-50 ${
                    currTech === vehicleTech ? "bg-white text-black" : ""
                  } md:w-[80px] md:h-[80px]`}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  data-tech={"port"}
                  value={portTech}
                  className={` w-[40px] h-[40px] rounded-full border  border-white border-opacity-50 ${
                    currTech === portTech ? "bg-white text-black" : ""
                  } md:w-[80px] md:h-[80px]`}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  data-tech={"capsule"}
                  value={capsuleTech}
                  className={` w-[40px] h-[40px] rounded-full border border-white border-opacity-50 ${
                    currTech === capsuleTech ? "bg-white text-black" : ""
                  } md:w-[80px] md:h-[80px]`}
                >
                  3
                </button>
              </li>
            </ul>
          </div>
          <div className="w-[90%] pb-8 mx-auto sm:w-[75%] sm:pb-12 md:order-2 md:mt-24 md:pr-2 md:mr-12 ">
            <p className="uppercase mb-2 text-[22px] font-barlow tracking-wide">
              The terminology...
            </p>
            <p className="uppercase mb-5 text-[28px] font-bellefair">
              {technologyData[currTech].title}
            </p>
            <p className="text-[14px] font-serif font-thin tracking-wide">
              {technologyData[currTech].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
