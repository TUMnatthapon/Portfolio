import Image from "next/image";
import Link from "next/link";
import { DownCircleOutlined } from "@ant-design/icons";
import Background from "../components/Animation";
import Profile from "../public/profile-home.jpg";

const Home = () => {
  return (
    <>
      <Background />
      <div className="home-content">
        <div className="home-content--greeting" data-aos="fade-up">
          HI ALL , I&rsquo;M TUM <span className="hide">. . .</span>
          <span className="wave-emoji">
            <span className="hide-mobile">
              <Image src="/hello.png" alt="👋" width={50} height={50} />
            </span>
          </span>
          <div className="name">
            NATTHAPON
            <span className="brown-color"> CHUAISENG</span>
          </div>
          <div className="home-content--font-bachelor">
            Bachelor&rsquo;s degree of Engineering in Computer Engineering
          </div>
          <a
            className="button-style"
            href="https://drive.google.com/file/d/1vwYc22900twaT9UTSmUM8SYDTboIug0y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME <DownCircleOutlined />
          </a>
        </div>
        <div className="img-wrapper" data-aos="fade-down">
          <Image
            className="img-wrapper--profile"
            src={Profile}
            alt="profile-home"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
