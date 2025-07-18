import {
  RiFacebookCircleLine,
  RiInstagramFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <footer className="bg-background h-22 text-foreground p-4">
        <div className="bg-paraBg h-60 md:h-40  flex  justify-evenly items-center ">
          <div className="flex flex-col md:flex-row   w-[15%] ">
            <RiFacebookCircleLine
              className="text-4xl text-blue-600 mx-auto mb-4
            hover:shadow-lg shadow-blue-500/50  cursor-pointer"
            />
            <RiInstagramFill
              className="text-4xl text-pink-600 mx-auto mb-4 
            hover:shadow-lg shadow-blue-500/50  cursor-pointer "
            />
            <RiLinkedinFill
              className="text-4xl text-blue-800 mx-auto mb-4 
            hover:shadow-lg shadow-blue-500/50  cursor-pointer "
            />
            <RiYoutubeFill
              className="text-4xl text-red-600 mx-auto mb-4 
            hover:shadow-lg shadow-blue-500/50  cursor-pointer"
            />
          </div>
          <div className=" bg-paraBg text-center">
            <p className="text-lg">
              &copy; {new Date().getFullYear()} Coding Point. All rights
              reserved.
            </p>
            <p className="text-sm mt-2">Made with ❤️ by Coding Point Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
