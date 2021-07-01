import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import { navLinks } from "../utils/navlinks";

export default function NavbarComponent() {
  const [collapsed, setCollapsed] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);
  const { pathname } = useRouter();

  const handleNavClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Start Navbar */}
      <nav>
        <div className="container">
          <div className={`navbars ${collapsed ? "collapsed" : ""}`}>
            {/* logo */}
            <div className="logo">
              <a className="load-halvor" href="index.html">
                <img src="/images/logo/logo-uncomp.png" alt="" />
              </a>
            </div>

            {/* navbar link */}
            <ul className="links">
              {/* map through the links provided if the current pathname is equal to
                given href then set that link to active state also set the link type to
                the one provided */}
              {Object.keys(navLinks).map((key) =>
                navLinks[key].type == "normal" ? (
                  <li key={navLinks[key].id}
                    className={`normal-link ${
                      pathname === navLinks[key].link ? "active" : ""
                    }`}
                  >
                    <Link href={navLinks[key].link} key={navLinks[key].id}>
                      <a
                        className="load-halvor"
                        data-link={navLinks[key].name}
                        onClick={() => setCollapsed(false)}
                      >
                        {navLinks[key].name}
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li key={navLinks[key].id}>
                    {/* Custom liquid fill animation for the rounded
                      buttom */}
                    <div
                      className="button_su"
                      onMouseEnter={() => setMouseEnter(true)}
                      onMouseLeave={() => setMouseEnter(false)}
                    >
                      <span
                        className={`su_button_circle ${
                          mouseEnter ? "explode-circle" : "disploade-circle"
                        }`}
                      ></span>
                      <Link href={navLinks[key].link}>
                        <a
                          className="button_su_inner load-halvor"
                          onClick={() => setCollapsed(false)}
                        >
                          <span className="button_text_container">
                            {navLinks[key].name}
                          </span>
                        </a>
                      </Link>
                    </div>
                  </li>
                )
              )}
            </ul>

            {/* mobile menu */}
            <div className="toggle" onClick={() => handleNavClick()}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
