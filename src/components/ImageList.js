import "./ImageList.css";

import ImageCard from "./ImageCard";

function ImageList({ images }) {
  return (
    <div>
      <h3> Explore the Earth!</h3>
      <div className="ImageList-container">
        {images.map((image) => (
          <ImageCard key={image.date} url={image.url} />
        ))}
      </div>
    </div>
  );
}

export default ImageList;
