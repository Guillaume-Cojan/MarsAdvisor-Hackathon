import React, { useEffect, useState } from "react";

function Countdown() {
    const calculateTimeLeft = () => {
        let year = +2026;
        const difference = +new Date(`${year}-08-31`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    return (
        <div className="countdown">
            <img
                className="countdown-img"
                src="https://cdn.pixabay.com/photo/2012/04/10/17/23/spaceship-26556_960_720.png"
                alt="space ship"
            />
            <div className="countdown-info">
                <div className="flight-info">
                    <div className="flight-from">
                        <h3>Next departure from:</h3>
                        <h2>Mars</h2>
                    </div>
                    <div className="flight-to">
                        <h3>Destination to:</h3>
                        <h2>Earth</h2>
                    </div>
                    <div className="flight-ship">
                        <h3>Spaceship type:</h3>
                        <h2>ERO (Earth Return Orbiter)</h2>
                    </div>
                    <div className="flight-airline">
                        <h3>Airline:</h3>
                        <h2>NASA (Operated by Space X)</h2>
                    </div>
                </div>
                <div className="timer">
                    {timerComponents.length ? (
                        timerComponents
                    ) : (
                        <span>Go to Gate!</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Countdown;
