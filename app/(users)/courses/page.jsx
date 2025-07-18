import Card from "@/components/card";
const CoursesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mt-20">
        <h2 className=" container mx-auto  text-4xl font-bold ">
          what <span className="text-blue-900 underline  ">SKILLS </span> would
          you like to learn?
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
    </div>
  );
};
export default CoursesPage;
