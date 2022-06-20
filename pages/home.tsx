import Image from "next/image";
import Link from "next/link";
import { DownCircleOutlined } from "@ant-design/icons";
import Background from "../components/Animation";

const Home = () => {
  return (
    <>
      <Background />
      <div className="content-page">
        <div className="home-content">
          <div className="home-content--greeting">
            HI ALL , I&rsquo;M TUM . . .
            <span className="wave-emoji">
              <Image src="/hello.png" alt="👋" width={50} height={50} />
            </span>
            <div>
              NATTHAPON
              <span className="home-content--font-color"> CHUAISENG</span>
            </div>
            <Link href="/about">
              <a className="button-style">
                About Me <DownCircleOutlined />
              </a>
            </Link>
          </div>
          <div className="img-wrapper">
            <Image
              className="img-wrapper--profile"
              src="/profile-home.jpg"
              alt="profile-home"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
