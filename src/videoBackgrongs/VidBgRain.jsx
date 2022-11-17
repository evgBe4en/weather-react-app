import React from "react";
import videoBgrRain from "../assets/rain.mp4";

const VidBgRain = () => {
  return (
    <div>
      <video className="videoRain" src={videoBgrRain} autoPlay loop muted />
    </div>
  );
};

export default VidBgRain;
