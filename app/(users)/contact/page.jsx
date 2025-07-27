"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";

import { RiProfileFill, RiSearch2Fill } from "react-icons/ri";

const Contact = () => {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [courses, setCourses] = useState("");
  const handleSubmit = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:3000/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        cnic,
        email,
        phone,
        password,
        courses,
      }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Registration successful");
      // Reset form fields
      setName("");
      setCnic("");
      setEmail("");
      setPhone("");
      setPassword("");
      setCourses("");
    } else {
      alert("Registration failed: " + data.message);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <h1 className="w-[60%] mb-2.5 pt-15  text-3xl sm:text-5xl font-bold text-center text-heading mt-4">
        Registration{" "}
      </h1>
      <div className="bg-blue-50 p-2 container text-heading mx-auto flex flex-col md:flex-row justify-center items-center">
        <form className="  w-[60%] mt-10">
          <div className="">
            <label className="block text-heading text-lg font-bold mb-1">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded md:w-[60%]
               py-2 px-3 text-black bg-paraBg leading-tight  focus:shadow-outline"
            />

            <label className="block text-heading text-lg font-bold mb-1">
              CNIC
            </label>
            <input
              type="number"
              placeholder="Enter your cnic"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              className="shadow appearance-none border rounded md:w-[60%]
               py-2 px-3 text-black bg-paraBg leading-tight  focus:shadow-outline"
            />
            <label className="block text-heading text-lg font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded md:w-[60%]
               py-2 px-3 text-black bg-paraBg leading-tight  focus:shadow-outline"
            />

            <label className="block text-heading text-lg font-bold mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded md:w-[60%]
               py-2 px-3 text-black bg-paraBg leading-tight  focus:shadow-outline"
            />

            <label className="block text-heading text-lg font-bold mb-1">
              Phone
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded md:w-[60%]
               py-2 px-3 text-black bg-paraBg leading-tight  focus:shadow-outline"
            />

            <label className="block text-heading text-lg font-bold mb-1">
              Courses
            </label>
            <textarea
              type="text"
              rows="4"
              placeholder="Enter your courses"
              value={courses}
              onChange={(e) => setCourses(e.target.value)}
              className="shadow appearance-none border rounded md:w-[60%] 
               py-2 px-3 text-black bg-paraBg leading-tight  focus:shadow-outline"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="border-2 text-[1rem] p-3 rounded-2xl hover:bg-paraBg"
          >
            Register
          </button>
        </form>

        <Image
          src="/src/images/logo2.png"
          alt="image"
          width={300}
          height={300}
        />
      </div>
    </>
  );
};
export default Contact;
