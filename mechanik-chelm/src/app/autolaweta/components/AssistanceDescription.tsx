import React from "react";
import Image from "next/image";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const AssistanceDescription = (props: Props) => {
  return (
    <section className="m-24">
      <h3 className="mt-48 mb-20 text-3xl font-bold tracking-wide text-center text-gray-700 font-OpenSans">
        Laweta Chełm
      </h3>
      <div className="flex flex-col items-center justify-center gap-24 md:flex-row">
        <Image
          src="https://elektromechanik-chelm.s3.eu-north-1.amazonaws.com/erik-mclean-3uHlGFnzPDU-unsplash.jpg"
          alt="Assistance 24 Chełm"
          width={500}
          height={500}
          className="rounded-md"
        />
        <div className="flex flex-col items-center justify-center ">
          <h4 className="text-lg font-bold tracking-wide text-center text-gray-700 mb-7 font-OpenSans">
            Pomoc drogowa Uzarek oferuje:
          </h4>
          <div>
            <div className="m-10">
              <ul className="max-w-lg m-10">
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#1e69b8", width: "21x", height: "21px" }}
                  />{" "}
                  Holowanie auta po wypadku / kolizji / awarii.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#1e69b8", width: "21x", height: "21px" }}
                  />{" "}
                  Wyciąganie samochodu z rowu, śniegu, błota i innych
                  przypadkach
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#1e69b8", width: "21x", height: "21px" }}
                  />{" "}
                  Holowanie samochodu z uszkodzonym układem jezdnym, urwanymi
                  kołami, zablokowaną skrzynią biegów, zepsutą stacyjką, auto
                  pomoc, itp.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#1e69b8", width: "21x", height: "21px" }}
                  />{" "}
                  Wymiana koła w samochodzie
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#1e69b8", width: "21x", height: "21px" }}
                  />{" "}
                  Dowóz paliwa
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#1e69b8", width: "21x", height: "21px" }}
                  />{" "}
                  Odpalanie z kabli
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#1e69b8", width: "21x", height: "21px" }}
                  />{" "}
                  Assistance pomoc na drodze
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistanceDescription;
