import React from 'react'
import Image from 'next/image' 
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}

const ElektromechanikAbout  = (props: Props) => {
  return (
    <section className='flex flex-col items-center justify-center m-10'>
        <div className='flex flex-col items-start justify-between md:flex-row'>
        <div>
          <Image src={"https://mechanik-chelm.s3.eu-central-1.amazonaws.com/c-joyful-heFTscwGDCA-unsplash.jpg"} height={500} width={500} alt='Naprawa elektroniki samochodowej' className='rounded-sm' />
        </div>
        <div className='max-w-lg '>
            <h3 className='gap-4 m-10 mt-48 mb-20 text-3xl font-bold tracking-wide text-center text-gray-700 max-w font-OpenSans'>Autoelektronika Uzarek - Chełm</h3>
            <p className='max-w-2xl m-10 font-light text-left text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, quis! Veniam, ex aspernatur? Reprehenderit blanditiis earum, iure distinctio, dolorum soluta molestiae, perferendis natus autem architecto cum?</p>
            <p className='max-w-2xl m-10 font-light text-left text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, quis! Veniam, ex aspernatur? Reprehenderit blanditiis earum, iure distinctio, dolorum soluta molestiae, perferendis natus autem architecto cum?</p>
            <p className='max-w-2xl m-10 font-light text-left text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, quis! Veniam, ex aspernatur? Reprehenderit blanditiis earum, iure distinctio, dolorum soluta molestiae, perferendis natus autem architecto cum?</p>
        </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='gap-4 m-10 mt-48 mb-20 text-3xl font-bold tracking-wide text-center text-gray-700 max-w font-OpenSans'>Oferta elektromechanik</h3>
          <p className='m-10 font-light text-center text-gray-500'>Wybierając naszą firmę mają Państwo pewność, że otrzymają usługi na najwyższym poziomie w konkurencyjnej cenie i zawsze na czas! Zachęcamy do zapoznania się z naszą ofertą.</p>
          <div className=''>
            <h5 className='gap-4 font-bold tracking-wide text-center text-gray-700 text-md md:text-xl max-w font-OpenSans'>Diagnostyka komputerowa i elektronika</h5>
            <div className='flex flex-col items-center justify-center md:flex-row'>
              <div className='max-w-md'>
                <ul className='mt-5'>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Polecamy diagnostykę komputerową wszystkich marek z rynku europejskiego, azjatyckiego i amerykańskiego – specjalizacja: grupa VW AUDI, Opel, Renault, PSA</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Odczyt i kasowanie usterek</li>
                </ul>
              </div>
              <div>
                <ul className='mt-5'>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Regulacje i adaptacje</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Naprawa i diagnostyka elektroniki</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Układy wtryskowe benzyny i diesla, abs, air-bag, układy komfortu itp.</li>
                </ul>
                
              </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-16 md:flex-row'>
            <h5 className='gap-4 font-bold tracking-wide text-left text-gray-700 text-md md:text-xl max-w font-OpenSans'>Elektryka samochodowa</h5>
              <div>
                <ul className='mt-5'>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Naprawa instalacji</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Naprawa oświetlenia</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Adaptacje oświetlenia samochodów z rynku amerykańskiego na EU</li>
                </ul>
              </div>
              <div>
                <ul className='mt-5'>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Pomiar zdolności rozruchowej akumulatorów</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Pomiary oscyloskopowe</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Pomiar Napięcia</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Pomar ciągłości obwodu</li>
                </ul>
                
              </div>
              <div>
                <ul className='mt-5'>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Lokalizacja przerw w obwodach</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Lokalizacja i naprawa usterek</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Naprawa rozruszników</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> naprawa alternatorów</li>
                </ul>
                
              </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-16 md:flex-row'>
            <h5 className='gap-4 font-bold tracking-wide text-center text-gray-700 text-md md:text-xl max-w font-OpenSans'>Car security</h5>
              <div>
                <ul className='mt-5'>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Blokady złącza diagnostycznego OBD</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Blokady skrzyń biegów</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Sterowniki radiowe centralnego zamka</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Centralne zamki</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Szyby elektryczne</li>
                </ul>
              </div>
              <div>
                <ul className='mt-5'>
                <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} />Domykanie szyb</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Światła dzienne LED</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Dodatkowe oświetlenie wnętrza LED</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Inne do uzgodnienia</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Czujniki parkowania montaż naprawa diagnostyka</li>
                </ul>
                
              </div>
              <div>
                <ul className='mt-5'>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} />Kamery cofania</li>
                  <li><FontAwesomeIcon icon={faCheck} style={{color: "#1e69b8", width:"21px", height:"21px"}} /> Blokady zapłonu </li>
                 
                </ul>
                
              </div>
            </div>
          </div>
          
        </div>
    </section>
  )
}

export default ElektromechanikAbout 