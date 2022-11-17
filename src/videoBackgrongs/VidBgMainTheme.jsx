import React from "react";
import VidBgMain from "../assets/mainTheme.mp4";

const VidBgMainTheme = () => {
  return (
    <div>
      <video className="videoRain" src={VidBgMain} autoPlay loop muted />
    </div>
  );
};

export default VidBgMainTheme;
