import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleChevronRight,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="area-block hide">
          <div className="font-title">Tum Portfolio</div>
          <a>Thank you for visiting my personal portfolio website. </a>
        </div>
        <div>
          <div className="font-title">Contact Info</div>
          <div className="font-title--wrapper">
            <FontAwesomeIcon icon={faPhone} />
            <a>082-729-2284</a>
          </div>
          <div className="font-title--wrapper">
            <FontAwesomeIcon icon={faLine} />
            <a> ID : tum..ntp</a>
          </div>
          <div className="font-title--wrapper">
            <FontAwesomeIcon icon={faEnvelope} />
            <a>natthapon.tum01@gmail.com</a>
          </div>
          <div className="font-title--wrapper">
            <FontAwesomeIcon icon={faLocationDot} />
            <a> Phuket, Thailand</a>
          </div>
          <div id="contact">&nbsp;</div>
        </div>
        <div>
          <div className="font-title">Quick Links</div>
          <ul className="wrapper-links">
            <div>
              <li>
                <FontAwesomeIcon icon={faCircleChevronRight} />
                <Link href="#home">Home</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleChevronRight} />
                <Link href="#about">About</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleChevronRight} />
                <Link href="#skills">Skills</Link>
              </li>
            </div>
            <div>
              <li>
                <FontAwesomeIcon icon={faCircleChevronRight} />
                <Link href="#education">Education</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleChevronRight} />
                <Link href="#experience">Portfolio</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleChevronRight} />
                <Link href="#certificate">Certificate</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
