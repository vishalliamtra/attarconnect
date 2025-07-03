"use client"

import type React from "react"
import { AuthProvider } from "@/contexts/AuthContext"
import { CartProvider } from "@/contexts/CartContext"
import { AdminAuthProvider } from "@/contexts/AdminAuthContext"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <AdminAuthProvider>
      <CartProvider>{children}</CartProvider>
      </AdminAuthProvider>
    </AuthProvider>
  )
}
