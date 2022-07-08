import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <div id="home" />
      <div className="header">
        <div className="header --container">
          <div className="header--logo">
            <Link href="#home">&lt; 🍀 TUM /&gt;</Link>
          </div>
            <ul className={menu ? "menu" : "menu --active"}>
              <li onClick={() => setMenu(!menu)}>
                <Link href="#home">Home</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link href="#about">About</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link href="#skills">Skills</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link href="#education">Education</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link href="#experience">Portfolio</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link href="#certificate">Certificate</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link href="#contact">Contact Me</Link>
              </li>
            </ul>
          <div className="menu-mobile" onClick={() => setMenu(!menu)}>
            {menu ? (
              <div className="hamburger-menu">
                <div className="bar-top"></div>
                <div className="bar-middle"></div>
                <div className="bar-bottom"></div>
              </div>
            ) : (
              <div className="hamburger-menu --active">
                <div className="bar-top"></div>
                <div className="bar-middle"></div>
                <div className="bar-bottom"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
