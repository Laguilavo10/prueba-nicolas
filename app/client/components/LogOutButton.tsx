'use client'
import { SignOutIcon } from './icons'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function LogOutButton() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <button onClick={handleSignOut}>
      <SignOutIcon />
    </button>
  )
}
