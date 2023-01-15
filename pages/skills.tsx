import IconC from "../components/icon-c";
import IconCPP from "../components/icon-cpp";
import IconNextJs from "../components/icon-nextjs";
import Image from "next/image";
import Code from "../public/Dev-pic.svg";
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
  faWordpress
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div id="skills">&nbsp;</div>
      <div className="skills">
        <div className="topic-page" data-aos="fade-down">
          <FontAwesomeIcon icon={faLaptopCode} /> Skills
        </div>
        <div data-aos="fade-right">
          <Image src={Code} alt="Photo" />
        </div>
        <div className="skills --wrapper" data-aos="fade-up">
          <li onClick={() => openNewTab("https://www.learn-c.org/")}>
            <IconC />
            <p className="hide-mobile">C</p>
          </li>
          <li onClick={() => openNewTab("http://www.cplusplus.org/")}>
            <IconCPP />
            <p className="hide-mobile">C++</p>
          </li>
          <li onClick={() => openNewTab("https://html.com/")}>
            <a>
              <FontAwesomeIcon icon={faHtml5} size="4x" />
            </a>
            <p className="hide-mobile">HTML5</p>
          </li>
          <li
            onClick={() =>
              openNewTab("https://www.tutorialspoint.com/css/index.htm")
            }
          >
            <a>
              <FontAwesomeIcon icon={faCss3Alt} size="4x" />
            </a>
            <p className="hide-mobile">CSS3</p>
          </li>
          <li onClick={() => openNewTab("https://sass-lang.com/")}>
            <a>
              <FontAwesomeIcon icon={faSass} size="4x" />
            </a>
            <p className="hide-mobile">Sass</p>
          </li>
          <li onClick={() => openNewTab("https://www.javascript.com/")}>
            <a>
              <FontAwesomeIcon icon={faJsSquare} size="4x" />
            </a>
            <p className="hide-mobile">JavaScript</p>
          </li>
          <li onClick={() => openNewTab("https://nodejs.org/en/")}>
            <a>
              <FontAwesomeIcon icon={faNode} size="4x" />
            </a>
            <p className="hide-mobile">NodeJS</p>
          </li>
          <li onClick={() => openNewTab("https://reactjs.org/")}>
            <a>
              <FontAwesomeIcon icon={faReact} size="4x" />
            </a>
            <p className="hide-mobile">ReactJS</p>
          </li>
          <li onClick={() => openNewTab("https://getbootstrap.com/")}>
            <a>
              <FontAwesomeIcon icon={faBootstrap} size="4x" />
            </a>
            <p className="hide-mobile">Bootstrap</p>
          </li>
          <li onClick={() => openNewTab("https://wordpress.com/")}>
            <a>
              <FontAwesomeIcon icon={faWordpress} size="4x" />
            </a>
            <p className="hide-mobile">Wordpress</p>
          </li>
          <li onClick={() => openNewTab("https://www.python.org/")}>
            <a>
              <FontAwesomeIcon icon={faPython} size="4x" />
            </a>
            <p className="hide-mobile">Python</p>
          </li>
          <li onClick={() => openNewTab("https://nextjs.org/")}>
            <IconNextJs />
            <p className="hide-mobile">NextJS</p>
          </li>
        </div>
      </div>
    </>
  );
};

export default Skills;
