import Image from 'next/image'
import MaxWidthWrapper from '../client/components/MaxWidthWrapper'
import Hero from '../client/sections/Hero'
import Experiences from '../client/sections/Experiences'
import Welcome from '../client/components/Welcome'

export default function Home() {

  return (
    <main>
      <Welcome/>
      <Hero />
      <Experiences />
    </main>
  )
}
