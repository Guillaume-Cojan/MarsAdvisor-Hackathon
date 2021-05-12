import "./ImageList.css";
import { Link } from "react-router-dom";

function ImageCard({ date, url, image }) {
  return (
    <div className="image-cardcontainer">
      <Link to={`/${date}`} {...image}>
        <img className="image-card" src={url} alt="planet image" />
      </Link>
    </div>
  );
}

export default ImageCard;
