import AboutPractical from "@/components/aboutpractical";
import FeedBack from "@/components/feedback";
import Heading from "@/components/heading";
const About = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <Heading />
      </div>
      <AboutPractical />
      <FeedBack />
    </div>
  );
};
export default About;
