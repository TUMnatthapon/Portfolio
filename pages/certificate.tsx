import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faScroll } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import picLeft from "../public/womenLeft.svg";
import picRight from "../public/womenRight.svg";
const Experience = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div id="certificate">&nbsp;</div>
      <div className="certificate">
        <div className="topic-page">
          <FontAwesomeIcon icon={faScroll} /> Certificate
        </div>
        <div className="certificate--block">
          <div className="hide-mobile">
            <Image src={picLeft} alt="Photo" data-aos="fade-right"/>
          </div>
          <div className="cer" data-aos="zoom-out">
            <Image
              src="https://drive.google.com/uc?export=view&id=1ItS2Ok9DKpDnS4c0DEwPiVT1e8bWRNBX"
              alt="👋"
              width={750}
              height={500}
            />
            <div className="read-more" onClick={() => setPopup(!popup)}>
              Read Paper
            </div>
          </div>
          <div className="hide-mobile">
            <Image src={picRight} alt="Photo" data-aos="fade-left"/>
          </div>
        </div>
        <div>
          {popup && (
            <div className="popup">
              <div className="popup--box">
                <FontAwesomeIcon
                  className="button-close"
                  icon={faXmark}
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
