import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'
import React from 'react'
import Footer from '@/components/Footer'
import Map from './components/Map'
import Contact from './components/Contact'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='box-border w-full h-full overflow-x-hidden scroll-smooth'>
      <TopBar />
      <Navbar />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}

export default page