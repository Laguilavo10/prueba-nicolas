import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'

export default function AuthButton() {
  
  return (
    <div>
      <button onClick={createClientComponentClient}>Sign in</button>
    </div>
  )
}