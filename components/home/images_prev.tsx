import Image from "next/image";
import React from "react";

const images = [
  {
    id: 1,
    title: "Tea",
    img: "/assets/images/pref/pref1.jpg",
    description: "Fresh & Soul Satiating",
  },
  {
    id: 2,
    title: "Gifts",
    img: "/assets/images/pref/pref3.jpg",
    description: "Give the Gift of Wellness",
  },
  {
    id: 3,
    title: "Brew Ware",
    img: "/assets/images/pref/pref2.jpg",
    description: "Drink Easy, Drink Right",
  },
];

function ImagesPrev() {
  return (
    <div className="px-[12px]">
      <div className="images_grid">
        {images.map((item) => {
          return (
            <div
              key={item.id}
              className="overflow-hidden relative image_overlay">
              <div className="image_overlay">
                <img
                  alt=""
                  src={item.img}
                  className="hover:scale-150 hover:rotate-5 object-cover  w-full max-h-[600px] h-full transition  rounded-md"
                />
              </div>
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <h1 className="text-5xl font-extrabold font-titles text-title">
                  {item.title}
                </h1>
                <h3 className="text-white mt-2 text-center">
                  {item.description}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImagesPrev;
