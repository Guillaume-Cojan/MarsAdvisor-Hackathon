import "./ImageList.css";

import ImageCard from "./ImageCard";

function ImageList({ images, selectedPlanet }) {
  return (

    <div>
      <h3> Explore {selectedPlanet}!</h3>
      <div className="explore-container">
        {images
          .filter((image) => image.explanation.includes(`${selectedPlanet}`))
          .filter((image) => image.media_type === "image")
          .map((image) => (
            <ImageCard key={image.date} {...image} />
          ))}
      </div>
    </div>
  );
}

export default ImageList;
