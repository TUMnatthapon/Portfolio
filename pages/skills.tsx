import IconC from "../components/icon-c";
import IconCPP from "../components/icon-cpp";
import IconNextJs from "../components/icon-nextjs";
import Image from "next/image";
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
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <>
      <div id="skills">&nbsp;</div>
      <div className="content-page">
        <div className="titile-page">
        <FontAwesomeIcon icon={faLaptopCode} /> Skills
        </div>
        <div className="skills">
          <div>
            <Image
              src="/profile-home.jpg"
              alt="profile-home"
              width={500}
              height={500}
            />
          </div>
          <ul className="skills--wrapper">
            <li>
              <IconC />
              <p>C</p>
            </li>
            <li>
              <IconCPP />
              <p>C++</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faHtml5} size="4x" />
              <p>HTML5</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3Alt} size="4x" />
              <p>CSS3</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faSass} size="4x" />
              <p>Sass</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faJsSquare} size="4x" />
              <p>JavaScript</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faNode} size="4x" />
              <p>NodeJS</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} size="4x" />
              <p>ReactJS</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faBootstrap} size="4x" />
              <p>Bootstrap</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPython} size="4x" />
              <p>Python</p>
            </li>
            <li>
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
