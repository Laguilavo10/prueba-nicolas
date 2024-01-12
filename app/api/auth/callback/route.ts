import { getSessionByCode } from '@/app/server/lib/supabase/getSessionByCode'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code') ?? ''
  try {
    await getSessionByCode(code)
    return NextResponse.redirect(new URL('/', requestUrl.origin))
  } catch (error) {
    return NextResponse.redirect(new URL('/signin', requestUrl.origin))
  }
}
