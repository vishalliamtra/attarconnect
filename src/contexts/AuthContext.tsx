"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface User {
  id: string
  name: string
  email: string
  type: "customer" | "artisan"
  avatar?: string
  createdAt: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  signup: (
    name: string,
    email: string,
    password: string,
    type: "customer" | "artisan",
  ) => Promise<{ success: boolean; error?: string }>
  isLoading: boolean
  error: string | null
  clearError: () => void
  isHydrated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users database
const mockUsers: User[] = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya@example.com",
    type: "customer",
    avatar: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400",
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Mohammad Rashid",
    email: "mohammad@example.com",
    type: "artisan",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    createdAt: "2024-01-01T00:00:00Z",
  },
]

// Mock passwords (in real app, these would be hashed)
const mockPasswords: Record<string, string> = {
  "priya@example.com": "password123",
  "mohammad@example.com": "password123",
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePassword = (password: string): boolean => {
  return password.length >= 6
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Handle hydration
    setIsHydrated(true)

    // Check for existing session
    const savedUser = localStorage.getItem("user")
    const sessionExpiry = localStorage.getItem("sessionExpiry")

    if (savedUser && sessionExpiry) {
      const now = new Date().getTime()
      const expiry = Number.parseInt(sessionExpiry)

      if (now < expiry) {
        try {
          const parsedUser = JSON.parse(savedUser)
          if (parsedUser && parsedUser.id && parsedUser.email) {
            setUser(parsedUser)
          }
        } catch (error) {
          console.error("Error parsing saved user:", error)
          localStorage.removeItem("user")
          localStorage.removeItem("sessionExpiry")
        }
      } else {
        // Session expired
        localStorage.removeItem("user")
        localStorage.removeItem("sessionExpiry")
      }
    }
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    setError(null)

    try {
      // Validate input
      if (!validateEmail(email)) {
        throw new Error("Please enter a valid email address")
      }

      if (!validatePassword(password)) {
        throw new Error("Password must be at least 6 characters long")
      }

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check credentials
      const foundUser = mockUsers.find((u) => u.email === email)
      if (!foundUser || mockPasswords[email] !== password) {
        throw new Error("Invalid email or password")
      }

      // Set session (24 hours)
      const sessionExpiry = new Date().getTime() + 24 * 60 * 60 * 1000

      if (isHydrated) {
        localStorage.setItem("user", JSON.stringify(foundUser))
        localStorage.setItem("sessionExpiry", sessionExpiry.toString())
      }

      setUser(foundUser)
      return { success: true }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Login failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (
    name: string,
    email: string,
    password: string,
    type: "customer" | "artisan",
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    setError(null)

    try {
      // Validate input
      if (!name.trim()) {
        throw new Error("Name is required")
      }

      if (!validateEmail(email)) {
        throw new Error("Please enter a valid email address")
      }

      if (!validatePassword(password)) {
        throw new Error("Password must be at least 6 characters long")
      }

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check if user already exists
      if (mockUsers.find((u) => u.email === email)) {
        throw new Error("An account with this email already exists")
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        name: name.trim(),
        email: email.toLowerCase(),
        type,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=f59e0b&color=fff`,
        createdAt: new Date().toISOString(),
      }

      // Add to mock database
      mockUsers.push(newUser)
      mockPasswords[email] = password

      // Set session
      const sessionExpiry = new Date().getTime() + 24 * 60 * 60 * 1000

      if (isHydrated) {
        localStorage.setItem("user", JSON.stringify(newUser))
        localStorage.setItem("sessionExpiry", sessionExpiry.toString())
      }

      setUser(newUser)
      return { success: true }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Signup failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setError(null)
    if (isHydrated) {
      localStorage.removeItem("user")
      localStorage.removeItem("sessionExpiry")
    }
  }

  const clearError = () => {
    setError(null)
  }

  const value: AuthContextType = {
    user,
    login,
    logout,
    signup,
    isLoading,
    error,
    clearError,
    isHydrated,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
