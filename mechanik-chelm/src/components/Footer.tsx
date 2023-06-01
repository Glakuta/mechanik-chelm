import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faLocationDot,
  faMap,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col items-center md:items-start justify-start md:justify-between w-full text-white font-OpenSans bg-gray-700 md:flex-row p-[200px]">
      <div className="flex flex-col items-start justify-center mt-10 md:mt-0 md:mr-8">
        <p>Logo</p>
        <p className="mt-10 text-sm font-light font-OpenSans text-gray-50">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="flex flex-row mt-10">
          <div className="flex items-center justify-center w-12 h-12 mr-5 transition duration-300 ease-in-out delay-150 bg-gray-400 rounded-full cursor-pointer hover:-translate-y-1 hover:scale-110">
            <a href="">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  color: "#ffffff",
                  width: "32px",
                  height: "32px",
                  margin: "auto",
                }}
              />
            </a>
          </div>
          <div className="flex items-center justify-center w-12 h-12 transition duration-300 ease-in-out delay-150 bg-gray-400 rounded-full cursor-pointer hover:-translate-y-1 hover:scale-110">
            <a href="">
              <FontAwesomeIcon
                icon={faMap}
                style={{
                  color: "#ffffff",
                  width: "32px",
                  height: "32px",
                  margin: "auto",
                }}
              />
            </a>
          </div>
          <div className="flex items-center justify-center w-12 h-12 ml-5 transition duration-300 ease-in-out delay-150 bg-gray-400 rounded-full cursor-pointer hover:-translate-y-1 hover:scale-110">
            <a href="">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{
                  color: "#ffffff",
                  width: "32px",
                  height: "32px",
                  margin: "auto",
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:mr-8">
        <h4 className="text-lg font-bold">Usługi</h4>
        <ul className="md:mt-5">
          <li className="text-base whitespace-nowrap">
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                color: "#ffffff",
                width: "21x",
                height: "21px",
                marginRight: "10px",
              }}
            />
            Usługi Eelektromechanika
          </li>
          <li className="text-base">
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                color: "#ffffff",
                width: "21x",
                height: "21px",
                marginRight: "10px",
              }}
            />
            Wymiana oleju
          </li>
          <li className="text-base">
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                color: "#ffffff",
                width: "21x",
                height: "21px",
                marginRight: "10px",
              }}
            />
            Diagnostyka pojazdu
          </li>
          <li className="text-base whitespace-nowrap">
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                color: "#ffffff",
                width: "21x",
                height: "21px",
                marginRight: "10px",
              }}
            />
            Naprawy silnika i skrzyń biegów
          </li>
          <li className="text-base whitespace-nowrap">
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                color: "#ffffff",
                width: "21x",
                height: "21px",
                marginRight: "10px",
              }}
            />
            Wymiana zawieszenia
          </li>
        </ul>
      </div>
      <div className="mt-10 md:mt-0 md:ml-5">
        <h4 className="text-lg font-bold">Informacje kontaktowe</h4>
        <ul className="mt-5">
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ffffff", marginRight: "13px" }}
            />
            ul. Włodawska 4 <br />
            22-100 Chełm
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#ffffff", marginRight: "13px" }}
            />
            +48 572 127 200
          </li>
          <li className="whitespace-nowrap">
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ color: "#ffffff", marginRight: "13px" }}
            />
            kontakt@elektromechanik-uzarek.pl
          </li>
        </ul>
      </div>
      <div className="mt-10 md:mt-0 md:ml-5">
        <h4 className="text-lg font-bold">Godziny otwarcia</h4>
        <p className="whitespace-nowrap">
          Od poniedziałku do piątku
          <br />
          9.00 - 17.00
        </p>
      </div>
    </div>
  );
};

export default Footer;
