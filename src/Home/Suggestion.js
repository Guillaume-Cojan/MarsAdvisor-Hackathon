function Suggestion({ title, image }) {
  return (
    <div className="suggestion-card">
      <img src={image} alt="" />
      <h1>{title}</h1>
    </div>
  );
}

export default Suggestion;
