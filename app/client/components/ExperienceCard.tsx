import Image from 'next/image'

interface ExperienceCardProps {
  title: string
  description: string
  image: string
}

export default function ExperienceCard({
  title,
  description,
  image
}: ExperienceCardProps) {
  return (
    <article className='bg-[#ECECEC] border-4 border-white border-b-0 w-[305px] h-[595px] rounded-[32px] rounded-b-none flex flex-col gap-11'>
      <div className='px-6 mt-11 flex flex-col gap-4 '>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='text-sm text-gray-custom font-normal'>{description}</p>
      </div>
      <div className=' bg-green-500  flex justify-center h-full mx-4 rounded-t-3xl overflow-hidden'>
        <Image src={image} alt={title} width='281' height='379' className='w-full h-full object-cover' quality={100} />
      </div>
    </article>
  )
}
