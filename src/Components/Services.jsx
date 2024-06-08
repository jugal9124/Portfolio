import React, { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([
    {
      id: "1",
      title: "Web Development",
      description: `As a Full Stack Web Developer pursuing a B-Tech in Computer Science, I create responsive, dynamic websites and applications, integrating front-end and back-end technologies for seamless user experiences.`,
      actionButton: {
        title: "Check",
        link: "/read",
      },
    },
    {
      id: "2",
      title: "Frontend Development",
      description: `As a Frontend Developer and B-Tech Computer Science student, I craft visually appealing, responsive interfaces using HTML, CSS, and JavaScript, ensuring seamless and engaging user experiences.`,
      actionButton: {
        title: "Check",
        link: "/read",
      },
    },
    {
      id: "3",
      title: "Backend Development",
      description: `As a Backend Developer and B-Tech Computer Science student, I build robust, efficient server-side applications using Node.js, SQL, and MongoDB, ensuring smooth data flow and system performance.`,
      actionButton: {
        title: "Check",
        link: "/read",
      },
    },
  ]);

  return (
    <>
      <div id="section3" className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>

        <div className="services-container space-x-5 px-10 flex mt-12">
        {services.map((service) => (
            <div className="cursor-pointer bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
              <h1 className="text-4xl">{service.title}</h1>
              <p className="">
                {service.description}
              </p>
              <button href={service.actionButton.link} className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
                {service.actionButton.title}
              </button>
            </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Services;
