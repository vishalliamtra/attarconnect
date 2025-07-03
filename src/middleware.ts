import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for admin routes (excluding login page)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Get admin session from cookies or headers
    const adminSession = request.cookies.get('adminSession')?.value;
    
    // If no session cookie, check if there might be a session in localStorage
    // Since we can't access localStorage in middleware, we'll redirect to login
    // and let the client-side handle the session check
    if (!adminSession) {
      // Redirect to admin login page
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // If session exists, try to parse and validate it
    try {
      const session = JSON.parse(adminSession);
      const now = new Date();
      const expiresAt = new Date(session.expiresAt);

      // Check if session is expired
      if (now > expiresAt) {
        const loginUrl = new URL('/admin/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        loginUrl.searchParams.set('expired', 'true');
        
        // Clear the expired session cookie
        const response = NextResponse.redirect(loginUrl);
        response.cookies.delete('adminSession');
        return response;
      }

      // Session is valid, allow access
      return NextResponse.next();
    } catch (error) {
      // Invalid session format, redirect to login
      const loginUrl = new URL('/admin/login', request.url);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete('adminSession');
      return response;
    }
  }

  // If accessing admin login page while already logged in, redirect to dashboard
  if (pathname === '/admin/login') {
    const adminSession = request.cookies.get('adminSession')?.value;
    
    if (adminSession) {
      try {
        const session = JSON.parse(adminSession);
        const now = new Date();
        const expiresAt = new Date(session.expiresAt);

        // If session is still valid, redirect to admin dashboard
        if (now <= expiresAt) {
          return NextResponse.redirect(new URL('/admin', request.url));
        }
      } catch (error) {
        // Invalid session, allow access to login page
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*'
  ]
};