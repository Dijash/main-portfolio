import React from "react";
import particles from "react-tsparticles";
import particleConfig from "./config/particleconfig";
const particle = () => {
  return (
    <div>
      <particles params={particleConfig}></particles>
    </div>
  );
};

export default particle;
