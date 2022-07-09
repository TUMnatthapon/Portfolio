import IconC from "../components/icon-c";
import IconCPP from "../components/icon-cpp";
import IconNextJs from "../components/icon-nextjs";
import Image from "next/image";
import ComputerPic from "../public/Dev-pic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact,
  faNode,
  faPython,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const openNewTab = url => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div id="skills">&nbsp;</div>
      <div className="skills">
        <div className="skills--block" data-aos="zoom-in-left">
          <div className="topic-page">
            <FontAwesomeIcon icon={faLaptopCode} /> Skills
          </div>
          <Image src={ComputerPic} alt="Photo" />
          <ul className="skills--wrapper">
            <li onClick={() => openNewTab("https://www.learn-c.org/")}>
              <IconC />
              <p>C</p>
            </li>
            <li onClick={() => openNewTab("http://www.cplusplus.org/")}>
              <IconCPP />
              <p>C++</p>
            </li>
            <li onClick={() => openNewTab("https://html.com/")}>
              <FontAwesomeIcon icon={faHtml5} size="4x" />
              <p>HTML5</p>
            </li>
            <li onClick={() => openNewTab("https://www.tutorialspoint.com/css/index.htm")}>
              <FontAwesomeIcon icon={faCss3Alt} size="4x" />
              <p>CSS3</p>
            </li>
            <li onClick={() => openNewTab("https://sass-lang.com/")}>
              <FontAwesomeIcon icon={faSass} size="4x" />
              <p>Sass</p>
            </li>
            <li onClick={() => openNewTab("https://www.javascript.com/")}>
              <FontAwesomeIcon icon={faJsSquare} size="4x" />
              <p>JavaScript</p>
            </li>
            <li onClick={() => openNewTab("https://nodejs.org/en/")}>
              <FontAwesomeIcon icon={faNode} size="4x" />
              <p>NodeJS</p>
            </li>
            <li onClick={() => openNewTab("https://reactjs.org/")}>
              <FontAwesomeIcon icon={faReact} size="4x" />
              <p>ReactJS</p>
            </li>
            <li onClick={() => openNewTab("https://getbootstrap.com/")}>
              <FontAwesomeIcon icon={faBootstrap} size="4x" />
              <p>Bootstrap</p>
            </li>
            <li onClick={() => openNewTab("https://www.python.org/")}>
              <FontAwesomeIcon icon={faPython} size="4x" />
              <p>Python</p>
            </li>
            <li onClick={() => openNewTab("https://nextjs.org/")}>
              <IconNextJs />
              <p>NextJS</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
