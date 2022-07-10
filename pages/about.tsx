import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import AboutPic2 from "../public/profile-about2.png";

const About = () => {
  return (
    <>
      <div id="about">&nbsp;</div>
      <div className="about" data-aos="fade-up-right">
        <div className="container">
          <div className="topic-page hide-website">
            <FontAwesomeIcon icon={faUser} /> About{" "}
            <span className="brown-color">ME</span>
          </div>
          <img
            className="img-about hide"
            src="/profile-about.png"
            alt="Picture"
          />
          <img
            className="img-about hide-website"
            src="/profile-about2.png"
            alt="Picture"
          />
          <div className="general">
            <div className="hide">
              <div className="set-text">
                About{" "}
                <FontAwesomeIcon icon={faUser} className="set-text--icon" />
              </div>
              <div className="text-larger">ME</div>
              <div className="underline"></div>
            </div>
            <p>
              <span className="gap" />
              I&rsquo;m a new graduate, Prince of Songkla University Phuket
              Campus from the Faculty of Engineering in Computer Engineering.
              I&rsquo;m a person who likes challenges and is always
              enthusiastic. Responsible for work and always ready to learn in
              the future, I intend to be a Front-end developer because I have
              the ability and determination in computer programming.
            </p>
            <span className="logo-about hide">&lt; T U M /&gt;</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
