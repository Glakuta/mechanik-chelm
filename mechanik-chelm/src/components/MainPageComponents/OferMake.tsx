import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const OferMake = (props: Props) => {
  return (
    <section className='flex flex-col bg-gray-200 md:flex-row'>
        <div className='m-16'>
            <Image src='https://mechanik-chelm.s3.eu-central-1.amazonaws.com/kate-ibragimova-iFQpqbLMOFU-unsplash.jpg'
             alt='Nasza oferta' height={500} width={500} className='rounded-sm shadow-2xl'/>
        </div>
        <div className='flex flex-col items-center justify-start ml-10 divide-x-2'>
            <h3 className='mt-32 text-3xl font-semibold text-center text-gray-500 font-OpenSans'>
                Serwisowanie Aut
            </h3>
            <hr
        style={{
          background: 'blue',
          color: '1E40AF',
          borderColor: 'blue',
          height: '3px',
          width: '300px',
          marginTop: '50px',
          marginBottom: '50px'
        }}
      />
      <p className='max-w-lg mt-4'>Proponujemhy Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae blanditiis quae laboriosam. Eaque culpa neque consectetur nostrum,
         cupiditate eum laboriosam quaerat eos voluptatum amet mollitia nemo debitis recusandae? Aut, facere.</p>

         <div className='flex flex-col items-start justify-between mt-12 md:flex-row'>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />General Motors</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Mercedes-Benz</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Audi</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />BMW</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Renault</li>
          </ul>
          <ul className='ml-16 mr-16'>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Mazda</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Citroen</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Nissan</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Mitsubishi</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Saab</li>
          </ul>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Land Rover</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Porsche</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Hyundai</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />Peugot</li>
            <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21x", height:"21px"}} />I wiele innych</li>
          </ul>

         </div>
            
        </div>
    </section>
  )
}

export default OferMake