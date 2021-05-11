import ImageCard from "./ImageCard";

function ImageList({ images }) {
  return (
    <div>
      {images.map((image) => (
        <ImageCard key={image.date} url={image.url} />
      ))}
    </div>
  );
}

export default ImageList;
