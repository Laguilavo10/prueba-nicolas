export default function Hero() {
  // This is due to the hero having the size of the screen, discounting the upper padding that in the future will be the header.
  const heightHero = 'h-[calc(100vh-5rem)]'
  return (
    <section className={`bg-[url(/images/bkg_hero.png)]  flex text-white flex-col justify-center items-center h-screen bg-cover bg-no-repeat bg-bottom rounded-3xl md:mx-10 mx-4 px-4 ${heightHero}`}>
      <h1 className='text-center font-bold text-4xl md:text-6xl '>Navega las aguas <br/>cristalinas de Bariloche</h1>
      <p className='mt-3 font-medium text-center text-base md:text-xl'>
        Reserva tu bote y deja que Bariloche sea el escenario <br/> de tu próxima gran
        historia{' '}
      </p>
      <button className='bg-principal p-4  rounded-3xl mt-9 active:scale-95 font-medium text-base'>Contactar ahora</button>
    </section>
  )
}
