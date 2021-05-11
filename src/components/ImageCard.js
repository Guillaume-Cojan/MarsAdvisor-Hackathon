import "./ImageList.css";

function ImageCard( { url }) {
    return (
        <div className="images-container">
            <div className="image-container">
                <img src={url} alt="planet image" />
            </div>
        </div>
       
    )
}

export default ImageCard;