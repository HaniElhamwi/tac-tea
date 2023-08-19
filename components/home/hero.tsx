"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  teaPots,
  textContainer,
  textVariant,
  textVariant2,
} from "@/motion";

export function Hero() {
  return (
    <motion.div
      className="h-screen flex_center main-bg"
      variants={staggerContainer(0, 0.1)}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show">
      <motion.div
        className="container mx-auto z-10 flex_center flex-col gap-3"
        variants={textContainer}>
        <Image src="/assets/leaf.png" width={140} height={140} alt="" />
        <motion.div
          className="text-center text-white mb-2"
          variants={textVariant(0.2)}>
          HAND MADE TEA SET
        </motion.div>
        <motion.div
          className="font-titles text-center text-8xl font-titles text-secondary"
          variants={textVariant(0.5)}>
          Organic Tea House
        </motion.div>
        <motion.button
          className="text-white border-2 border-secondary border-solid rounded py-3 px-5 text-lg font-medium mt-12"
          variants={textVariant(0.7)}>
          Shop Now
        </motion.button>
        <div className="w-full relative">
          <motion.div
            className="absolute -z-10 w-full max-w-[700px]"
            variants={teaPots()}>
            <img src="/assets/images/tea-kettle-1.png" alt="" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
