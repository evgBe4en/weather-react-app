import React from "react";

const TempToday = ({ dailyCard }) => {
  const { weather, main, dt_txt } = dailyCard;
  const { icon } = weather[0];
  const { temp: day } = main;

  return (
    <div>
      <div className="tempCardToday">
        <div className="cardDate">
          {dt_txt.split(" ")[1].split(":").slice(0, 2).join(":")}
        </div>
        <img
          className="iconCard"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <div className="dayInfo">{day.toFixed(0) + "°"}</div>
      </div>
    </div>
  );
};

export default TempToday;
