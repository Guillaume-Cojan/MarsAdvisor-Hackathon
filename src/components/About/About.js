import "./About.css";
import Member from "./Member";

const memberInfo = [
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
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
