import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Experience = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div id="certificate">&nbsp;</div>
      <div className="content-page">
        <div className="certificate">
          <div className="titile-page">Certificate</div>
          <Image
            src="https://drive.google.com/uc?export=view&id=1ItS2Ok9DKpDnS4c0DEwPiVT1e8bWRNBX"
            alt="👋"
            width={500}
            height={350}
          />
          <div>
            <input
              type="button"
              value="Read Paper"
              onClick={() => setPopup(!popup)}
            />
            {popup && (
              <div className="popup-box">
                <div className="box">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="btn-close"
                    onClick={() => setPopup(!popup)}
                  />
                  <div className="clear">
                    <iframe
                      src="https://drive.google.com/file/d/1Tdvm2Q8_xVYES0A3XQovflmSe9yVgh_-/preview"
                      width="640"
                      height="480"
                      allow="autoplay"
                    />
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
