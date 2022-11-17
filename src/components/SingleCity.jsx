import React, { useState, useEffect } from "react";
import Card from "./Card";
import DailyCard from "./DailyCard";
import { useParams, Link } from "react-router-dom";
import { useForecast } from "../hooks/useForecast";
import TempToday from "./TempToday";

const SingleCity = () => {
  const [cityCoord, setCityCoord] = useState(null);
  const data = useForecast(cityCoord);
  const { city } = useParams();

  return (
    <div>
      <div className="singleCityWrap">
        <Card city={city} setCityCoord={setCityCoord} />
        <div className="mainWrapperSingle">
          {data && (
            <div>
              <div className="tempTodayWrapper styleCard">
                <div className="tempTodayElement">
                  {data.list
                    .map((dailyCard) => (
                      <TempToday dailyCard={dailyCard} key={dailyCard.dt} />
                    ))
                    .slice(0, 12)}
                </div>
              </div>
              <div className="dailyCards">
                {data.list.map((dailyCard) => (
                  <DailyCard dailyCard={dailyCard} key={dailyCard.dt} />
                ))}
              </div>
            </div>
          )}
          <Link className="goBack" to="/">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCity;
