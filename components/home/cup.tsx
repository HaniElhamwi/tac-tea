"use client";

import { slideIn, staggerContainer } from "@/motion";
import { motion } from "framer-motion";
import React from "react";

function Cup() {
  return (
    <div>
      <motion.div
        className="bg-white py-12"
        variants={staggerContainer()}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="show">
        <div className="mx-auto container flex flex-row h-full items-center">
          <motion.div
            className="flex  flex-col flex-1"
            variants={staggerContainer()}>
            <motion.h3
              className="text-4xl text-primary font-extrabold max-w-[500px] text-start mb-6"
              variants={slideIn("left", "tween", 0.3, 0.4)}>
              Tea sorts presentation and products degustation
            </motion.h3>
            <motion.h5
              className="text-lg font-lg text-gray-600 mb-5 max-w-[600px]"
              variants={slideIn("left", "tween", 0.6, 0.5)}>
              Integer quis tempor orci. Suspendisse potenti. Interdum et
              malesuada fames ac ante ipsum primis in faucibus.
            </motion.h5>
            <button className="py-2 px-3 rounded-xl hover:bg-green-700 bg-green-900 text-white max-w-max transition-all ">
              Get Knowz{" "}
            </button>
          </motion.div>
          <div className="flex-1">
            <motion.img
              src="/assets/wooden-cup.jpg"
              alt=""
              variants={slideIn("right", "tween", 0.6, 0.5)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Cup;
