import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SliderMiniPJ from "../components/SliderMiniPJ";
import SliderPJ from "../components/SliderPJ";
import DevPic from "../public/Dev-pic2.svg";

const Experience = () => {
  const [detailsPJ, setDetailsPJ] = useState(false);
  const [detailsMini, setDetailsMini] = useState(false);
  return (
    <>
      <div id="experience">&nbsp;</div>
      <div className="experience" >
        <div className="experience--block">
          <div className="topic-page" data-aos="fade-down">
            <FontAwesomeIcon icon={faBriefcase} /> My{" "}
            <span className="light-brown-color">Portfolio</span>
          </div>
          <div>
            <div className="card" data-aos="fade-right">
              <div className="card--content">
                <div className="text">
                  <h4 className="text--title">Project</h4>
                  <span className="text--status">Smart IP Camera</span>
                </div>
                <div className="des">
                  This project is about the face and object detection with deep
                  learning technique. If detected object is instantly
                  recorded and notified to Line application.
                  <span
                    className="des--seemore"
                    onClick={() => setDetailsPJ(!detailsPJ)}
                  >
                    See more
                  </span>
                </div>
              </div>
              <div className="card--blob"></div>
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
          <div>
            <div className="card" data-aos="fade-right">
              <div className="card--content">
                <div className="text">
                  <h4 className="text--title">Mini Project</h4>
                  <span className="text--status">
                    E-commerce ( Sneakers Shop )
                  </span>
                </div>
                <div className="des">
                  This project is about website E-commerce for Distributed
                  Computing and Web Technologies subject.
                  <span
                    className="des--seemore"
                    onClick={() => setDetailsMini(!detailsMini)}
                  >
                    See more
                  </span>
                </div>
              </div>
              <div className="card--blob"></div>
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
        <div className="wrapper-right" data-aos="fade-up">
        <Image src={DevPic} alt="Photo" />
        </div>
      </div>
    </>
  );
};

export default Experience;
