import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className=" ">
      <nav className=" fixed top-0 left-0 w-full  bg-background  shadow-lg shadow-heading/10 p-4">
        <div className="  container  mx-auto flex justify-between items-center">
          <div>
            <Image
              className="mx-auto"
              src="/logoicon.png"
              alt="logos"
              width={50}
              height={40}
            />
            <p className=" md:text-2xl text-[10px] text-foreground font-bold ">
              Coding point
            </p>
          </div>
          <div className="">
            <Link
              href="/"
              className="text-foreground sm:text-[20px] md:text-2xl focus:bg-paraBg rounded-sm  hover:border-3 border-heading  px-3 py-2"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-foreground sm:text-[20px] md:text-2xl focus:bg-paraBg rounded-sm  hover:border-3 border-heading  px-3 py-2"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="text-foreground sm:text-[20px]  md:text-2xl focus:bg-paraBg rounded-sm hover:border-3 border-heading  px-3 py-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground sm:text-[20px] md:text-2xl focus:bg-paraBg rounded-sm hover:border-3 border-heading  px-3 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
