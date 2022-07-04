import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <>
      <div id="education">&nbsp;</div>
      <div className="content-page">
        <div className="titile-page">
          <FontAwesomeIcon icon={faGraduationCap} /> My <span className="brown-color">Education</span>
        </div>
        <div className="education">
          <div className="education--card">
            <div className="education--card--psu" />
            <div className="education--card--text">
              <div className="education-name">
                Prince of Songkla University, Phuket Campus
              </div>
              <div className="education-major">
                Bachelor&rsquo;s degree of Engineering in Computer Engineering
              </div>
              <div className="education-completed">2017 - 2022 | Completed</div>
            </div>
          </div>
          <div className="education--card">
            <div className="education--card--stw" />
            <div className="education--card--text">
              <div className="education-name">Satunwittaya School</div>
              <div className="education-major">
                High school | Science and Mathematics Program
              </div>
              <div className="education-completed">2011 - 2017 | Completed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
