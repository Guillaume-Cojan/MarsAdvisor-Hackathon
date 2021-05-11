const Image = ({ images, routeProps }) => {
    const foundMatch = images.find(
        (image) => image.date == routeProps.match.params.date
    );

    console.log(foundMatch);
    return (
        <div className="img-component-container">
            <img className="img-hd" src={foundMatch.url} alt="hd picture" />
            <div className="img-details-container">
                <h1 className="img-title">{foundMatch.title}</h1>
                <p className="img-explanation">
                    <p>About this picture: </p>
                    {foundMatch.explanation}
                </p>
                <p className="img-date">Shooting date: {foundMatch.date}</p>
                <p className="img-copyright">
                    Copyright: {foundMatch.copyright}
                </p>
            </div>
        </div>
    );
};

export default Image;
