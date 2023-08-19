import React from "react";

function AboutComponent() {
  return (
    <div className="h-[700px]">
      <div className="relative">
        <img
          src="/assets/tea_bg.jpg"
          alt=""
          className="w-full h-[700px] object-cover absolute -z-30"
        />
        {/* orange overlay */}
        <div className="left-[50%] translate-x-[-50%] absolute inset-0 bg-black bg-opacity-60 w-[100vw] h-[700px] flex px-3 justify-center items-center">
          <h1 className="text-xl md:text-3xl text-white font-serif font-bold max-w-[900px] leading-loose text-start">
            Tac Tea, a renowned tea company, specializes in crafting exquisite
            blends that tantalize taste buds and soothe the senses. With a
            commitment to quality, they source the finest tea leaves from around
            the world, ensuring a rich and aromatic experience with every sip.
            From traditional classics to innovative flavors, Tac Tea offers a
            diverse range of teas that cater to all palates. Elevate your tea
            journey with Tac Tea is exceptional brews, where tradition meets
            innovation in every cup.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
