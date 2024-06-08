import React, { useState } from "react";
import banner_wallpaper from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  const [skills, setSkills] = useState([
    {
      id: "1",
      skill: "HTML",
    },
    {
      id: "2",
      skill: "CSS",
    },
    {
      id: "3",
      skill: "Javascript",
    },
    {
      id: "4",
      skill: "Tailwind CSS",
    },
    {
      id: "5",
      skill: "Bootstrap",
    },
    {
      id: "6",
      skill: "GSAP",
    },
    {
      id: "7",
      skill: "Node.js",
    },
    {
      id: "8",
      skill: "Express.js",
    },
    {
      id: "9",
      skill: "MongoDB",
    },
    {
      id: "10",
      skill: "SQL",
    },
    {
      id: "11",
      skill: "React.js",
    },
    {
      id: "12",
      skill: "Github",
    },
    {
      id: "13",
      skill: "Postman",
    },
  ]);

  return (
    <>
      <div id="section4" className="mt-2">
        <h1 className="mb-16 text-5xl font-bold underline text-center">
          My Skills
        </h1>

        <div
          style={{
            backgroundImage: `url(${banner_wallpaper})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
            <div className="w-2/3  space-y-4">
              <h1 className="text-4xl font-bold">I Love These Tachnologies</h1>
              <p className="w-[70%]">
                As a Full Stack Web Developer I bring a versatile skill set to
                the table. On the frontend, I specialize in crafting intuitive
                user interfaces with HTML, CSS, and JavaScript, ensuring
                seamless interaction and visual appeal. In backend development,
                I excel in building robust server-side applications using
                Node.js, SQL, and MongoDB, facilitating efficient data
                management and system performance.
              </p>
              <button className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                Hire me
              </button>
            </div>
          </div>

          <div className="mr-20 w-[80vw] flex justify-center">
            <div className="flex justify-center w-[20vw] h-fit space-x-3 flex-wrap">
              {skills.map((skill) => (
                <p className="bg-gray-300 w-fit px-2 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  {skill.skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
