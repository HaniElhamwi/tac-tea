"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="absolute top-3 z-50 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mt-0">
          <Image
            src="/assets/logo.png"
            alt=""
            width={200}
            height={200}
            className="md:w-[200px] w-[100px]"
          />
          <div className="flex gap-5">
            <Link
              href="/"
              className={`font-medium ${
                pathname === "/" ? "text-secondary" : "text-gray-200"
              } text-sm  hover:text-secondary cursor-pointer`}>
              Home
            </Link>
            <Link
              href="/products"
              className={`font-medium ${
                pathname === "/products" ? "text-secondary" : "text-gray-200"
              }  text-sm hover:text-secondary transition cursor-pointer `}>
              Products
            </Link>
            <Link
              href="/about"
              className={`font-medium text-sm hover:text-secondary ${
                pathname === "/about" ? "text-secondary" : "text-gray-200"
              } transition cursor-pointer`}>
              About
            </Link>
          </div>

          <div className="text-lg text-white mr-2">EN</div>
        </div>
      </div>
    </div>
  );
}
