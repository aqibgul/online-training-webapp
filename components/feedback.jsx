import Image from "next/image";
const FeedBack = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div>
            <div className="bg-paraBg w-[70%] p-7 mt-8 mb-10 text-center">
              <h1 className="text-4xl">
                <span className="text-blue-900">Feedback</span> Form
              </h1>
              <div className="bg-heading w-[40%] h-4 mx-auto"></div>
              <p className="text-xl mt-4">
                We value your feedback! Please share your thoughts about our
                training program.
              </p>
              <textarea
                className="w-full h-32 mt-4 p-2 border border-blue-700 rounded-lg"
                placeholder="Your feedback here..."
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Submit Feedback
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/src/images/feedback.png"
              alt="hero-image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FeedBack;
