import Image from "next/image";
const Home = () => {
  return (
    <>
      <div className="content-page">
        <div className="home-content">
          <div className="home-content--greeting">
            HI ALL , I&rsquo;M TUM . . .
            <span className="wave-emoji">
              <Image src="/hello.png" alt="👋" width={50} height={50} />
            </span>
            <div>
              NATTHAPON <span className="home-content--font-color"> CHUAISENG</span>
            </div>
            <button>About Me !</button>
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
