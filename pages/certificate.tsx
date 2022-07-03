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
              width={700}
              height={500}
            />
          <div>
            <input
              type="button"
              value="Read Paper"
              onClick={() => setPopup(!popup)}
            />
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
      </div>
    </>
  );
};

export default Experience;
