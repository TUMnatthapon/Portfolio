import Image from "next/image";
import profilePic from "../public/profile-home.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SliderMiniPJ from "../components/SliderMiniPJ";

const Experience = () => {
  const [detailsPJ, setDetailsPJ] = useState(false);
  const [detailsMini, setDetailsMini] = useState(false);
  return (
    <>
      <div id="experience">&nbsp;</div>
      <div className="content-page">
        <div className="titile-page">My University Experience</div>
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
                  src={profilePic}
                  alt="profile-home"
                  width={50}
                  height={50}
                />
                <div className="text">
                  <h3 className="text--title">Project</h3>
                  <span className="text--status">Smart IP Camera</span>
                </div>
              </div>
              <p className="des">
                <span className="des--gap" />
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
                    <Image
                      src="/Project-1.png"
                      alt="Project-1"
                      width={350}
                      height={200}
                    />
                    <Image
                      src="/Project-2.png"
                      alt="Project-2"
                      width={350}
                      height={200}
                    />
                    <Image
                      src="/Project-3.png"
                      alt="Project-3"
                      width={350}
                      height={200}
                    />
                    <div>
                      <div>Languages </div>
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <div>Frameworks </div>
                      <li>Flask</li>
                      <div>Model </div>
                      <li> Face Detection : Fast R-CNN Face</li>
                      <li>Face Recognition: Face-API</li>
                      <li>Object Detection:SSD Mobilenet V1</li>
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
                  src={profilePic}
                  alt="profile-home"
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
                <span className="des--gap" />
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
                    <div>
                      <div>Languages </div>
                      <li>JavaScript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <div>Frameworks </div>
                      <li>React</li>
                      <div>Database </div>
                      <li>Firebase</li>
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
