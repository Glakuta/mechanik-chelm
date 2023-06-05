import {
  faLocation,
  faMap,
  faMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="bg-grey-300">
      <h3 className="mt-16 text-3xl font-semibold text-center text-gray-500 font-OpenSans">
        Skontaktuj się z nami
      </h3>
      <div className="flex flex-col items-start justify-between m-10 mt-16 md:flex-row ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-20 h-20 bg-blue-800 rounded-full shadow-2xl">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#ffffff", fontSize: "36px" }}
            />
          </div>
          <h5 className="mt-5 font-bold text-center ">Zadzwoń</h5>
          <div>
            <p className="mt-5 font-bold text-center font-OpenSans">
              +48 48 572-127-200
            </p>
            <p className="mt-5 font-bold text-center font-OpenSans">
              elektromechanik-uzarek@kontakt.pl
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mr-0 md:mr-10">
          <div className="flex items-center justify-center w-20 h-20 bg-blue-800 rounded-full shadow-2xl">
            <FontAwesomeIcon
              icon={faLocation}
              style={{ color: "#ffffff", fontSize: "36px" }}
            />
          </div>
          <p className="mt-5 font-bold font-OpenSans">
            Chełm ul.Włodawska 4<br />
            22-100 Chełm
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mr-0 md:mr-10">
          <div className="flex items-center justify-center w-20 h-20 bg-blue-800 rounded-full shadow-2xl">
            <FontAwesomeIcon
              icon={faMap}
              style={{ color: "#ffffff", fontSize: "36px" }}
            />
          </div>
          <a href="https://goo.gl/maps/MV3ZyJaSBkoVow5n9">
            <h5 className="mt-5 font-bold text-center font-OpenSans">
              Znajdź nas na Google Maps
            </h5>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
