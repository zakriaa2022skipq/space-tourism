import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Home() {
  return (
    <div className="relative min-h-screen  bg-mobile-home  sm:bg-tablet-home md:bg-desktop-home text-white bg-no-repeat bg-cover bg-center bg-fixed">
      <Navbar />
      <div className="md:flex md:items-center md:w-[80%] md:mt-24 md:justify-between md:mx-auto ">
        <div className="w-[90%] mx-auto mt-2 text-center sm:w-[50%] md:w-[290px] md:mx-0   md:text-justify">
          <h1 className="text-[28px] sm:text-[20px] md:text-[32px] font-barlow tracking-wide">
            So, you want to travel to
            <span className="block text-[150px] font-bellefair sm:text-[110px] md:text-[130px]">
              Space
            </span>
          </h1>
          <p className="text-[14px] font-serif font-thin tracking-wide ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="mt-10 ">
          <Link to="/destination">
            <button className="block relative mx-auto text-[#0B0D17] bg-white aspect-square p-9 rounded-full   font-bellefair text-lg after:shadow-[0_0_0.5px_30px_rgba(151,151,151,0.35)] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:w-[122px] after:h-[122px] after:rounded-full after:opacity-0 hover:after:opacity-100 focus:after:opacity-100 after:transition-[opacity] after:ease-in-out after:duration-[950ms]  after:delay-75">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
