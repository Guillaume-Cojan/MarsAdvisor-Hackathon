import { useState } from "react";
import ImageCard from "./ImageCard";

function Favorites({ favoritesList }) {
  return (
    <div>
      <div className="title-myfavourites">
        <div className="image-fav">
          {favoritesList.map((card) => {
            <img
              className="explore-img"
              src={card.url}
              image={card.image}
              alt="planet image"
            />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
