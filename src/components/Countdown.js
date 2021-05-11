import DateCountdown from "react-date-countdown-timer";

const Countdown = () => {
    return (
        <div className="countdown-container">
            <img
                src="https://cdn.pixabay.com/photo/2012/04/10/17/23/spaceship-26556_960_720.png"
                alt="space ship"
            />
            <DateCountdown
                dateTo="August 31, 2029 21:30:00 GMT+03:00"
                callback={() => alert("Hello")}
            />
        </div>
    );
};

export default Countdown;
