import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../utils/navlinks";
import { socialIcons } from "../utils/social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterComponent() {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 text-center">
              <div className="to-touch">
                <div className="bg-footer" id="headmove-3">
                  <div data-depth="0.2" className="img-line">
                    <img src="/images/common/lines.svg" alt="" />
                  </div>
                </div>
                <h2>GET IN TOUCH WITH US !</h2>
                <div
                  className="button_su mt-10"
                  onMouseEnter={() => setMouseEnter(true)}
                  onMouseLeave={() => setMouseEnter(false)}
                >
                  <span
                    className={`su_button_circle ${
                      mouseEnter ? "explode-circle" : "disploade-circle"
                    }`}
                  >
                    {" "}
                  </span>
                  <a
                    href="contact.html"
                    className="button_su_inner load-halvor"
                  >
                    <span className="button_text_container"> GET STARTED </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-12 text-center mt-40">
              <div className="nav-footer">
                <ul>
                  {Object.keys(navLinks).map((item) => (
                    <li key={navLinks[item].id}>
                      <Link href={navLinks[item].link}>
                        <a>{navLinks[item].name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-6 text-center text-md-right mt-30">
              <div className="copy">
                <p>Copyright © 2018 Embright. All Rights Reserved.</p>
              </div>
            </div>

            <div className="col-md-6 text-center text-md-left mt-30">
              <div className="social-footer">
                <ul>
                  {Object.keys(socialIcons).map((item) => (
                    <li key={socialIcons[item].id}>
                      <a href={socialIcons[item].link}>
                        <FontAwesomeIcon
                          className="fab icons"
                          icon={socialIcons[item].icon}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
