import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section className="mt-96">
      <h2 className="gap-4 mb-20 text-3xl font-normal tracking-wide text-center text-gray-700 max-w font-OpenSans">
        Warsztat Samochdowy Uzarek - elektronika samochodowa,
        assistance 24h/7
      </h2>
      <p className="max-w-6xl m-10 font-light text-center text-gray-500">
        Elektromechanik Uzarek to firma specjalizująca się w, elektronice samochodowej i pomocy drogowej. Oferujemy szeroki
        zakres usług dla naszych klientów. Nasz zespół doświadczonych elektroników samochodowych zapewnia profesjonalne naprawy, konserwację i
        diagnozę pojazdów. Zapewniamy również wsparcie w trudnych sytuacjach na
        drodze.
      </p>
      <div className="mt-16">
        <a href="/kontakt">
          <button className="flex items-center justify-center w-56 p-4 m-auto text-2xl font-bold text-white transition duration-300 ease-in-out delay-150 bg-blue-800 border-4 rounded shadow border-primary-yellow hover:-translate-y-1 hover:scale-110">
            Umów się!
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
