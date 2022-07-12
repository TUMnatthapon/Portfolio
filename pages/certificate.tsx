import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faScroll } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Cer from "../public/Cer.png";
import picLeft from "../public/womenLeft.svg";
import picRight from "../public/womenRight.svg";

const Experience = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div id="certificate">&nbsp;</div>
      <div className="certificate">
        <div className="topic-page" data-aos="fade-down">
          <FontAwesomeIcon icon={faScroll} /> Certificate
        </div>
        <div className="certificate--block">
          <div className="hide-mobile">
            <Image src={picLeft} alt="Photo" data-aos="fade-right" />
          </div>
          <div className="cer" data-aos="zoom-out">
            <div className="cer--wrapper">
              <Image src={Cer} alt="Certificate" />
            </div>
            <div className="read-more" onClick={() => setPopup(!popup)}>
              Read Paper
            </div>
          </div>
          <div className="hide-mobile">
            <Image src={picRight} alt="Photo" data-aos="fade-left" />
          </div>
        </div>
        <div>
          {popup && (
            <div className="popup">
              <div className="popup--box">
                <FontAwesomeIcon
                  className="button-close"
                  icon={faCircleXmark}
                  onClick={() => setPopup(!popup)}
                />
                <div className="paper">
                  <iframe
                    src="https://drive.google.com/file/d/1Tdvm2Q8_xVYES0A3XQovflmSe9yVgh_-/preview"
                    allow="autoplay"
                  />
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
