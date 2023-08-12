"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/motion";

export function Guarantee() {
  const products = [
    {
      id: 1,
      img: "/assets/icons/leaf_5806342.png",
      title: "Handmade Products",
      desc: "We create healthy artisan loose leaf teas, bath and body products, and infused sugars in small batches to ensure quality and freshness.",
    },
    {
      id: 2,
      img: "/assets/icons/tea-bag_6304881.png",
      title: "Great customer service",
      desc: "Finding companies that genuinely care about their customers is hard these days. We are here for you. We truly care about your health.",
    },
    {
      id: 3,
      img: "/assets/icons/teapot.png",
      title: "Natural Ingredients",
      desc: "We use ingredients made from the earth. Protect yourself and those you love. We don’t use any artificial flavors or preservatives in our tea blends.",
    },
  ];
  return (
    <motion.div
      className="py-12 bg-white"
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show">
      <div className="container mx-auto">
        <div className="flex_center flex-col">
          <img
            src="/assets/leaf_icon.png"
            alt=""
            className="w-[40px] h-[40px]"
          />
          <h1 className="text-3xl font-titles my-3 font-bold">Our Guarantee</h1>
          <h3 className="text-center text-xl font-medium max-w-[700px] mt-3 text-gray-600">
            Integer quis tempor orci. Suspendisse potenti. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </h3>
        </div>
        <motion.div
          className="products_grid mt-12"
          variants={staggerContainer(1, 2)}>
          {products.map((item) => {
            return (
              <motion.div
                key={item.id}
                className="flex_center flex-col"
                variants={fadeIn("left", "tween", 1, 1)}>
                <img src={item.img} alt="" className="mb-2 w-[80px] h-[80px]" />
                <div>
                  <h3 className="text-title font-bold text-3xl my-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-md">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
