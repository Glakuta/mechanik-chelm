import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <section className="relative z-20 flex flex-row items-center justify-between w-full p-4 bg-gray-200">
      <div className="flex flex-row md:ml-12">
        <div className="flex flex-row m-auto font-size-sm whitespace-nowrap">
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#a4aab3" }}
            className="w-4 h-4 m-auto rounded-full hover:bg-slate-100"
          />
          <p className="ml-2 text-xs font-semibold text-gray-500 font-OpenSans">
            +48 572 127 200
          </p>
        </div>
        <div className="flex flex-row m-auto font-size-sm whitespace-nowrap">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#a4aab3" }}
            className="w-4 h-4 mt-auto mb-auto ml-4 hover:bg-slate-100"
          />
          <p className="ml-2 text-xs font-semibold text-gray-500 font-OpenSans">
            elektromechanikuzarek@kontakt.pl
          </p>
        </div>
        <div className="flex flex-row m-auto font-size-sm whitespace-nowrap">
          <FontAwesomeIcon
            icon={faClock}
            style={{ color: "#a4aab3" }}
            className="w-4 h-4 mt-auto mb-auto ml-4 hover:bg-slate-100"
          />
          <p className="ml-2 text-xs font-semibold text-gray-500 font-OpenSans">
            Warsztat 9:00 - 17:00, pomoc drogowa 24/7
          </p>
        </div>
      </div>
      <div className="flex flex-row mr-12">
        <a href="https://facebook.com/watch/107065011941237/">
          <FontAwesomeIcon
            icon={faFacebookF}
            style={{ color: "#a4aab3" }}
            className="w-4 h-4 mt-auto mb-auto mr-8 rounded-full cursor-pointer hover:bg-slate-100"
          />
        </a>
        <a href="https://goo.gl/maps/SL4trqzZzGAToP1e6">
          <FontAwesomeIcon
            icon={faGoogle}
            style={{ color: "#a4aab3" }}
            className="w-4 h-4 mt-auto rounded-full cursor-pointer mb-aut hover:bg-slate-100"
          />
        </a>
      </div>
    </section>
  );
};

export default TopBar;
