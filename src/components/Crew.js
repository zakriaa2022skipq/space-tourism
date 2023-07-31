import React, { useState } from "react";
import { crewData } from "../helpers/data";
import Navbar from "./Navbar";
import commanderPic from "../assets/crew/image-douglas-hurley.png";
import specialistPic from "../assets/crew/image-mark-shuttleworth.png";
import pilotPic from "../assets/crew/image-victor-glover.png";

function Crew() {
  const crewCommander = 0;
  const crewSpecialist = 1;
  const crewPilot = 2;
  const [activeCrew, setActiveCrew] = useState(0);
  const [crewPic, SetcrewPic] = useState(commanderPic);

  const handleClick = (e) => {
    if (!e.target.dataset.crew) return;
    const targetVal = parseInt(e.target.value);
    setActiveCrew(targetVal || 0);
    switch (targetVal) {
      case 0:
        SetcrewPic(commanderPic);
        break;
      case 1:
        SetcrewPic(specialistPic);
        break;
      case 2:
        SetcrewPic(pilotPic);
        break;
      default:
        SetcrewPic(commanderPic);
    }
  };
  return (
    <div className="relative min-h-screen  bg-mobile-crew  sm:bg-tablet-crew md:bg-desktop-crew text-white bg-no-repeat bg-cover bg-center bg-fixed">
      <Navbar />

      <div className="w-[90%] mx-auto mt-2 text-center flex flex-col align-middle">
        <div className="mb-6">
          <h1 className="font-barlow text-[22px] sm:text-left">
            02 Meet your crew
          </h1>
        </div>
        <div className="sm:flex sm:flex-col md:flex-row md:justify-between sm:w-[70%] sm:mx-auto md:mx-0 md:w-auto ">
          <div className=" border-b border-white border-opacity-50  w-[100%] md:w-[45%] md:flex-grow sm:order-1 sm:border-none">
            <img
              src={crewPic}
              alt="crew"
              className="w-[150px] h-[225px] block mx-auto sm:h-[350px] sm:w-[300px] md:h-[550px] md:w-[550px] md:object-contain"
            />
          </div>
          <div className="md:basis-[45%]  md:flex-grow-[2] md:text-left sm:flex sm:flex-col sm:justify-center">
            <div className="sm:order-1 md:mt-12 sm:mb-6 md:mb-0">
              <ul
                className="flex gap-6 justify-center py-3 md:justify-start"
                onClick={handleClick}
              >
                <li>
                  <button
                    className={`w-[15px] h-[15px] block  rounded-full bg-white bg-opacity-10 ${
                      activeCrew === crewCommander ? "bg-opacity-100" : ""
                    }`}
                    data-crew={"commander"}
                    value={crewCommander}
                  ></button>
                </li>
                <li>
                  <button
                    className={`w-[15px] h-[15px] block rounded-full bg-white bg-opacity-10 ${
                      activeCrew === crewSpecialist ? "bg-opacity-100" : ""
                    }`}
                    data-crew={"specialist"}
                    value={crewSpecialist}
                  ></button>
                </li>
                <li>
                  <button
                    className={`w-[15px] h-[15px] block rounded-full bg-white bg-opacity-10 ${
                      activeCrew === crewPilot ? "bg-opacity-100" : ""
                    }`}
                    data-crew={"pilot"}
                    value={crewPilot}
                  ></button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="uppercase mb-2 text-[22px] font-barlow tracking-wide md:text-[32px]">
                {crewData[activeCrew].title}
              </h2>
              <p className="uppercase mb-5 text-[28px] font-bellefair md:text-[40px]">
                {crewData[activeCrew].name}
              </p>
              <p className="text-[14px] font-serif font-thin tracking-wide md:text-[18px]">
                {crewData[activeCrew].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
