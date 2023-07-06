import React from "react";
import Image from "next/image";
import HelpButton from "../HelpButton";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <Image
        src="https://elektromechanik-chelm.s3.eu-north-1.amazonaws.com/Assistance24-Che%C5%82m-Siedziba+(2).jpg"
        alt="Elektromechanik-Chełm"
        fill
        className="relative z-10 object-cover object-center"
      />
      <h1 className="relative z-20 mt-12 mb-24 text-lg font-extrabold text-white md:text-3xl whitespace-nowrap font-OpenSans">
        Elektronika samochodowa - Uzarek
      </h1>
      <HelpButton />
      <h5 className="relative z-20 mt-12 text-white whitespace-nowrap ">
        Laweta, autoserwis, elektronika samochodowa - Uzarek
      </h5>
    </section>
  );
};

export default HeroSection;
