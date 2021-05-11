const Image = ({ images, routeProps }) => {
    const foundMatch = images.find(
        (image) => image.date == routeProps.match.params.date
    );

    console.log(foundMatch);
    return (
        <div className="img-component-container">
            <img className="img-hd" src={foundMatch.url} alt="hd picture" />
            <h1>{foundMatch.title}</h1>
            <p className="img-explanation">
                about this picture: {foundMatch.explanation}
            </p>
            <p className="img-name">{foundMatch.date}</p>
            <p className="img-copyright">{foundMatch.copyright}</p>
        </div>
    );
};

export default Image;
