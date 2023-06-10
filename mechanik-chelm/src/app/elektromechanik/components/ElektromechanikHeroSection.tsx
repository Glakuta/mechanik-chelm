import React from "react";
import Image from "next/image";

type Props = {};

const ElektromechanikHeroSection = (props: Props) => {
  return (
    <div className="relative z-10 flex flex-col items-start justify-start bg-gray-300 min-h-[500px]">
      <Image
        src="https://mechanik-chelm.s3.eu-central-1.amazonaws.com/maxim-hopman-s4d_ESS0ylA-unsplash.jpg"
        alt="Elektromechanik-Chełm"
        fill
        className="relative z-20 object-cover object-center"
      />
      <div className="relative z-20 md:ml-24 pt-24 md:bg-black h-[500px]">
        <h1 className="relative z-20 mt-24 mb-24 ml-5 text-xl font-extrabold text-white md:mt-0 md:text-3xl whitespace-nowrap font-OpenSans">
          Elektronika samochodowa Uzarek - Chełm
        </h1>
        <p className="relative z-20 max-w-xl ml-5 text-white">
          Diagnostyka i naprawa elektroniki w samochodach osobowych oraz
          dostawczych
        </p>
      </div>
    </div>
  );
};

export default ElektromechanikHeroSection;
