import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import MaxWidthWrapper from '../components/MaxWidthWrapper'

const experiences = [
  {
    title: 'Tours de pesca',
    description:
      'Conoce los mejores puntos de pesca de la región mientras experimentas la emoción de atrapar tu propia recompensa.',
    image: '/images/tours-pesca.png'
  },
  {
    title: 'Navegar Bariloche',
    description:
      'Descubre las increíbles vistas de Bariloche desde sus aguas cristalinas todo estando desde tu propio bote.',
    image: '/images/navegar-bariloche.png'
  },
  {
    title: 'Tours guiados',
    description:
      'Nuestros expertos guías te llevarán a través de los tesoros ocultos y los lugares emblemáticos de la región, espectáculos te esperan.',
    image: '/images/tours-guiados.png'
  },
  {
    title: 'Navegación nocturna',
    description:
      'Explora las aguas cristalinas a la luz de la luna y goza de un tour lleno de paz y serenidad en Bariloche.',
    image: '/images/navegacion-nocturna.png'
  }
]
export default function Experiences() {
  return (
    <MaxWidthWrapper className='mt-40'>
      <section className='flex flex-col justify-center'>
        <div className='flex flex-col items-center'>
          <h2 className='text-5xl font-semibold'>Experiencias que nos hacen únicos</h2>
          <span className='text-gray-500 text-center mt-3'>
            Conoce todo lo que puedes hacer para disfrutar de <br /> Argentina y
            los Andes Patagónicos:
          </span>
        </div>
        <ul className='flex justify-between flex-wrap relative mt-32'>
          <div className='absolute -z-10 w-4/5 h-[110%]  rounded-t-3xl bg-[#ECECEC] bottom-0 right-0 left-0 mx-auto' />
          {experiences.map((experience) => (
            <li key={experience.title}>
              <ExperienceCard {...experience} />
            </li>
          ))}
        </ul>
      </section>
    </MaxWidthWrapper>
  )
}
