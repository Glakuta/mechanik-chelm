"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="relative z-20 flex-row items-center justify-between hidden p-12 md:flex">
        <div>
          <Image
            src="https://assistance-krakow.s3.eu-north-1.amazonaws.com/Logo_Uzarek-usuni%C4%99te.png"
            alt="Assistance Uzarek"
            width={150}
            height={150}
          />
        </div>
        <div>
          <nav className="hidden md:block">
            <ul className="flex flex-row items-center justify-between gap-5">
              <li>
                <Link href={"/"} className="text-gray-400 hover:text-blue-800">
                  WARSZTAT
                </Link>
              </li>
              <li>
                <Link
                  href={"/elektromechanik"}
                  className="text-gray-400 hover:text-blue-800"
                >
                  ELEKTRONIKA SAMOCHODOWA
                </Link>
              </li>

              <li>
                <Link
                  href={"/autolaweta"}
                  className="text-gray-400 hover:text-blue-800"
                >
                  POMOC DROGOWA{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={"/kontakt"}
                  className="text-gray-400 hover:text-blue-800"
                >
                  KONTAKT{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="relative z-30 flex flex-row items-center justify-between p-4 md:hidden">
        <div>
          <Image
            src="https://mechanik-chelm.s3.eu-central-1.amazonaws.com/LogoUzarek__2_-removebg-preview.png"
            alt="Assistance Uzarek"
            width={200}
            height={200}
          />
        </div>
        <div>
          <button
            className="text-gray-400 hover:text-blue-800"
            onClick={handleMenuToggle}
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{
                color: "#95A3A6",
                width: "40px",
                height: "40px",
                textAlign: "end",
              }}
            />
          </button>
        </div>
      </section>

      {isMenuOpen && (
        <section className="relative z-30 p-4 bg-white md:hidden">
          <ul className="flex flex-col items-start justify-center gap-4">
            <li>
              <Link href={"/"} className="text-black hover:text-blue-800">
                WARSZTAT
              </Link>
            </li>
            <li>
              <Link
                href={"/elektromechanik"}
                className="text-black hover:text-blue-800"
              >
                ELEKTROMECHANIK
              </Link>
            </li>
            <li>
              <Link
                href={"/autolaweta"}
                className="text-black hover:text-blue-800"
              >
                POMOC DROGOWA{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/kontakt"}
                className="text-black hover:text-blue-800"
              >
                KONTAKT{" "}
              </Link>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default Navbar;
