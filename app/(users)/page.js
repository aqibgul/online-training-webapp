import "../globals.css";
import {
  RiCodeLine,
  RiFolder2Fill,
  RiFolderVideoLine,
  RiProjector2Fill,
  RiVideoAddLine,
} from "react-icons/ri";
import HeroSection from "@/components/herosection";
import Button from "@/components/button";
import Card from "@/components/card";
import Heading from "@/components/heading";
import Link from "next/link";
import AboutPractical from "@/components/aboutpractical";
import FeedBack from "@/components/feedback";

export default function Home() {
  return (
    <>
      <div className="mb-11 mx-6 ">
        <div className="container  mx-auto">
          <div
            className="container mx-auto font-bold text-heading sm:my-8
           md:my-14 flex items-center justify-center"
          >
            {" "}
            <h1 className=" mt-11 pb-3.5  md:text-7xl text-4xl font-serif ">
              Online IT Training
            </h1>
          </div>
          <HeroSection />
          <button
            className="bg-paraBg font-bold text-2xl border-2  text-black px-4 py-2
       rounded-lg mt-1.5 hover:bg-heading transition duration-200"
          >
            <Link href="/contact">Enroll Now</Link>
          </button>
        </div>

        <div className=" mb-5 ">
          <ul
            className="text-blue-900 bg-gradient-to-b from-blue-50 to-blue-200
             p-2 pl-[7rem] mt-1.5 "
          >
            <span>
              <li className="text-2xl font-bold mt-4">
                {" "}
                <RiFolderVideoLine className=" text-blue-900 inline-block mr-2" />{" "}
                Live classes
              </li>
            </span>
            <li className=" text-2xl font-bold mt-4">
              {" "}
              <RiFolder2Fill className=" text-blue-900 inline-block mr-2" />{" "}
              Modern Projects
            </li>
            <li className="text-2xl font-bold mt-4">
              <RiCodeLine className="text-blue-900 inline-block mr-2" />
              Industry Level
            </li>
          </ul>
        </div>
        <div className="mt-20">
          <h2 className=" container mx-auto  text-4xl font-bold ">
            what <span className="text-blue-900 underline  ">SKILLS </span>{" "}
            would you like to learn?
          </h2>
        </div>
        <div
          className="container mx-auto grid grid-cols-1 sm:grid-cols-2
         md:grid-cols-3 gap-6 mt-9  "
        >
          <Card
            title="HTML"
            description=" Learn the structure of web pages with HTML."
            imgSrc="/src/images/htm.png"
          />
          <Card
            title="CSS"
            description=" Style your web pages with CSS."
            imgSrc="/src/images/css.png"
          />
          <Card
            title="JavaScript"
            description=" Add interactivity to your web pages with JavaScript."
            imgSrc="/src/images/javascript.png"
          />
          <Card
            title="React"
            description=" Build dynamic user interfaces with React."
            imgSrc="/src/images/react.png"
          />
          <Card
            title="Node.js"
            description=" Create server-side applications with Node.js."
            imgSrc="/src/images/nodejs.png"
          />
          <Card
            title="MongoDB"
            description=" Manage your data with MongoDB."
            imgSrc="/src/images/mongodb.png"
          />
        </div>
        <Heading />
        <AboutPractical />
        <FeedBack />
      </div>
    </>
  );
}
