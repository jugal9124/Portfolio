import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // let r = await fetch("http://localhost:3000/", {method: "POST", headers: {"content-Type": "application/json", }, body: JSON.stringify(e)});
    // let res = await r.text();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div id="section5" className="py-14">
        <h1 className="mb-16 text-5xl font-bold underline text-center">
          My Contact
        </h1>

        <div className="w-full p-2 bg-gray-100 flex justify-between">
          <div
            style={{
              backgroundSize: "cover",
              background: "linear-gradient(to right, pink, purple)",
            }}
            className="text-white space-y-4 p-5 flex justify-center h-fit rounded-lg"
          >
            <div className="space-y-5">
              <h1 className="font-bold text-4xl">Info</h1>
              <h2 className="text-xl">
                <i class="fa-regular fa-envelope mr-4"></i>786ugal@gmail.com
              </h2>
              <h2 className="text-xl">
                <i class="fa-solid fa-phone mr-4"></i>+91 8851399124
              </h2>
              <h2 className="text-xl">
                <i class="fa-solid fa-location-dot mr-4"></i>G-161 Harkesh Nager
                Okhla ph-2
              </h2>
            </div>
          </div>

          <div className=" p-5 w-1/3 mr-36 space-y-5 bg-gray-200">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <h2 className="text-xl w-2/3">
              Feel free to contact us any time. we will get back to you as soon
              as we can!
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-1/2 flex flex-col space-y-5"
              action=""
              method="post"
            >
              <input
              {...register("name", { required: true })}
              className="hover:placeholder-gray-800 bg-gray-200 outline-none"
              value={name}
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <hr />
              <input
              {...register("email", { required: true })}
                className="hover:placeholder-gray-800 bg-gray-200 outline-none"
                value={email}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <hr />
              <textarea
              {...register("message", { required: true })}
                className="hover:placeholder-gray-800 bg-gray-200 w-[20vw] h-[15vh]"
                value={message}
                type="text"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <hr />
              <button
                className="bg-green-500 p-3 text-2xl rounded-full cursor-pointer shadow-lg"
                type="submit"
              >Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
