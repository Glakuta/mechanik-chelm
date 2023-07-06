import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const OferMake = (props: Props) => {
  return (
    <section className="flex flex-col bg-gray-200 md:flex-row">
      <div className="m-16">
        <Image
          src="https://elektromechanik-chelm.s3.eu-north-1.amazonaws.com/kate-ibragimova-iFQpqbLMOFU-unsplash.jpg"
          alt="Nasza oferta"
          height={500}
          width={500}
          className="rounded-sm shadow-2xl"
        />
      </div>
      <div className="flex flex-col items-center justify-start ml-10 divide-x-2">
        <h3 className="mt-32 text-3xl font-semibold text-center text-gray-500 font-OpenSans">
          Serwisowanie Aut
        </h3>
        <hr
          style={{
            background: "blue",
            color: "1E40AF",
            borderColor: "blue",
            height: "3px",
            width: "300px",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        />
        <p className="max-w-lg mt-4 md:text-center">
          W naszym warsztacie obsługujemy szeroką gamę marek samochodów, w tym
          popularne marki europejskie, japońskie, amerykańskie i wiele innych.
          Niezależnie od tego, czy masz problem z silnikiem, układem hamulcowym,
          zawieszeniem czy elektroniką, nasi eksperci zapewnią fachową i
          kompleksową obsługę.
        </p>

        <div className="flex flex-col items-start justify-between mt-12 md:flex-row md:items-start">
          <ul className="mb-4 md:mb-0">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              General Motors
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Mercedes-Benz
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Audi
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              BMW
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Renault
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Mazda
            </li>
          </ul>
          <ul className="mb-4 ml-0 mr-0 md:mb-0 md:ml-12 md:mr-12">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Citroen
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Nissan
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Mitsubishi
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Saab
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Land Rover
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Porsche
            </li>
          </ul>
          <ul className="md:ml-12 ">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Hyundai
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              Peugot
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: "#1e69b8", width: "21px", height: "21px" }}
              />
              I wiele innych
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OferMake;
