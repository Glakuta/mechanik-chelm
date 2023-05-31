import React from 'react'
import Image from 'next/image'
import HelpButton from '../HelpButton'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className='flex flex-col items-center justify-center p-48 bg-blue-400'>
        <Image src='https://mechanik-chelm.s3.eu-central-1.amazonaws.com/laurel-and-michael-evans-c-KDq7nxVdQ-unsplash.jpg' alt='Elektromechanik-Chełm' fill className='relative z-10' />
        <h1 className='relative z-20 mb-24 text-lg font-extrabold text-white md:text-3xl whitespace-nowrap font-OpenSans'>Pomoc Drogowa Chełm - Uzarek</h1>
        <HelpButton />
        <h5 className='relative z-20 mt-12 text-white whitespace-nowrap '>Laweta, autoserwis, elektromechanik - Uzarek</h5>
    </section>
  )
}

export default HeroSection