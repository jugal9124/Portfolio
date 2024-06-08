import React, { useEffect, useRef } from "react";
import photo from "../assets/photo.jpg";
import banner_wallpaper from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  });

  return (
    <div
      id="section1"
      style={{
        backgroundImage: `url(${banner_wallpaper})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      <div className="w-full flex items-center justify-center text-white">
        <div className="w-2/3 space-y-3 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am </h3>
          <h1 className=" text-5xl font-bold">Jugal Kishore</h1>
          <h2 className=" text-3xl">
            And I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
          As a passionate Full Stack Web Developer, I specialize in creating dynamic, responsive, and user-friendly websites and applications. With a strong foundation in both front-end and back-end technologies, I excel at transforming ideas into fully functional digital experiences. My expertise includes HTML, CSS, JavaScript, Tailwind CSS, GSAP, React, Node.js, Express.js, Postman, Git Github and databases like MongoDB. I thrive in collaborative environments and am dedicated to continuous learning and innovation. Whether it's building a sleek website or a robust web application, I am committed to delivering high-quality solutions that exceed expectations.
          </p>
          <div className="icons-container flex  space-x-5">
            <a href="https://www.linkedin.com/in/jugal-kishore-61b48b246/" className="hover:bg-orange-500 border px-3 py-4 w-16 h-16 bg-gray-800 flex justify-center items-center rounded-full">
              <i className="fa-brands text-4xl fa-linkedin"></i>
            </a>
            <a href="https://github.com/jugal9124" className="hover:bg-orange-500 border px-3 py-4 w-16 h-16 bg-gray-800 flex justify-center items-center rounded-full">
              <i className="fa-brands text-4xl fa-github"></i>
            </a>
          </div>
          <br />
          <a
            className="text-2xl px-3 mt-3 py-2 bg-orange-500 rounded-full shadow-lg"
            href="/Contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <img className="rounded-full my-2 shadow-lg w-fit" src={photo} alt="" />
      </div>
    </div>
  );
};

export default Banner;
