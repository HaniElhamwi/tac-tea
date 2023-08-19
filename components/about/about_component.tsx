import React from "react";

function AboutComponent() {
  return (
    <div className="relative">
      <div>
        <img
          src="/assets/tea_bg.jpg"
          alt=""
          className="w-full h-[700px] object-cover"
        />
        <div className="w-[50%] absolute">
          <h3 className="text-3xl font-bold top-0">About Company</h3>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
