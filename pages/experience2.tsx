import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SliderAIS from "../components/SliderAIS";
import SliderPKIT from "../components/SliderPKIT";
import SliderQualitier from "../components/SliderQualitier";

const Experience = () => {
  const [detailsAIS, setdetailsAIS] = useState(false);
  const [detailsPKIT, setdetailsPKIT] = useState(false);
  const [detailsQualitier, setdetailsQualitier] = useState(false);
  return (
    <>
      <div className="experience">
        <div className="experience--block">
          <div className="experience--title">
            <span className="light-brown-color">Experience</span> ( PKITA CO.,
            LTD. )
          </div>
          <div>
            <div className="card" data-aos="fade-right">
              <div className="card--content">
                <div className="text">
                  <h4 className="text--title">Project</h4>
                  <span className="text--status">
                    <a
                      href="https://aisfiber.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website Promotion-AIS
                    </a>
                  </span>
                </div>
                <div className="des">
                  This project is about showing the promotion of AIS home
                  internet and filling out a home internet installation form.
                  When filling out a form, There will be a notification to the
                  Line application.
                  <span
                    className="des--seemore"
                    onClick={() => setdetailsAIS(!detailsAIS)}
                  >
                    SeeMore
                  </span>
                </div>
              </div>
              <div className="card--blob"></div>
            </div>
            {detailsAIS && (
              <div className="popup">
                <div className="popup--box">
                  <FontAwesomeIcon
                    className="button-close"
                    icon={faCircleXmark}
                    onClick={() => setdetailsAIS(!detailsAIS)}
                  />
                  <div className="Popup-wrapper">
                    <SliderAIS />
                    <div className="details">
                      <div>
                        <h2>Languages</h2>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                      </div>
                      <div>
                        <h2>Framework</h2>
                        <li>Wordpress</li>
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
                  <h4 className="text--title">Project</h4>
                  <span className="text--status">
                    <a
                      href="https://www.phuketitsupport.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pakita Company Website
                    </a>
                  </span>
                </div>
                <div className="des">
                  This project is about showing company information and
                  gathering topics important to employees.
                  <span
                    className="des--seemore"
                    onClick={() => setdetailsPKIT(!detailsPKIT)}
                  >
                    SeeMore
                  </span>
                </div>
              </div>
              <div className="card--blob"></div>
            </div>
            {detailsPKIT && (
              <div className="popup">
                <div className="popup--box">
                  <FontAwesomeIcon
                    className="button-close"
                    icon={faCircleXmark}
                    onClick={() => setdetailsPKIT(!detailsPKIT)}
                  />
                  <div className="Popup-wrapper">
                    <SliderPKIT />
                    <div className="details">
                      <div>
                        <h2>Languages</h2>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                      </div>
                      <div>
                        <h2>Framework</h2>
                        <li>Wordpress</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="block-right">
          <div className="card" data-aos="fade-up">
            <div className="card--content">
              <div className="text">
                <h4 className="text--title">Project</h4>
                <span className="text--status">Qualitier Website</span>
              </div>
              <div className="des">
                This project is about houses for sale in Chiang Mai. It shows
                information about the places. And offer the data on homes that
                have already been reserved.
                <span
                  className="des--seemore"
                  onClick={() => setdetailsQualitier(!detailsQualitier)}
                >
                  SeeMore
                </span>
              </div>
            </div>
            <div className="card--blob"></div>
          </div>
          {detailsQualitier && (
            <div className="popup">
              <div className="popup--box">
                <FontAwesomeIcon
                  className="button-close"
                  icon={faCircleXmark}
                  onClick={() => setdetailsQualitier(!detailsQualitier)}
                />
                <div className="Popup-wrapper">
                  <SliderQualitier />
                  <div className="details">
                    <div>
                      <h2>Languages</h2>
                      <li>JavaScript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </div>
                    <div>
                      <h2>Framework</h2>
                      <li>NextJS</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Experience;
