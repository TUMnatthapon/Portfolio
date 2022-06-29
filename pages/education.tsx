import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Education = () => {
  return (
    <>
      <div id="education">&nbsp;</div>
      <div className="content-page">
        <div className="education">
          <div className="titile-page">
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </div>
          <div className="education--wrapper">
            <div>
              <Image src="/psu.png" alt="logo" width={120} height={150} />
              <h1>Prince of Songkla University, Phuket Campus</h1>
              <h3>Bachelor’s degree of Engineering in Computer Engineering</h3>
              <h4>2017 - 2022 | Completed</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
