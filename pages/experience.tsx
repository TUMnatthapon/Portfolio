import Image from "next/image";
import profilePic from "../public/profile-home.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SliderMiniPJ from "../components/SliderMiniPJ";
import SliderPJ from "../components/SliderPJ";

const Experience = () => {
  const [detailsPJ, setDetailsPJ] = useState(false);
  const [detailsMini, setDetailsMini] = useState(false);
  return (
    <>
      <div id="experience">&nbsp;</div>
      <div className="content-page">
        <div className="titile-page">
          <FontAwesomeIcon icon={faBriefcase} /> My <span className="brown-color">Portfolio</span>
        </div>
        <div className="experience">
          <div className="card">
            <Image src={profilePic} alt="profile-home" />
            <div className="card--overlay">
              <div className="card--header">
                <svg className="curve" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
                </svg>
                <Image
                  className="circle"
                  src="https://www.fms.psu.ac.th/wp-content/uploads/2020/03/PSU-Logo.png"
                  alt="psu"
                  width={50}
                  height={50}
                />
                <div className="text">
                  <h3 className="text--title">Project</h3>
                  <span className="text--status">Smart IP Camera</span>
                </div>
              </div>
              <p className="des">
                <span className="gap" />
                This project is about the face and object detection with deep
                learning technique. This project will be used in home CCTV
                camera to secure the house. If detected object is instantly
                recorded and notified to Line application.
                <span
                  className="des--seemore"
                  onClick={() => setDetailsPJ(!detailsPJ)}
                >
                  See more
                </span>
              </p>
            </div>
            {detailsPJ && (
              <div className="popup">
                <div className="popup--box">
                  <FontAwesomeIcon
                    className="button-close"
                    icon={faXmark}
                    onClick={() => setDetailsPJ(!detailsPJ)}
                  />
                  <div className="Popup-wrapper">
                    <SliderPJ />
                    <div className="details">
                      <div>
                        <h2>Languages</h2>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                      </div>
                      <div>
                        <h2>Framework</h2>
                        <li>Flask</li>
                      </div>
                      <div>
                        <h2>Model </h2>
                        <li> Face Detection : Fast R-CNN </li>
                        <li>Face Recognition : Face-API</li>
                        <li>Object Detection : SSD Mobilenet V1</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="card">
            <Image src={profilePic} alt="profile-home" />
            <div className="card--overlay">
              <div className="card--header">
                <svg className="curve" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
                </svg>
                <Image
                  className="circle"
                  src="https://www.fms.psu.ac.th/wp-content/uploads/2020/03/PSU-Logo.png"
                  alt="psu"
                  width={50}
                  height={50}
                />
                <div className="text">
                  <h3 className="text--title">Mini Project</h3>
                  <span className="text--status">
                    E-commerce ( Sneakers Shop )
                  </span>
                </div>
              </div>
              <p className="des">
                <span className="gap" />
                This project is about website E-commerce for Distributed
                Computing and Web Technologies subject.
                <span
                  className="des--seemore"
                  onClick={() => setDetailsMini(!detailsMini)}
                >
                  See more
                </span>
              </p>
            </div>
            {detailsMini && (
              <div className="popup">
                <div className="popup--box">
                  <FontAwesomeIcon
                    className="button-close"
                    icon={faXmark}
                    onClick={() => setDetailsMini(!detailsMini)}
                  />
                  <div className="Popup-wrapper">
                    <SliderMiniPJ />
                    <div className="details">
                      <div>
                        <h2>Languages</h2>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                      </div>
                      <div>
                        <h2>Framework</h2>
                        <li>React</li>
                      </div>
                      <div>
                        <h2>Database</h2>
                        <li>Firebase</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
