import "./About.css";
import Member from "./Member";

const memberInfo = [
  {
    name: "Francesco",
    surname: "Luciani",
    img: "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
  {
    name: "Guillaume",
    surname: "Cojan",
    img: "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/guillaumecojan/",
    github: "https://github.com/Guillaume-Cojan",
  },
  {
    name: "Silvia",
    surname: "Cabello",
    img: "https://res.cloudinary.com/dnefeccae/image/upload/v1620764628/helenpictures/silvia_yrsxmn.jpg",
    linkedin: "https://www.linkedin.com/in/silviacabellom/",
    github: "https://github.com/SilviaCabello",
  },
  {
    name: "Helen .T",
    surname: "Laurencine .N",
    img: "https://res.cloudinary.com/dnefeccae/image/upload/v1620764366/helenpictures/helen_fh2cad.jpg",
    linkedin: "https://www.linkedin.com/in/helen-trisha-laurencine-ndiaye/",
    github: "https://github.com/HELENTRISHA",
  },
];

const About = () => {
  return (
    <div className="container">
      <div className="intro">
        <p className="intro-p">
          Hello lazy fellow! We are a group of 3 fullstack developers from the
          Wild Code School coding bootcamp. Please feel free to visit our
          LinkedIn and GitHub profiles to know more about each of us.
        </p>
      </div>

      <div className="member-container">
        {memberInfo.map((member) => (
          <div className="member-card">
            <Member
              name={member.name}
              surname={member.surname}
              img={member.img}
              linkedin={member.linkedin}
              github={member.github}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
