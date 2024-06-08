import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [brandName, setBrandName] = useState("Jugal Kishore");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      to: "section1",
      id: 1,
    },
    {
      title: "About",
      to: "section2",
      id: 2,
    },
    {
      title: "Services",
      to: "section3",
      id: 3,
    },
    {
      title: "Skills",
      to: "section3",
      id: 4,
    },
    {
      title: "Contact",
      to: "section5",
      id: 5,
    },
  ]);

  return (
    <>
      <div className="w-full h-20 main flex justify-between items-center px-16 bg-gray-100">
        <div>
          <h1 className="text-3xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-6">
          {menuLinks.map((link) => (
            <Link to={link.to} smooth={true} spy={true} offset={100} duration={1000} key={link.id} className="hover:text-orange-500 cursor-pointer">
              {link.title}
            </Link>
          ))}
        </div>

        <div>
          <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-2xl">
            Hire me
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
