export default function Hero() {
  return (
    <section className='bg-[url(/images/bkg_hero.png)]  flex text-white flex-col justify-center items-center h-[874px] bg-cover bg-no-repeat bg-bottom rounded-3xl md:mx-20 mx-4 px-4'>
      <h1 className='text-center text-4xl md:text-6xl '>Navega las aguas <br/>cristalinas de Bariloche</h1>
      <p className='mt-3 text-center text-base md:text-xl'>
        Reserva tu bote y deja que Bariloche sea el escenario de tu próxima gran
        historia{' '}
      </p>
      <button className='bg-principal p-4 rounded-3xl mt-9 active:scale-95'>Contactar ahora</button>
    </section>
  )
}
