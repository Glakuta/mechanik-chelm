import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const AutoRepair = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center m-10 mt-36">
      <h3 className="text-3xl font-semibold text-center text-gray-500 font-OpenSans">
        Rozrządy, zawieszenia, napełnienie klimatyzacji, diagnostyka
        komputerowa, wymiana oleju oraz naprawy bieżące - dowiedz się więcej o
        ofercie Warsztatu
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem totam
        voluptatibus esse, animi eveniet quos itaque porro aliquid nisi aperiam
        officiis nihil veniam tempore dolor fugiat. Architecto perferendis,
        possimus reprehenderit, provident vero, rem iste corrupti odio eum esse
        eius iusto eos ullam consectetur! At est labore officia hic dolore
        possimus.
      </p>
      <p className="mt-16 text-gray-500 font-OpenSans">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem totam
        voluptatibus ess
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
        <div className="transition duration-300 ease-in-out delay-150 cursor-pointer md:mr-16 mr-md:16 hover:-translate-y-1 hover:scale-110">
          <Image
            src={
              "https://mechanik-chelm.s3.eu-central-1.amazonaws.com/garett-mizunaka-xFjti9rYILo-unsplash.jpg"
            }
            alt={"naprawa silnika chełm"}
            width={400}
            height={600}
          />
          <div className="flex flex-row items-center justify-between h-16 m-auto bg-gray-100">
            <h4 className="ml-5">Naprawa silnika</h4>
            <FontAwesomeIcon icon={faAngleRight} style={{ color: "#1e40af" }} />
          </div>
        </div>
        <div className="transition duration-300 ease-in-out delay-150 cursor-pointer mt-7 md:mt-0 hover:-translate-y-1 hover:scale-110">
          <Image
            src={
              "https://mechanik-chelm.s3.eu-central-1.amazonaws.com/tim-mossholder-V37iTrYZz2E-unsplash.jpg"
            }
            alt={"wymiana oleju chełm"}
            width={400}
            height={600}
          />
          <div className="flex flex-row items-center justify-between h-16 m-auto bg-gray-100 ">
            <h4 className="ml-5">Wymiana oleju</h4>
            <FontAwesomeIcon icon={faAngleRight} style={{ color: "#1e40af" }} />
          </div>
        </div>
        <div className="transition duration-300 ease-in-out delay-150 cursor-pointer mt-7 md:mt-0 md:ml-16 hover:-translate-y-1 hover:scale-110">
          <Image
            src={
              "https://mechanik-chelm.s3.eu-central-1.amazonaws.com/maxim-hopman-s4d_ESS0ylA-unsplash.jpg"
            }
            alt={"elektromechanik chełm"}
            width={400}
            height={600}
          />
          <div className="flex flex-row items-center justify-between h-16 m-auto bg-gray-100">
            <h4 className="ml-5">Elektromechnika</h4>
            <FontAwesomeIcon icon={faAngleRight} style={{ color: "#1e40af" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoRepair;
