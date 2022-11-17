import React from "react";
import VidBgClear from "../assets/clearSky.mp4";

const VidBgClearSky = () => {
  return (
    <div>
      <video className="videoRain" src={VidBgClear} autoPlay loop muted />
    </div>
  );
};

export default VidBgClearSky;
