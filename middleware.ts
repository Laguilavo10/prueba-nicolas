import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const pathname = req.nextUrl.pathname

  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session }
  } = await supabase.auth.getSession()

  // If the user is authenticated and is trying to access the login page, redirect to the home page.
  if (session && pathname === '/signin') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // If the user is not authenticated and is trying to access any page other than the login page, redirect to the login page.
  if (!session && pathname !== '/signin') {
    return NextResponse.redirect(new URL('/signin', req.url))
  }

  // return res
}

export const config = {
  matcher: [
    '/',
    '/signin',
  ]
}
