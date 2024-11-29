import PropTypes from "prop-types";
import { useState } from "react";
import {
  GiAk47,
  GiGlock,
  GiGloves,
  GiMac10,
  GiMusket,
  GiStunGrenade,
  GiSwitchblade,
} from "react-icons/gi";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ navs }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [sideBar, setSideBar] = useState(false);
  const icons = {
    Gear: <GiStunGrenade />,
    Gloves: <GiGloves />,
    Heavy: <GiMusket />,
    Knives: <GiSwitchblade />,
    Pistols: <GiGlock />,
    Rifles: <GiAk47 />,
    SMGs: <GiMac10 />,
  };
  return (
    <div className="flex lg:gap-10 text-xl lg:py-6 lg:px-6">
      <Link to="/">
        <img src="/../cs2logo.png" className="w-20 lg:w-28 mt-2 ml-4" alt="" />
      </Link>
      <div
        className="text-5xl fixed top-5 right-8 lg:hidden z-10"
        onClick={() => {
          setSideBar(!sideBar);
        }}
      >
        <MdMenu />
      </div>
      {/*//! Sidebar */}
      {sideBar && (
        <div
          className="fixed w-full h-full bg-black opacity-50 z-10"
          onTouchStart={() => {
            setSideBar(!sideBar);
          }}
          onClick={() => {
            setSideBar(!sideBar);
          }}
        ></div>
      )}
      <div
        className={
          "fixed h-full transition-transform w-40 sm:w-44 right-0 bg-black py-20 overflow-auto border lg:hidden z-20 " +
          (sideBar ? "" : "translate-x-full")
        }
      >
        <div
          className="fixed top-5 text-4xl ml-4"
          onClick={() => {
            setSideBar(!sideBar);
          }}
          onTouchStart={() => {
            setSideBar(!sideBar);
          }}
        >
          <MdClose />
        </div>
        <div className="">
          {Object.keys(navs).map((category) => {
            let iconColor = category === "Knives" ? "text-amber-400" : "";
            let hoverColor =
              category === "Knives"
                ? " hover:bg-white hover:text-black "
                : " hover:bg-white hover:text-black";
            return (
              <div key={category}>
                <div className="flex flex-col justify-center items-center">
                  <nav
                    className=""
                    onTouchEnd={() => setHoveredCategory(category)}
                  >
                    <div
                      className={
                        "flex gap-2 justify-center items-center rounded-lg p-1 cursor-pointer select-none " +
                        hoverColor
                      }
                    >
                      <span>{category}</span>
                      <span className={"text-3xl " + iconColor}>
                        {icons[category]}
                      </span>
                    </div>
                  </nav>
                  {hoveredCategory === category && (
                    <div
                      className="fixed -translate-x-full top-20 z-20  border flex flex-col max-h-40  overflow-auto select-none "
                      onMouseEnter={() => setHoveredCategory(category)}
                      onClick={() => setHoveredCategory(category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      {Object.keys(navs[category]).map((key) => {
                        const value = navs[category][key].name;
                        return (
                          <Link
                            to={`skins/${category}/${key}`}
                            className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer bg-black w-36 sm:w-44 select-none "
                            key={value}
                          >
                            {value}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center lg:gap-4 border-b">
        {Object.keys(navs).map((category) => {
          let iconColor = category === "Knives" ? "text-amber-400" : "";
          let hoverColor =
            category === "Knives"
              ? " hover:bg-white hover:text-black "
              : " hover:bg-white hover:text-black";
          return (
            <div key={category}>
              <div className="relative flex flex-col justify-center items-center">
                <nav
                  className=""
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div
                    className={
                      "flex gap-2 justify-center items-center rounded-lg p-1 cursor-pointer" +
                      hoverColor
                    }
                  >
                    <span>{category}</span>
                    <span className={"text-3xl " + iconColor}>
                      {icons[category]}
                    </span>
                  </div>
                </nav>
                {hoveredCategory === category && (
                  <div
                    className="absolute top-full border flex flex-col  max-h-80 overflow-auto z-20"
                    onMouseEnter={() => setHoveredCategory(category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {Object.keys(navs[category]).map((key) => {
                      const value = navs[category][key].name;
                      return (
                        <Link
                          to={`skins/${category}/${key}`}
                          className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer bg-black"
                          key={value}
                        >
                          {value}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
Navbar.propTypes = {
  navs: PropTypes.object.isRequired,
};

export default Navbar;
