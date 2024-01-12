'use client'

import GithubIcon from '@/app/client/components/icons'
import { SignInWithSupabase } from '@/app/server/lib/supabase/signInWithSupabase'

export default function Login() {
  return (
    <button
      onClick={SignInWithSupabase}
      className='bg-[#303133] text-white flex p-4 justify-center items-center rounded-md w-full gap-4 active::scale-95 transition-all duration-200'
    >
      Sign in with github <GithubIcon className='fill-white size-8'/>
    </button>
  )
}
