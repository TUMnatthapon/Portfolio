import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div id="about">&nbsp;</div>
      <div className="about">
        <div className="container">
          <img className="img-about" src="/profile-about.png" />
          <div className="general">
            <div>
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
            <span className="logo-about">&lt; 🍀 TUM /&gt;</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
