import React from "react";
import Image from "next/image";
import HelpButton from "@/components/HelpButton";

type Props = {};

const AssistanceHero = (props: Props) => {
  return (
    <section>
      <Image
        src="https://elektromechanik-chelm.s3.eu-north-1.amazonaws.com/Laweta-Che%C5%82m.jpg"
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
