import React, { useState } from "react";
import photo from "../assets/photo.jpg";

const About = () => {
  const [data, setData] = useState({
    image: photo,
    title: "Full Stack Web Developer",
    desc1:
      "I’m a Full Stack Web Developer with a knack for creating seamless, interactive websites and applications. Currently pursuing a B-Tech in Computer Science and Engineering, I blend my technical skills with a passion for innovation to deliver exceptional digital solutions.",
    desc2:
      "As a Full Stack Web Developer, I specialize in both front-end and back-end development. I’m also pursuing a B-Tech in Computer Science and Engineering, continuously enhancing my skills to build dynamic, user-friendly web experiences.",
    actionButton: {
      title: "Read More..",
      link: '/readmore'
    }
  });

  return (
    <>
      <div id="section2" className="main-container bg-gray-100 py-16">
        <h1 className="text-5xl pb-16 font-bold underline text-center">
          About Me
        </h1>

        <div className="flex items-center">
          <div className="w-full flex justify-center">
            <img className="rounded-full" src={data.image} alt="" />
          </div>

          <div className="w-full flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-5xl font-semibold">
                {data.title}
              </h1>
              <p>
                {data.desc1}
              </p>
              <p>
                {data.desc2}
              </p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
