const Heading = () => {
  return (
    <>
      <div className=" mt-14 flex flex-col items-center justify-center ">
        <h1 className=" w-[60%] text-5xl font-bold text-center mb-4">
          Why invest in our{" "}
          <span className="bg-paraBg text-heading"> coding</span> education and
          project services?
        </h1>
        <div className="w-[60%] text-gray-500 h-4 bg-heading rounded-full"></div>
        <p className="w-[50%] text-[1.5rem] mt-10 text-center bg-paraBg ">
          Invest in our coding education and project services and see the
          difference for yourself, we are committed to providing the best value
          for your money.
        </p>

        <div className="container mx-auto mt-20 flex text-center content-center p-2.5  ">
          <div className="p-2.5">
            <h1 className="text-2xl bg-heading inline-block p-2 ">
              Personalized Approach
            </h1>
            <p className="p-2.5 text-gray-500  ">
              Our curriculum covers a wide range of programming languages,
              ensuring a holistic learning experience. From foundational
              concepts to advanced techniques, we leave no stone unturned in
              equipping our students with a strong programming foundation
            </p>
          </div>
          <div className="h-[10rem] w-4 bg-heading "></div>
          <div className="p-2.5">
            <h1 className="text-2xl bg-heading inline-block p-2 ">
              Experienced Instructors
            </h1>
            <p className="p-2.5 text-gray-500 ">
              Our instructors are industry professionals with extensive
              experience in software development. They bring their real-world
              expertise into the classroom, delivering practical insights and
              best practices that go beyond textbooks.
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-20 flex text-center content-center p-2.5  ">
          <div className="p-2.5">
            <h1 className="text-2xl bg-heading inline-block p-2 ">
              Comprehensive Curriculum
            </h1>
            <p className="p-2.5 text-gray-500 ">
              Our curriculum covers a wide range of programming languages,
              ensuring a holistic learning experience. From foundational
              concepts to advanced techniques, we leave no stone unturned in
              equipping our students with a strong programming foundation
            </p>
          </div>
          <div className="h-[10rem] w-4 bg-heading "></div>
          <div className="p-2.5">
            <h1 className="text-2xl bg-heading inline-block p-2 ">
              Flexible Learning Options
            </h1>
            <p className="p-2.5 text-gray-500 ">
              We understand the diverse needs of our students, which is why we
              offer both online and offline classes. Our interactive online
              platform allows for seamless virtual learning, while our
              well-equipped physical classrooms provide a
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Heading;
