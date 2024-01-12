'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export async function SignInWithSupabase() {
  const supabase = createClientComponentClient()
  return await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${location.origin}/api/auth/callback`
    }
  })
}
