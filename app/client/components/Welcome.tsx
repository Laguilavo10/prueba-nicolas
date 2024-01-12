import LogOutButton from './LogOutButton'
import getSession from '@/app/server/lib/supabase/getSession'

export default async function Welcome() {
  const session = await getSession()
  return (
    <div className='bg-green-500 text-white fixed  bottom-10 right-10 p-5 flex  gap-2 rounded-xl z-[100]'>
      <div>Bienvenido {session?.user.user_metadata.full_name} </div>
      <LogOutButton />
    </div>
  )
}
