import React from "react";

const DailyCard = ({ dailyCard }) => {
  const { dt, weather, main } = dailyCard;
  const { description, icon } = weather[0];
  const { temp: day } = main;
  const cardDate = new Date(dt * 1000);
  const nededTime = dailyCard.dt_txt.split(" ")[1];

  return (
    <div>
      {nededTime === "12:00:00" && (
        <div className="dailyCard styleCard">
          <div className="cardDate">{cardDate.toString().split(" ")[0]}</div>
          <img
            className="iconCard"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon"
          />
          <div className="dayInfo">{day.toFixed(0) + "°"}</div>
          <div className="descriptionDayInfo">{description}</div>
        </div>
      )}
    </div>
  );
};

export default DailyCard;
