import "./ImageList.css";
import { Link } from "react-router-dom";

function ImageCard({ date, url, image }) {
  return (
    <div className="explore-card">
      <Link to={`/${date}`} {...image}>
        <img src={url} alt="planet image" />
      </Link>
    </div>
  );
}

export default ImageCard;
