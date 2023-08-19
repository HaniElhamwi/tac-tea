"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/motion";

function Sourced() {
  const content = {
    mainTitle: "SOURCED WITH CARE",
    title: "Sustainability and the Environment",
    desc: "We’re concerned about the use of plastics and are taking action to improve the sustainability of our products and reduce their impact on the environment.",
    features: [
      {
        id: 1,
        title: "100% Organic",
        desc: "Et malesuada fames ac turpis egestas maecenas pharetra convallis met nisl purus.",
      },
      {
        id: 2,
        title: "Always Fresh",
        desc: "Et malesuada fames ac turpis egestas maecenas pharetra convallis met nisl purus.",
      },
    ],
    img: "/assets/tea_field.jpg",
  };
  return (
    <div className="flex flex-col md:flex-row bg-[#f1cba6]">
      <motion.div
        className=" flex-1 flex justify-center py-6 items-center"
        variants={staggerContainer(0, 0.1)}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="show">
        <div className="w-[600px]">
          <motion.h6
            className="text-lg text-title font-title font-bold mb-6"
            variants={textVariant(0.6)}>
            {content.mainTitle}
          </motion.h6>
          <motion.h1
            className="text-3xl font-bold  text-white mt-6 mb-5"
            variants={textVariant(0.8)}>
            {content.title}
          </motion.h1>
          <motion.h3
            className="text-md font-lg text-yellow-900 mt-2 mb-7"
            variants={textVariant(1)}>
            {content.desc}
          </motion.h3>
          <motion.div>
            {content.features.map((feature, index) => {
              return (
                <motion.div
                  key={feature.id}
                  className="mb-6"
                  variants={textVariant(0.8 * (index + 1))}>
                  <h1 className="text-white font-bold">{feature.title}</h1>
                  <h6 className="text-yellow-900">{feature.desc}</h6>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
      <div className="flex-1 relative">
        <img
          src={content.img}
          alt=""
          className="w-full h-full max-h-[600px] overlay_image z-10"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <p className="text-white text-lg"></p>
        </div>
      </div>
    </div>
  );
}

export default Sourced;
