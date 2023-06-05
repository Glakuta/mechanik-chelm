import React from "react";
import Image from "next/image";
import HelpButton from "@/components/HelpButton";

type Props = {};

const AssistanceHero = (props: Props) => {
  return (
    <section>
      <Image
        src="https://mechanik-chelm.s3.eu-central-1.amazonaws.com/Pomoc-drogowa-Che%C5%82m.jpg"
        alt="Pomoc Drogowa Chełm"
        fill
        className="relative z-10 object-cover object-center"
      />
      <h1 className="relative z-20 mt-24 mb-24 text-xl font-extrabold text-center text-white md:text-3xl whitespace-nowrap font-OpenSans">
        Pomoc Drogowa Chełm - Uzarek
      </h1>
      <HelpButton />
    </section>
  );
};

export default AssistanceHero;
