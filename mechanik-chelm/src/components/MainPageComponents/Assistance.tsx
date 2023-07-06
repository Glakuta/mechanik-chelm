import React from "react";
import Image from "next/image";
import HelpButton from "../HelpButton";

type Props = {};

const Assistance = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center m-10 mt-36">
      <h3 className="text-3xl font-semibold text-center text-gray-500 font-OpenSans">
        Pomoc Drogowa Chełm
      </h3>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row mt-36">
        <Image
          src="https://elektromechanik-chelm.s3.eu-north-1.amazonaws.com/Pomoc+drogowa+Che%C5%82m-+siedziba.jpg"
          alt="zdjęcie-pomoc-drogowa"
          width={600}
          height={420}
          className="object-cover object-center rounded shadow-2xl"
        />
        <div className="max-w-lg mt-20 mb-10 ml-10">
          <p className="mt-5 mb-10">
            Kiedy Twój samochód nagle odmawia posłuszeństwa na drodze, nie
            musisz się martwić o to, co zrobić dalej. Nasze kompleksowe usługi
            holowania samochodów zostały stworzone specjalnie po to, aby
            zapewnić Ci pełną ochronę i wygodę w razie awarii. Niezależnie od
            tego, czy jesteś na trasie daleko od domu, czy na lokalnej ulicy,
            nasi wykwalifikowani operatorzy i specjalistyczny sprzęt dotrą
            szybko na miejsce, aby zapewnić Ci profesjonalne holowanie do
            wybranego warsztatu lub innego miejsca docelowego. Dzięki temu
            możesz skupić się na rozwiązywaniu problemu, a my zajmiemy się
            resztą.
          </p>
          <HelpButton />
        </div>
      </div>
    </div>
  );
};

export default Assistance;
