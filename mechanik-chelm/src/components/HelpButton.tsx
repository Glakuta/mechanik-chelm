"use client";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

const HelpButton = (props: Props) => {
  return (
    <div className="relative z-20 mb-22">
      <a href="tel: +48 572 127 200">
        <button className="flex items-center justify-center p-4 m-auto text-2xl font-bold text-white transition duration-300 ease-in-out delay-150 bg-blue-800 border-4 rounded shadow w-72 border-primary-yellow bg-blue hover:-translate-y-1 hover:scale-110">
          Wezwij Pomoc!
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#ffffff", marginLeft: "10px" }}
          />
        </button>
      </a>
    </div>
  );
};

export default HelpButton;
