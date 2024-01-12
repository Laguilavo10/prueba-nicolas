export default function Hero() {
  return (
    <section className='bg-[url(/bkg_hero.png)] w-full flex text-white flex-col justify-center items-center h-[874px] bg-cover bg-no-repeat bg-bottom rounded-3xl'>
      <h1 className='text-6xl text-center'>Navega las aguas <br/>cristalinas de Bariloche</h1>
      <p className='text-xl mt-3'>
        Reserva tu bote y deja que Bariloche sea el escenario de tu próxima gran
        historia{' '}
      </p>
      <button className='bg-principal p-4 rounded-3xl mt-9'>Contactar ahora</button>
    </section>
  )
}
