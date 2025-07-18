import Image from "next/image";
import { RiProfileFill, RiSearch2Fill } from "react-icons/ri";

const Contact = () => {
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
              className="shadow appearance-none border rounded md:w-[60%]
               py-2 px-3 text-black bg-paraBg leading-tight  focus:shadow-outline"
            />

            <label className="block text-heading text-lg font-bold mb-1">
              CNIC
            </label>
            <input
              type="number"
              placeholder="Enter your cnic"
              className="shadow appearance-none border rounded md:w-[60%]
               py-2 px-3 text-black bg-paraBg leading-tight  focus:shadow-outline"
            />
            <label className="block text-heading text-lg font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="shadow appearance-none border rounded md:w-[60%]
               py-2 px-3 text-black bg-paraBg leading-tight  focus:shadow-outline"
            />
            <label className="block text-heading text-lg font-bold mb-1">
              Phone
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
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
              className="shadow appearance-none border rounded md:w-[60%] 
               py-2 px-3 text-black bg-paraBg leading-tight  focus:shadow-outline"
            />
          </div>
          <button className="border-2 text-[1rem] p-3 rounded-2xl hover:bg-paraBg">
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
