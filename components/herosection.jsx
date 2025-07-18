import Image from "next/image";
const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto grid md:grid-cols-2 gap-1.5 grid-cols-1 ">
        <div className="flex items-center justify-center">
          <p className="bg-paraBg md:text-2xl p-1.5  text-gray-600 rounded-2xl">
            <span className="text-4xl text-blue-900"> Coding Point</span> – Top
            Online IT Training Institute is an ideal place for individuals
            looking to upgrade their skills and advance their careers in the
            fast-growing tech industry. Offering IT courses, including popular
            courses such as Web Development courses and Software classes , the
            Institute provides hands-on training and practical experience to
            help students stay ahead of the curve.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/hero-image1.png"
            alt="hero-image"
            width={500}
            height={600}
          />
        </div>
      </div>
    </>
  );
};
export default HeroSection;
