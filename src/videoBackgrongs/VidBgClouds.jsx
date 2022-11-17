import React from "react";
import defaultClouds from "../assets/defaultClouds.mp4";

const VidBgClouds = () => {
  return (
    <div>
      <video className="videoRain" src={defaultClouds} autoPlay loop muted />
    </div>
  );
};

export default VidBgClouds;
