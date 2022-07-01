import Image from "next/image";
import profilePic from "../public/profile-home.jpg";

const Experience = () => {
  return (
    <>
      <div id="experience">&nbsp;</div>
      <div className="content-page">
        <div className="titile-page">My University Experience</div>
        <div className="experience">
          <div>
            <a href="" className="card">
              <Image
                className="card__image"
                src={profilePic}
                alt="profile-home"
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <Image
                    className="card__thumb"
                    src={profilePic}
                    alt="profile-home"
                    width={50}
                    height={50}
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Project</h3>
                    <span className="card__status">Smart IP Camera</span>
                  </div>
                </div>
                <p className="card__description">
                  This under graduated project is about the face and object
                  detection with deep learning technique. This project will be
                  used in home CCTV cameras to secure the house. If detected
                  object is instantly recorded and notified to Line application.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="" className="card">
              <Image
                className="card__image"
                src={profilePic}
                alt="profile-home"
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <Image
                    className="card__thumb"
                    src={profilePic}
                    alt="profile-home"
                    width={50}
                    height={50}
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Mini Project</h3>
                    <span className="card__status">
                      E-commerce ( Sneakers Shop )
                    </span>
                  </div>
                </div>
                <p className="card__description">
                  This project is about website E-commerce for Distributed
                  Computing and Web Technologies subject .
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
