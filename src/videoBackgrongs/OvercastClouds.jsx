import React from "react";
import overcastclouds from "../assets/overcastClouds.mp4";

const OvercastClouds = () => {
  return (
    <div>
      <video className="videoRain" src={overcastclouds} autoPlay loop muted />
    </div>
  );
};

export default OvercastClouds;
