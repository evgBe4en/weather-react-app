import React, { memo, useContext, useEffect } from "react";
import { useWeather } from "../hooks/useWeather";
import { GlobalContext } from "../App";
import { Link, matchPath, useLocation } from "react-router-dom";
import VidBgClearSky from "../videoBackgrongs/VidBgClearSky";
import OvercastClouds from "../videoBackgrongs/OvercastClouds";
import VidBgClouds from "../videoBackgrongs/VidBgClouds";
import VidBgRain from "../videoBackgrongs/VidBgRain";

const Card = memo(({ city, setCityCoord }) => {
  const data = useWeather(city);

  const { pathname } = useLocation();
  let isHome = Boolean(matchPath("/*", pathname));
  let isCity = Boolean(matchPath("/city/*", pathname));
  console.log("isCity", isCity);
  console.log("isHome", isHome);
  if (isCity) {
    isHome = false;
  }

  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (data && data.coord.lat && data.coord.lon && setCityCoord) {
      setCityCoord({
        lat: data.coord.lat,
        lon: data.coord.lon,
      });
    }
  }, [data, setCityCoord]);

  const handleOnDelete = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({
      type: "DELETE_CITY",
      payload: city,
    });
  };

  const handleOnEdit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({
      type: "EDIT_CITY",
      payload: city,
    });
  };

  const handleOnLinkClick = () => {
    dispatch({
      type: "EDIT_CITY_DONE",
      payload: city,
    });
  };

  if (!data) return null;
  const { name, weather, main, wind, sys } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;
  const { speed } = wind;
  const { sunrise, sunset } = sys;

  const newSunrise = new Date(sunrise * 1000);
  const needSunrise = newSunrise.toString().split(" ")[4];

  const newSunset = new Date(sunset * 1000);
  const needSunset = newSunset.toString().split(" ")[4];

  const time = Date.now();
  const newTime = new Date(time).toString().split(" ").slice(0, 4).join(" ");

  let isClearSky = false;
  let isOvercastClouds = false;
  let isDefaulClouds = false;
  let isRain = false;
  let isMain = false;
  if (description === "clear sky") {
    isClearSky = true;
  } else if (
    description === "overcast clouds" ||
    description === "few clouds"
  ) {
    isOvercastClouds = true;
  } else if (description === "scattered clouds") {
    isDefaulClouds = true;
  } else if (description === "broken clouds") {
    isDefaulClouds = true;
  } else if (description === "light rain" || description === "rain") {
    isRain = true;
  }

  if (isHome) {
    return (
      <Link
        to={`/city/${city.toLowerCase()}`}
        className="card styleCard hoverCard"
      >
        <div className="actionDelete">
          <img
            className="editCity"
            onClick={handleOnEdit}
            alt=":("
            src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"
          />
          <img
            className="deleteCity"
            onClick={handleOnDelete}
            alt=":("
            src="https://img.icons8.com/material-sharp/24/000000/trash.png"
          />
        </div>
        <div className="mainInfo">
          <img
            className="iconCard"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon"
          />
          <div className="titleCard">{name}</div>
          <div className="discriptionCard">{description}</div>
          <div className="tempCard">{temp.toFixed()}</div>
        </div>
        <div className="info">
          <div>Humidity: {humidity.toFixed() + "%"}</div>
          <div>Feels like: {feels_like.toFixed() + "°"}</div>
        </div>
      </Link>
    );
  }

  if (isCity) {
    return (
      <>
        {(isOvercastClouds && <OvercastClouds />) ||
          (isClearSky && <VidBgClearSky />) ||
          (isDefaulClouds && <VidBgClouds />) ||
          (isRain && <VidBgRain />)}

        <div
          to={`/city/${city.toLowerCase()}`}
          className="cardSingle styleCard"
          onClick={handleOnLinkClick}
        >
          <div className="mainInfoSingle">
            <div className="prevInfoSingle">
              <div>{newTime}</div>
              <div className="prevInfoSingleWithIcon">
                <div>{temp.toFixed() + "°"}</div>
                <img
                  className="iconCardSingle"
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="icon"
                />
              </div>
            </div>
            <div className="titleCardSingle">{name}</div>
            <div className="descriptionCardSingle">{description}</div>
            <div className="infoSingle">
              <div className="infoSingleElement">
                <img
                  className="infoImg"
                  src="https://img.icons8.com/cotton/64/000000/wind--v1.png"
                  alt="#"
                />{" "}
                {speed}
              </div>
              <div className="infoSingleElement">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/sunrise.png"
                  alt="#"
                />{" "}
                {needSunrise.split(":").slice(0, 2).join(":")}
              </div>
              <div className="infoSingleElement">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/sunset.png"
                  alt="#"
                />{" "}
                {needSunset.split(":").slice(0, 2).join(":")}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div to={`/city/${city.toLowerCase()}`} className="card">
      <div className="actionDelete">
        <img
          className="editCity"
          onClick={handleOnEdit}
          alt=":("
          src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"
        />
        <img
          className="deleteCity"
          onClick={handleOnDelete}
          alt=":("
          src="https://img.icons8.com/material-sharp/24/000000/trash.png"
        />
      </div>
      <div className="mainInfo">
        <img
          className="iconCard"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <div className="titleCard">{name}</div>
        <div className="discriptionCard">{description}</div>
        <div className="tempCard">{temp.toFixed()}</div>
      </div>
      <div className="info">
        <div>Humidity: {humidity.toFixed() + "%"}</div>
        <div>Feels like: {feels_like.toFixed() + "°"}</div>
      </div>
    </div>
  );
});

export default Card;
