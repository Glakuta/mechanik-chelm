import React from 'react'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <section className='mt-36'>
        <h2 className='gap-4 mb-20 text-3xl font-normal tracking-wide text-center text-gray-700 max-w font-OpenSans'>Warsztat Samochdowy Uzarek - mechanika pojazdów, elektromechanik, assistance 24h/7</h2>
        <p className='max-w-6xl m-10 font-light text-center text-gray-500'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At mollitia perferendis error aliquid dolorem, vitae tempore rerum dicta magnam totam repellat
             quam nesciunt placeat asperiores nisi provident laboriosam ipsum! Omnis,
              nobis modi repellat ipsam numquam eius molestias fugiat, quidem voluptatibus, maiores dolorum nemo dolores
               et. Similique, esse in! Beatae, doloremque eligendi illum consectetur accusamus quas?
                Eveniet autem quisquam suscipit placeat, reprehenderit quod praesentium, possimus ipsum
                 recusandae quam nesciunt soluta aut error vel odit. Debitis, dolorum doloribus perspiciatis nam 
                 adipisci labore. Sit neque corporis autem iste ipsam dolore nesciunt porro, saepe molestiae tempore 
                 pariatur minima expedita laudantium rem labore? Optio autem, assumenda consequatur beatae veritatis, 
                 velit obcaecati ratione cum in, a quaerat maxime eaque rerum? Rerum deserunt doloremque numquam nobis,
                  quibusdam obcaecati? Voluptates mollitia cum esse distinctio.
        </p>
        <div className='mt-16'>
            <a href="/umow-termin">
                <button className='flex items-center justify-center w-56 p-4 m-auto text-2xl font-bold text-white transition duration-300 ease-in-out delay-150 bg-blue-400 border-4 rounded shadow border-primary-yellow hover:-translate-y-1 hover:scale-110'>Umów się!</button>
            </a>
        </div>
    </section>
  )
}

export default AboutUs