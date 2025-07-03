import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the request is for admin routes (excluding login page)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    // Get admin session from cookies
    const adminSessionCookie = request.cookies.get("adminSession")?.value

    if (!adminSessionCookie) {
      // No session cookie, redirect to login
      const loginUrl = new URL("/admin/login", request.url)
      loginUrl.searchParams.set("redirect", pathname)
      return NextResponse.redirect(loginUrl)
    }

    // If session exists, try to parse and validate it
    try {
      const sessionData = decodeURIComponent(adminSessionCookie)
      const session = JSON.parse(sessionData)
      const now = new Date()
      const expiresAt = new Date(session.expiresAt)

      // Check if session is expired
      if (now > expiresAt) {
        const loginUrl = new URL("/admin/login", request.url)
        loginUrl.searchParams.set("redirect", pathname)
        loginUrl.searchParams.set("expired", "true")

        // Clear the expired session cookie
        const response = NextResponse.redirect(loginUrl)
        response.cookies.delete("adminSession")
        return response
      }

      // Session is valid, allow access
      return NextResponse.next()
    } catch (error) {
      // Invalid session format, redirect to login
      const loginUrl = new URL("/admin/login", request.url)
      loginUrl.searchParams.set("redirect", pathname)
      const response = NextResponse.redirect(loginUrl)
      response.cookies.delete("adminSession")
      return response
    }
  }

  // If accessing admin login page while already logged in, redirect to dashboard
  if (pathname === "/admin/login") {
    const adminSessionCookie = request.cookies.get("adminSession")?.value

    if (adminSessionCookie) {
      try {
        const sessionData = decodeURIComponent(adminSessionCookie)
        const session = JSON.parse(sessionData)
        const now = new Date()
        const expiresAt = new Date(session.expiresAt)

        // If session is still valid, redirect to admin dashboard or intended page
        if (now <= expiresAt) {
          const redirectUrl = request.nextUrl.searchParams.get("redirect") || "/admin"
          return NextResponse.redirect(new URL(redirectUrl, request.url))
        }
      } catch (error) {
        // Invalid session, allow access to login page
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
