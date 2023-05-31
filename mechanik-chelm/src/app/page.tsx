import Footer from '@/components/Footer'
import AboutUs from '@/components/MainPageComponents/AboutUs'
import AutoRepair from '@/components/MainPageComponents/AutoRepair'
import HeroSection from '@/components/MainPageComponents/HeroSection'
import OferMake from '@/components/MainPageComponents/OferMake'
import OurServices from '@/components/MainPageComponents/OurServices'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='box-border w-full h-full overflow-x-hidden scroll-smooth'>
      <TopBar />
      <Navbar />
      <HeroSection/>
      <AboutUs />
      <OurServices />
      <OferMake />
      <AutoRepair />
      <Footer />
    </div>
  )
}
