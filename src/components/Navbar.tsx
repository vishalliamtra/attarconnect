"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, ShoppingCart, User, Search, Globe, Droplets } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { useCart } from "@/contexts/CartContext"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Move the hook calls inside the component function
  const { user, logout, isHydrated: authHydrated } = useAuth()
  const { totalItems, isHydrated: cartHydrated } = useCart()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/artisans", label: "Artisans" },
    { href: "/b2b", label: "B2B Portal" },
    { href: "/knowledge", label: "Knowledge Hub" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => pathname === path

  const handleSearchClick = () => {
    window.dispatchEvent(new Event("openSearch"))
  }

  const handleUserMenuClick = () => {
    if (user) {
      setIsUserMenuOpen(!isUserMenuOpen)
    } else {
      router.push("/login")
    }
  }

  const handleLogout = () => {
    logout()
    setIsUserMenuOpen(false)
    router.push("/")
  }

  // Don't show cart badge until hydrated to prevent hydration mismatch
  const showCartBadge = cartHydrated && totalItems > 0

  return (
    <nav className="bg-white shadow-lg border-b border-amber-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Droplets className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 font-serif">AttarConnect</span>
              <span className="text-xs text-amber-600 -mt-1">अत्तर कनेक्ट</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                  isActive(link.href) ? "text-amber-600" : "text-gray-700 hover:text-amber-600"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleSearchClick}
              className="p-2 text-gray-600 hover:text-amber-600 transition-colors hover:bg-amber-50 rounded-full"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button className="p-2 text-gray-600 hover:text-amber-600 transition-colors hover:bg-amber-50 rounded-full">
              <Globe className="w-5 h-5" />
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={handleUserMenuClick}
                className="p-2 text-gray-600 hover:text-amber-600 transition-colors hover:bg-amber-50 rounded-full"
              >
                <User className="w-5 h-5" />
              </button>

              {isUserMenuOpen && user && authHydrated && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <Link
                    href={user.type === "artisan" ? "/artisan-dashboard" : "/dashboard"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Orders
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/cart"
              className="p-2 text-gray-600 hover:text-amber-600 transition-colors hover:bg-amber-50 rounded-full relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {showCartBadge && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                    isActive(link.href)
                      ? "text-amber-600 bg-amber-50"
                      : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {!user && authHydrated && (
                <div className="pt-2 border-t border-gray-200">
                  <Link
                    href="/login"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
