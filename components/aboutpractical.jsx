import Image from "next/image";

const AboutPractical = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center  md:flex-row ">
        <div>
          <Image
            src="/src/images/log1.png"
            alt="image"
            width={500}
            height={600}
          />
        </div>
        <div className="bg-paraBg w-[70%] p-7 mt-8 mb-10 text-center ">
          <h1 className="text-4xl">
            {" "}
            <span className="text-blue-900">Practical</span> Oriented Software
            Training
          </h1>
          <div className=" bg-heading  w-[40%] h-4"></div>
          <p className="text-xl mt-4">
            Our training focuses on hands-on experience, ensuring you gain
            practical skills that are directly applicable to real-world software
            development challenges.{" "}
          </p>
          <p className="text-xl mt-4">
            We believe in learning by doing, providing you with the tools and
            knowledge to excel in your software development career.{" "}
          </p>
          <p className="text-xl mt-4">
            Join us to enhance your skills and prepare for the demands of the
            software industry.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutPractical;
