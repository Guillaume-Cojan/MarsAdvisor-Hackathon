import "./ImageList.css";
import { Link } from "react-router-dom";

function ImageCard( { url, image }) {
    return (
        <div className="images-container">
            <div className="image-container">
               <Link to={`/:title`} {...image}>
                    <img src={url} alt="planet image" />
               </Link>
            </div>
        </div>
       
    )
}

export default ImageCard;