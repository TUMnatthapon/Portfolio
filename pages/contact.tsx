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
        <div className="hide-mobile">
          <div className="font-title">Quick Links</div>
          <ul className="wrapper-links">
            <div>
              <li>
                <Link href="#home">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>Home</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>About</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>Skills</span>
                  </a>
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#education">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>Education</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#experience">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>Portfolio</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#certificate">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>Certificate</span>
                  </a>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
