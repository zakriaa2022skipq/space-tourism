import React, { useState } from "react";
import { ReactComponent as BurgerIcon } from "../assets/shared/icon-hamburger.svg";
import logo from "../assets/shared/logo.svg";
import { ReactComponent as CloseIcon } from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  let location = useLocation();
  const homeTab = 0;
  const destinationTab = 1;
  const crewTab = 2;
  const technologyTab = 3;
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveTab(homeTab);
        break;
      case "/destination":
        setActiveTab(destinationTab);
        break;
      case "/crew":
        setActiveTab(crewTab);
        break;
      case "/technology":
        setActiveTab(technologyTab);
        break;

      default:
        setActiveTab(0);
    }
  }, [location]);
  return (
    <>
      <nav className="flex justify-between items-center z-[5] py-5  text-white">
        <div className="pl-5">
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
        </div>
        <div
          onClick={() => {
            setIsSideBarOpen(!isSideBarOpen);
          }}
          className="sm:hidden pr-5 z-10 cursor-pointer "
        >
          {isSideBarOpen ? (
            <CloseIcon fill="red" />
          ) : (
            <BurgerIcon fill="#442244" />
          )}
        </div>
        <div
          className={`${
            isSideBarOpen ? "visible opacity-100" : "opacity-0 invisible "
          } sm:block absolute right-0 top-0 bottom-0 min-w-[255px]  bg-[#979797] bg-opacity-[0.4]   pt-40 sm:pt-0   backdrop-blur-[10px]   sm:static sm:w-auto sm:h-auto md:px-20   sm:px-12  transition-all duration-1000 delay-150 sm:visible sm:opacity-100 `}
        >
          <ul className="sm:flex sm:items-center sm:gap-5 pl-9 sm:pl-0 ">
            <li
              className={`mb-5 sm:mb-0  sm:py-5 ${
                activeTab === homeTab ? "sm:border-b-2 sm:border-b-white" : ""
              }`}
            >
              <Link className="capitalize" to="/">
                <span className="sm:hidden lg:inline">00</span> Home
              </Link>
            </li>
            <li
              className={`mb-5 sm:mb-0 sm:py-5  ${
                activeTab === destinationTab
                  ? "sm:border-b-2 sm:border-b-white"
                  : ""
              }`}
            >
              <Link className="capitalize" to="/destination">
                <span className="sm:hidden lg:inline">01</span> Destination
              </Link>
            </li>
            <li
              className={`mb-5 sm:mb-0 sm:py-5  ${
                activeTab === crewTab ? "sm:border-b-2 sm:border-b-white" : ""
              }`}
            >
              <Link className="capitalize" to="/crew">
                <span className="sm:hidden lg:inline">02</span> Crew
              </Link>
            </li>
            <li
              className={`mb-5 sm:mb-0 sm:py-5  ${
                activeTab === technologyTab
                  ? "sm:border-b-2 sm:border-b-white"
                  : ""
              }`}
            >
              <Link className="capitalize" to="/technology">
                <span className="sm:hidden lg:inline">03</span> Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
