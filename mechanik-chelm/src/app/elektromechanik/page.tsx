import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'
import React from 'react'
import ElektromechanikHeroSection from './components/ElektromechanikHeroSection'
import ElektromechanikAbout from './components/ElektromechanikAbout'

type Props = {}

const elektromechanik = (props: Props) => {
  return (
    <div className='box-border w-full h-full overflow-x-hidden scroll-smooth'> 
      <TopBar />
      <Navbar />
      <ElektromechanikHeroSection />
      <ElektromechanikAbout />
      <Footer />
    </div>
  )
}

export default elektromechanik