'use client'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className='relative z-20 flex-row items-center justify-between hidden p-12 md:flex'>
        <div>
          <h1>"LOGO"</h1>
        </div>
        <div>
          <nav className='hidden md:block'>
            <ul className='flex flex-row items-center justify-between gap-5'>
              <li>
                <Link href={"/"} className='text-gray-400 hover:text-yellow-400'>WARSZTAT</Link>
              </li>
              <li>
                <Link href={"/elektromechanik"} className='text-gray-400 hover:text-yellow-400'>ELEKTROMECHANIK</Link>
              </li>
              <li>
                <Link href={"/uslugi"} className='text-gray-400 hover:text-yellow-400'>USŁUGI</Link>
              </li>
              <li>
                <Link href={"/autolaweta"} className='text-gray-400 hover:text-yellow-400'>POMOC DROGOWA </Link>
              </li>
              <li>
                <Link href={"/kontakt"} className='text-gray-400 hover:text-yellow-400'>KONTAKT </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className='relative z-30 flex flex-row items-center justify-between p-4 md:hidden'>
        <div>
          <h1>"LOGO"</h1>
        </div>
        <div>
          <button className='text-gray-400 hover:text-yellow-400' onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} style={{color: "white", width: '40px', height:'40px', textAlign: "end"}} />
          </button>
        </div>
      </section>

      {isMenuOpen && (
        <section className='relative z-30 p-4 bg-white md:hidden'>
          <ul className='flex flex-col items-start justify-center gap-4'>
            <li>
              <Link href={"/"} className='text-gray-400 hover:text-yellow-400'>WARSZTAT</Link>
            </li>
            <li>
              <Link href={"/elektromechanik"} className='text-gray-400 hover:text-yellow-400'>ELEKTROMECHANIK</Link>
            </li>
            <li>
              <Link href={"/uslugi"} className='text-gray-400 hover:text-yellow-400'>USŁUGI</Link>
            </li>
            <li>
              <Link href={"/autolaweta"} className='text-gray-400 hover:text-yellow-400'>POMOC DROGOWA </Link>
            </li>
            <li>
              <Link href={"/kontakt"} className='text-gray-400 hover:text-yellow-400'>KONTAKT </Link>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}

export default Navbar