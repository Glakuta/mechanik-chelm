import {
  faCarBattery,
  faOilCan,
  faTruckPickup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiFlatTire, GiTowTruck } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";
import React from "react";

const OurServices = () => {
  return (
    <section className="py-12">
      <h2 className="mt-16 text-3xl font-semibold text-center text-gray-500 font-OpenSans">
        Nasze Usługi
      </h2>
      <div className="flex flex-col items-center justify-around mt-16 md:flex-row">
        <div className="flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-lg">
          <FontAwesomeIcon
            icon={faOilCan}
            style={{ color: "#ffffff", width: "48px", height: "48px" }}
          />
        </div>
        <div className="flex flex-col items-start justify-start w-64 mt-8 ml-4">
          <h5 className="font-bold text-left text-gray-700">Wymiana oleju</h5>
          <p className="mt-2 text-gray-500">
            Nasza usługa wymiany oleju jest idealna dla Twojego samochodu, aby
            zapewnić mu długotrwałą i efektywną pracę
          </p>
        </div>
        <div className="flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-lg">
          <FontAwesomeIcon
            icon={faCarBattery}
            style={{ color: "#ffffff", width: "48px", height: "48px" }}
          />
        </div>
        <div className="flex flex-col items-start justify-start w-64 mt-8 ml-4">
          <h5 className="font-bold text-left text-gray-700">
            Naprawa akumulatorów i elektroniki samochodowej
          </h5>
          <p className="mt-2 text-gray-500">
            Jeśli Twój samochód ma problemy z akumulatorem lub elektroniką,
            jesteśmy tutaj, aby pomóc.
          </p>
        </div>
        <div className="flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-lg">
          <GiTowTruck className="w-12 h-12 text-white" />
        </div>
        <div className="flex flex-col items-start justify-start w-64 mt-8 ml-4">
          <h5 className="font-bold text-left text-gray-700">Pomoc drogowa</h5>
          <p className="mt-2 text-gray-500">
            Kiedy znajdziesz się w kłopotach na drodze, nasza usługa pomocy
            drogowej jest na wyciągnięcie ręki.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around mt-16 md:flex-row">
        <div className="flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-lg">
          <GiFlatTire className="w-12 h-12 text-white" />
        </div>
        <div className="flex flex-col items-start justify-start w-64 mt-8 ml-4">
          <h5 className="font-bold text-left text-gray-700">
            Wymiana kół i opon
          </h5>
          <p className="mt-2 text-gray-500">
            Czy potrzebujesz nowych opon lub chcesz wymienić swoje koła na
            letnie lub zimowe? Wymiana kół w razie wypadku
          </p>
        </div>
        <div className="flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-lg">
          <TbEngine className="w-12 h-12 text-white" />
        </div>
        <div className="flex flex-col items-start justify-start w-64 mt-8 ml-4">
          <h5 className="font-bold text-left text-gray-700">
            Naprawa silników oraz skrzyń biegów
          </h5>
          <p className="mt-2 text-gray-500">
            Jeśli Twój samochód ma problemy z silnikiem lub skrzynią biegów, nie
            martw się - nasi doświadczeni mechanicy są tutaj, aby to naprawić.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
