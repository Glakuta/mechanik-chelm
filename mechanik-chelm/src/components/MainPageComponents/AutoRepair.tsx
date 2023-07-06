import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const AutoRepair = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center m-10 mt-36">
      <h3 className="text-3xl font-semibold text-center text-gray-500 font-OpenSans">
        Diagnoza, naprawa elektroniki, wymiana świateł, car security - dowiedz
        się więcej o ofercie Warsztatu
      </h3>
      <hr
        style={{
          background: "blue",
          color: "1E40AF",
          borderColor: "blue",
          height: "3px",
          width: "100px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      />
      <p className="mt-16 text-gray-500 font-OpenSans">
        Zapraszamy do naszego serwisu, gdzie oferujemy szeroką gamę usług, aby
        zapewnić Ci pełną opiekę nad Twoim pojazdem. Specjalizujemy się w
        obszarach, takich jak elektromechanika, diagnostyka komputerowa, car
        security oraz wiele innych.
      </p>
      <p className="mt-16 text-gray-500 font-OpenSans">
        Zapoznaj się z naszą szeroką ofertą!
      </p>
      <h3 className="mt-12 text-3xl font-semibold text-center text-gray-500 font-OpenSans">
        Usługi napraw aut
      </h3>
      <hr
        style={{
          background: "#1E40AF",
          color: "#1E40AF",
          borderColor: "#1E40AF",
          height: "3px",
          width: "100px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      />
      <div className="flex flex-col items-center justify-start m-10 lg:flex-row">
        <div className="transition duration-300 ease-in-out delay-150 cursor-pointer mt-7 md:mt-0 md:ml-16 hover:-translate-y-1 hover:scale-110">
          <Image
            src={
              "https://elektromechanik-chelm.s3.eu-north-1.amazonaws.com/maxim-hopman-s4d_ESS0ylA-unsplash.jpg"
            }
            alt={"elektromechanik chełm"}
            width={400}
            height={600}
          />
          <div className="flex flex-row items-center justify-between h-16 m-auto bg-gray-100">
            <h4 className="ml-5">Elektronika samochodowa</h4>
            <FontAwesomeIcon icon={faAngleRight} style={{ color: "#1e40af" }} />
          </div>
        </div>
        <div className="transition duration-300 ease-in-out delay-150 cursor-pointer mt-7 md:mt-0 hover:-translate-y-1 hover:scale-110">
          <Image
            src={
              "https://elektromechanik-chelm.s3.eu-north-1.amazonaws.com/Pomoc-Drogowa-Uzarek-24.jpg"
            }
            alt={"wymiana oleju chełm"}
            width={400}
            height={600}
          />
          <div className="flex flex-row items-center justify-between h-16 m-auto bg-gray-100 ">
            <h4 className="ml-5">Pomoc drogowa</h4>
            <FontAwesomeIcon icon={faAngleRight} style={{ color: "#1e40af" }} />
          </div>
        </div>
        <div className="transition duration-300 ease-in-out delay-150 cursor-pointer mt-7 md:mt-0 hover:-translate-y-1 hover:scale-110">
          <Image
            src={
              "https://elektromechanik-chelm.s3.eu-north-1.amazonaws.com/kate-ibragimova-bEGTsOCnHro-unsplash.jpg"
            }
            alt={"wymiana oleju chełm"}
            width={400}
            height={600}
          />
          <div className="flex flex-row items-center justify-between h-16 m-auto bg-gray-100 ">
            <h4 className="ml-5">Diagnostyka pojazdów</h4>
            <FontAwesomeIcon icon={faAngleRight} style={{ color: "#1e40af" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoRepair;
