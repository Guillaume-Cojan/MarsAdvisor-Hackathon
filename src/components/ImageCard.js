import "./ImageList.css";
import { Link } from "react-router-dom";

function ImageCard({ date, url, image }) {
    return (
        <div className="images-container">
            <div className="image-container">
                <Link to={`/${date}`} {...image}>
                    <img src={url} alt="planet image" />
                </Link>
            </div>
        </div>
    );
}

export default ImageCard;
