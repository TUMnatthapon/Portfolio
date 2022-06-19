import Link from "next/link";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
        <div className="header">
          <div className="header --container">
            <div className="header--logo">
              <Link href="/home">🍀 PORTFOLIO</Link>
            </div>
            <ul className={menu ? "menu --active" : "menu"} >
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

                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="menu-mobile" onClick={() => setMenu(!menu)}>
              {menu ? <CloseOutlined /> : <MenuOutlined />}
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;
