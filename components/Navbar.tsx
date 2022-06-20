import Link from "next/link";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="header">
        <div className="header --container">
          <div className="header--logo">
            <Link href="/home">&lt; 🍀 TUM /&gt;</Link>
          </div>
          <ul className={menu ? "menu" : "menu --active"}>
            <li className="menu--link" onClick={() => setMenu(!menu)}>
              <Link href="/home">Home</Link>
            </li>
            <li className="menu--link" onClick={() => setMenu(!menu)}>
              <Link href="/about">About</Link>
            </li>
            <li className="menu--link" onClick={() => setMenu(!menu)}>
              <Link href="/skills">Skills</Link>
            </li>
            <li className="menu--link" onClick={() => setMenu(!menu)}>
              <Link href="/education">Education</Link>
            </li>
            <li className="menu--link" onClick={() => setMenu(!menu)}>
              <Link href="/experience">Experience</Link>
            </li>
            <li className="menu--link" onClick={() => setMenu(!menu)}>
              <Link href="/contact">Contact Me</Link>
            </li>
          </ul>
          <div className="menu-mobile" onClick={() => setMenu(!menu)}>
            {menu ? <MenuOutlined /> : <CloseCircleOutlined />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
