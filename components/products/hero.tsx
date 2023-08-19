import React from "react";

function Hero({ pageName }: { pageName: string }) {
  return (
    <div className="relative">
      <div className="-z-30">
        <img
          src="/assets/products_lan.jpg"
          className="w-full h-[500px] object-cover overlay_image"
          alt=""
        />
      </div>
      <div className="absolute top-[50%] left-[20%] z-50">
        <h3 className="font-extrabold text-white text-4xl">{pageName}</h3>
        <div className="flex flex-row mt-3">
          <span className="text-sm font-bold text-secondary">Home</span>
          <div className="text-sm font-bold text-white mx-2"> {`   >   `}</div>
          <span className="text-sm font-bold text-white">{pageName}</span>
        </div>
      </div>
      <div className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20" />
    </div>
  );
}

export default Hero;
