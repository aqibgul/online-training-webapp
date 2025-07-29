"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";

import { RiProfileFill, RiSearch2Fill } from "react-icons/ri";

const Contact = () => {
  const [username, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourses] = useState("");
  const handleSubmit = async (e) => {
    // Prevent default form submission behavior
    e?.preventDefault();
    await fetch("http://localhost:5000/registration", {
      method: ["POST"],
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        cnic,
        email,
        phone,
        password,
        course,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Registration successful:", data.message);
          alert("Registration successful! You can now log in.");
        } else {
          console.log("Registration failed:", data.message);
        }
      });
    // Handle success or error messages as needed

    // Reset form fields
    setName("");
    setCnic("");
    setEmail("");
    setPhone("");
    setPassword("");
    setCourses("");
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  // Function to handle form submission

  return (
    <>
      <h1 className="w-[60%] mb-2.5 pt-15  text-3xl sm:text-5xl font-bold text-center text-heading mt-4">
        Registration{" "}
      </h1>
      <div className="bg-blue-50 p-2 container text-heading mx-auto flex flex-col md:flex-row justify-center items-center">
        <form onSubmit={handleSubmit} className="  w-[60%] mt-10">
          <div className="">
            <label className="block text-heading text-lg font-bold mb-1">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              required
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
              required
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
              required
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
              required
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
              required
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
              required
              value={course}
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
