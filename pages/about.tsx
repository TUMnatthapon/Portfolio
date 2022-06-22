import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div id="about">&nbsp;</div>
      <div className="content-page">
        <div className="about">
          <div className="titile-page">
            <UserOutlined /> About <span className="brown-color">Me</span>
          </div>
          <div className="about--wrapper">
            <div>
              <Image
                src="/profile-home.jpg"
                alt="profile-home"
                width={200}
                height={200}
              />
            </div>
            <div className="about--paragraph">
              I&rsquo;m a new graduate, Prince of Songkla University Phuket
              Campus from the Faculty of Engineering in Computer Engineering.
              I&rsquo;m a person who likes challenges and is always
              enthusiastic. Responsible for work and always ready to learn in
              the future, I intend to be a Front-end developer because I have
              the ability and determination in computer programming.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
