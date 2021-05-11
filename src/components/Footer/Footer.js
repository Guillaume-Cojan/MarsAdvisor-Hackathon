import "../Footer/Footer.css";
import { Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="main-footer">
      <hr />
      <h10 className="title-footer">MarsAdvisor</h10>

      <div className="icons">
        <a target="_blank" href="https://www.linkedin.com/">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="icons-footer"
          />
        </a>
        <a target="_blank" href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className="icons-footer"
          />
        </a>
        <a target="_blank" href="https://it-it.facebook.com" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className="icons-footer"
          />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=y5niGi4k9vQ"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "youtube"]} className="icons-footer" />
        </a>
      </div>

      <hr />

      <div>
        <p className="footer">
          &copy;{new Date().getFullYear()} MarsAdvisor | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
