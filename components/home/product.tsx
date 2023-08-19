"use client";

import React from "react";
import { motion } from "framer-motion";
import { bottleVariants, staggerContainer, textAnimation } from "@/motion";

export function Products() {
  return (
    <motion.div
      className="bg-[#f1cba6] py-12 overflow-hidden"
      variants={staggerContainer()}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show">
      <div className="container mx-auto flex md:flex-row flex-col">
        <div className="flex justify-center flex-col text-left">
          <motion.h6
            className="text-secondary text-2xl font-titles font-extrabold text-left"
            variants={textAnimation()}>
            TAC Uncompromising Tea Quality
          </motion.h6>
          <motion.h3
            className="text-5xl text-primary font-extrabold mt-1 mb-6 text-left"
            variants={textAnimation()}>
            Unveiling a World of Flavor
          </motion.h3>
          <motion.h5
            className="text-md max-w-[600px] text-lg font-medium"
            variants={textAnimation()}>
            Discover an exquisite collection of tea packages from TAC, where
            quality meets taste. Indulge in a sensory journey through our
            thoughtfully curated tea selections, each package a testament to our
            commitment to delivering the finest tea experience.
          </motion.h5>
        </div>
        <motion.div className="relative" variants={bottleVariants("bottom")}>
          <motion.div
            initial={{ scale: 1 }} // Initial scale value
            className="absolute bottom-0"
            animate={{
              scale: [1, 1.2, 1.3, 1.4, 1.3, 1.2], // Animation keyframes
              transition: { duration: 10, repeat: Infinity }, // Animation properties
            }}>
            <img src="/assets/leaves.webp" alt="" className="" />
          </motion.div>
          <img
            src="/assets/tac_product.png"
            alt=""
            className="w-[700px] h-[800]"
          />
          <motion.div
            className="absolute top-12 -z-10"
            animate={{
              x: [400, 450, 500, 450, 400], // Animation values for the x-axis
              rotate: [35, 30, 33],
            }}
            transition={{
              repeat: Infinity, // Make the animation repeat infinitely
              duration: 4, // Duration of each animation cycle (in seconds)
              ease: "easeInOut", // Easing function applied to each animation cycle
              type: "tween",
            }}>
            <img src="/assets/leaves.png" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
