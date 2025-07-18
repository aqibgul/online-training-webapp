import Image from "next/image";
import Button from "@/components/button";

const Card = ({ title, description, imgSrc }) => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-4  
      rounded-3xl p-2.5 hover:shadow-2xl shadow-heading/50 "
      >
        <h2 className="text-2xl  font-bold  mt-4">{title}</h2>
        <div className=" w-[14rem] lg:w-2xs  md:h-50 bg-amber-200">
          <Image
            className=" w-full h-full rounded-lg"
            src={imgSrc}
            alt="html"
            width={300}
            height={100}
          />
        </div>
        <p className=" bg-paraBg rounded-2xl p-1.5 text-gray-900 mt-2  ">
          {description}
        </p>
        <p
          className="bg-red-700 text-white px-4 py-2
          mt-2 hover:bg-red-500 transition duration-200"
        >
          {" "}
          50% discount
        </p>
      </div>
    </>
  );
};
export default Card;
