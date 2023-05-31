import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faTractor, faTruck, faCarBurst } from '@fortawesome/free-solid-svg-icons'



type Props = {}

const AssistanceOurServices = (props: Props) => {
  return (
    <section className='flex flex-col items-center mt-48 mb-24'>
      <h3 className='gap-4 mb-20 text-3xl font-bold tracking-wide text-center text-gray-700 max-w font-OpenSans'>Nasze Usługi</h3>
      <div className='flex flex-col items-start justify-center gap-3 md:flex-row'>
        <div className='flex flex-col items-center justify-around mt-10'>
        <div className='flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-2xl'>
        <FontAwesomeIcon icon={faCar} className='w-16 h-16 text-white'/>
        </div>
        <h4 className='gap-4 mt-10 mb-20 text-xl font-bold tracking-wide text-center text-gray-700 max-w font-OpenSans' >Holowanie samochodów</h4>
        <p className='max-w-6xl m-10 font-light text-center text-gray-500'>Kiedy Twój samochód nagle odmawia posłuszeństwa na drodze, nie musisz już martwić się o to, co zrobić dalej.
         Nasza firma oferuje kompleksowe usługi holowania samochodów,
         zapewniając Ci szybkie i bezpieczne przemieszczenie pojazdu do wybranego miejsca.
        Nasi wykwalifikowani operatorzy i specjalistyczny sprzęt pozwolą Ci zminimalizować stres związany z awarią i zapewnić sprawną obsługę na drodze.
           Zaufaj nam swoje auto, a my zajmiemy się resztą</p>

        </div>
        <div className='flex flex-col items-center justify-around mt-10'>
        <div className='flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-2xl'>
        <FontAwesomeIcon icon={faTruck} className='w-16 h-16 text-white'/>
        </div>
        <h4 className='gap-4 mt-10 mb-20 text-xl font-bold tracking-wide text-center text-gray-700 max-w font-OpenSans'>Transport samochodów ciężarowych i dostawczych</h4>
        <p className='max-w-6xl m-10 font-light text-center text-gray-500'>Gdy potrzebujesz fachowego i niezawodnego transportu samochodów ciężarowych oraz dostawczych, jesteśmy Twoim idealnym partnerem.
         Nasza firma dysponuje specjalistycznymi naczepami oraz doświadczonymi kierowcami,
          którzy zapewnią bezpieczne i terminowe dostarczenie Twojego pojazdu w dowolne miejsce oraz pomoc w razie wypadku.
           Niezależnie od rozmiaru i wagi, możesz polegać na naszym profesjonalizmie.
            Pozwól nam zająć się transportem Twojego samochodu lub pomocą, 
            abyś mógł skupić się na swoim biznesie.</p>

        </div>
        <div className='flex flex-col items-center justify-around mt-10'>
        <div className='flex items-center justify-center w-24 h-24 bg-blue-800 rounded-full shadow-2xl'>
        <FontAwesomeIcon icon={faTractor} className='w-16 h-16 text-white'/>
        </div>
        <h4 className='gap-4 mt-10 mb-20 text-xl font-bold tracking-wide text-center text-gray-700 max-w font-OpenSans'>Pomoc w trancporcie traktorów i maszyn rolniczych</h4>
        <p className='max-w-6xl m-10 font-light text-center text-gray-500'>Rolnicy i właściciele gospodarstw doskonale wiedzą, jak ważne jest sprawne działanie traktorów i maszyn rolniczych. 
        W przypadku awarii lub potrzeby przewiezienia sprzętu na oddalone pole, nasza firma oferuje niezawodną pomoc w transporcie.
         Nasze specjalistyczne pojazdy i wykwalifikowana ekipa zapewnią profesjonalne i bezpieczne przemieszczenie
         </p>

        </div>
      </div>
    </section>
  )
}

export default AssistanceOurServices