"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInAndScale, staggerContainer } from "@/motion";

function ProductsShow() {
  const teaArray = [
    {
      id: 1,
      img: "/assets/tea1.jpg",
      title: "Chamomile Dream",
      desc: "A soothing herbal tea known for its calming properties, perfect for winding down after a long day.",
      price: "$5.99",
    },
    {
      id: 2,
      img: "/assets/tea2.jpg",
      title: "Earl Grey Classic",
      desc: "A timeless black tea infused with bergamot oil, offering a bold and aromatic flavor profile.",
      price: "$4.49",
    },
    {
      id: 3,
      img: "/assets/tea1.jpg",
      title: "Green Jasmine Delight",
      desc: "A fragrant green tea scented with jasmine blossoms, providing a delicate and floral taste experience.",
      price: "$6.25",
    },
    {
      id: 4,
      img: "/assets/tea2.jpg",
      title: "Spiced Chai Fusion",
      desc: "An invigorating blend of black tea and spices like cinnamon, cardamom, and cloves, perfect for chilly mornings.",
      price: "$3.99",
    },
    {
      id: 5,
      img: "/assets/tea1.jpg",
      title: "Peppermint Burst",
      desc: "An herbal infusion featuring peppermint leaves, offering a refreshing and minty flavor that aids digestion.",
      price: "$4.99",
    },
    {
      id: 6,
      img: "/assets/tea2.jpg",
      title: "Oolong Serenity",
      desc: "A semi-oxidized oolong tea with a balanced taste profile that falls between black and green teas.",
      price: "$7.75",
    },
  ];
  return (
    <div>
      <div className="mx-auto container">
        <motion.div
          className="gap-5 images_grid"
          initial="hidden"
          viewport={{ once: true }}
          variants={staggerContainer(1, 1)}
          whileInView="show">
          {teaArray.map((tea) => {
            return (
              <motion.div
                variants={fadeInAndScale("right", "tween", 0.4, 0.6)}
                key={tea.id}
                className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Image src={`${tea.img}`} alt="" width={300} height={300} />
                  <h1 className="text-center  text-secondary font-serif font-bold text-2xl md:text-3xl">
                    {tea.title}
                  </h1>
                  <p className="text-gray-500 max-w-[500px]">{tea.desc}</p>
                  <p className="text-green-500">{tea.price}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default ProductsShow;
