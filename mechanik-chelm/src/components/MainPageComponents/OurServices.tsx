import { faCarBattery, faOilCan, faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GiFlatTire, GiTowTruck } from 'react-icons/gi'
import { TbEngine } from 'react-icons/tb' 
import React from 'react'

type Props = {}

const OurServices = (props: Props) => {
  return (
    <section className='m-12'>
        <h2 className='mt-32 text-3xl font-semibold text-center text-gray-500 font-OpenSans'>Nasze Usługi</h2>
        <div  className='flex flex-col items-center justify-around mt-32 md:flex-row'>
            <div className='flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-2xl'>
            <FontAwesomeIcon icon={faOilCan} style={{color: "#ffffff", width: "64px", height:"64px",}} />
            </div>
            <div className='flex flex-col items-start justify-start w-48 mt-16 ml-6'>
                <h5 className='font-bold text-left text-black-500'>Wymiana oleju</h5>
                <p className='mt-3 text-gray-500 w-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eligendi error enim, perferendis tempora aperiam suscipit.</p>
            </div>
            <div className='flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-2xl'>
            <FontAwesomeIcon icon={faCarBattery} style={{color: "#ffffff",  width: "64px", height:"64px"}} />
            </div>
            <div className='flex flex-col items-start justify-start w-48 mt-16 ml-6'>
                <h5 className='font-bold text-left text-black-500'>Wymiana oleju</h5>
                <p className='mt-3 text-gray-500 w-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eligendi error enim, perferendis tempora aperiam suscipit.</p>
            </div>
            <div className='flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-2xl'>
            <GiTowTruck className='w-16 h-16 text-white' />
            </div>
            <div className='flex flex-col items-start justify-start w-48 mt-16 ml-6'>
                <h5 className='font-bold text-left text-black-500'>Wymiana oleju</h5>
                <p className='mt-3 text-gray-500 w-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eligendi error enim, perferendis tempora aperiam suscipit.</p>
            </div>
          </div>
          <div  className='flex flex-col items-center justify-around mt-32 md:flex-row'>
            <div className='flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-2xl'>
            <GiFlatTire className='w-16 h-16 text-white' />
            </div>
            <div className='flex flex-col items-start justify-start w-48 mt-16 ml-6'>
                <h5 className='font-bold text-left text-black-500'>Wymiana oleju</h5>
                <p className='mt-3 text-gray-500 w-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eligendi error enim, perferendis tempora aperiam suscipit.</p>
            </div>
            <div className='flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-2xl'>
            <TbEngine className='w-16 h-16 text-white'  />
            </div>
            <div className='flex flex-col items-start justify-start w-48 mt-16 ml-6'>
                <h5 className='font-bold text-left text-black-500'>Wymiana oleju</h5>
                <p className='mt-3 text-gray-500 w-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eligendi error enim, perferendis tempora aperiam suscipit.</p>
            </div>
            <div className='flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-2xl'>
            <FontAwesomeIcon icon={faOilCan} style={{color: "#ffffff", width: "64px", height:"64px",}} />
            </div>
            <div className='flex flex-col items-start justify-start w-48 mt-16 ml-6'>
                <h5 className='font-bold text-left text-black-500'>Wymiana oleju</h5>
                <p className='mt-3 text-gray-500 w-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eligendi error enim, perferendis tempora aperiam suscipit.</p>
            </div>
          </div>
    </section>
  )
}

export default OurServices