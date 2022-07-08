import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import EducationPic from "../public/Education.svg";

const Education = () => {
  return (
    <>
      <div id="education">&nbsp;</div>
      <div className="education">
        <Image src={EducationPic} alt="Photo" />
        <div className="education--block">
          <div className="titile-page">
            <FontAwesomeIcon icon={faGraduationCap} /> My{" "}
            <span className="light-brown-color">Education</span>
          </div>
          <div className="education--content">
            <div className="education--content--title">
              <a href="https://www.phuket.psu.ac.th">
                Prince of Songkla University, Phuket Campus
              </a>
            </div>
            <span className="dot">PSU</span>
            <p>
              Bachelor&rsquo;s degree of Engineering in Computer Engineering
            </p>
            <p>2017 - 2022 | Completed </p>
          </div>
          <div className="education--content">
            <div className="education--content--title">
              <a href="https://www.stw.ac.th">Satunwittaya School </a>
            </div>
            <span className="dot">STW</span>
            <p>High school | Science and Mathematics Program</p>
            <p>2011 - 2017 | Completed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
