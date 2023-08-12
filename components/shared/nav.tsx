import Image from "next/image";
import React from "react";

export function Nav() {
  return (
    <div className=" absolute  top-12 z-10 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mt-12">
          <Image src="/assets/logo.png" alt="" width={100} height={100} />
          <div className="flex gap-5">
            <a
              href=""
              className="font-medium text-lg text-secondary hover:text-secondary cursor-pointer ">
              Home
            </a>
            <a
              href=""
              className="font-medium text-lg hover:text-secondary transition cursor-pointer text-white">
              Products
            </a>
            <a
              href=""
              className="font-medium text-lg hover:text-secondary transition cursor-pointer text-white">
              About
            </a>
            <a
              href=""
              className="font-medium text-lg hover:text-secondary transition cursor-pointer text-white">
              Contact
            </a>
          </div>

          <div className="text-lg text-white ">EN</div>
        </div>
      </div>
    </div>
  );
}
