import React, { useEffect, useState } from "react";

function Countdown() {
    const calculateTimeLeft = () => {
        let year = +2029;
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
        <>
            <div className="countdown-desktop">
                <div className="countdown-desktop-1">
                    <img
                        className="countdown-img"
                        src="https://cdn.pixabay.com/photo/2012/04/10/17/23/spaceship-26556_960_720.png"
                        alt="spaceship"
                    />
                    <div className="table">
                        <table className="countdown-info">
                            <tr>
                                <th className="th">Next departure from:</th>
                                <th>Destination to:</th>
                                <th>Spaceship type:</th>
                                <th>Airline:</th>
                            </tr>
                            <tr>
                                <td>Mars</td>
                                <td>Earth</td>
                                <td>ERO (Earth Return Orbiter)</td>
                                <td>NASA (Operated by Space X)</td>
                            </tr>
                        </table>
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
            <div className="countdown-mobile">
                <div className="countdown-mobile-1">
                    <img
                        className="countdown-img"
                        src="https://cdn.pixabay.com/photo/2012/04/10/17/23/spaceship-26556_960_720.png"
                        alt="spaceship"
                    />
                    <div className="table">
                        <div className="countdown-info">
                            <div className="table-mobile">
                                <div className="table-item">
                                    <h2 className="h2-mobile">
                                        Next departure from:
                                    </h2>
                                    <p className="p-mobile">Mars</p>
                                </div>
                                <div className="table-item">
                                    <h2 className="h2-mobile">
                                        Destination to:
                                    </h2>
                                    <p className="p-mobile">Earth</p>
                                </div>
                                <div className="table-item">
                                    <h2 className="h2-mobile">
                                        Spaceship type:
                                    </h2>
                                    <p className="p-mobile">
                                        Earth Return Orbiter
                                    </p>
                                </div>
                                <div className="table-item">
                                    <h2 className="h2-mobile">Airline:</h2>
                                    <p className="p-mobile">
                                        NASA (Operated Space X)
                                    </p>
                                </div>
                            </div>
                        </div>
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
        </>
    );
}

export default Countdown;
