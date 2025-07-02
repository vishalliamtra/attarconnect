"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  artisan: string
  maxQuantity?: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isLoading: boolean
  isHydrated: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEY = "attar-connect-cart"

const isValidCartItem = (item: any): item is CartItem => {
  return (
    typeof item === "object" &&
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    typeof item.price === "number" &&
    typeof item.quantity === "number" &&
    typeof item.image === "string" &&
    typeof item.artisan === "string" &&
    item.quantity > 0 &&
    item.price > 0
  )
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Handle hydration
    setIsHydrated(true)
    setIsLoading(true)

    try {
      const savedCart = localStorage.getItem(STORAGE_KEY)
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        if (Array.isArray(parsedCart)) {
          const validItems = parsedCart.filter(isValidCartItem)
          setItems(validItems)
        }
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
      localStorage.removeItem(STORAGE_KEY)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
      } catch (error) {
        console.error("Error saving cart to localStorage:", error)
      }
    }
  }, [items, isHydrated])

  const addToCart = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    if (!item.id || !item.name || item.price <= 0 || quantity <= 0) {
      console.error("Invalid item data provided to addToCart")
      return
    }

    setItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity
        const maxAllowed = item.maxQuantity || 10

        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: Math.min(newQuantity, maxAllowed) } : cartItem,
        )
      } else {
        const newItem: CartItem = {
          ...item,
          quantity: Math.min(quantity, item.maxQuantity || 10),
        }
        return [...prevItems, newItem]
      }
    })
  }

  const removeFromCart = (id: string) => {
    if (!id) {
      console.error("Invalid id provided to removeFromCart")
      return
    }

    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (!id || quantity < 0) {
      console.error("Invalid parameters provided to updateQuantity")
      return
    }

    if (quantity === 0) {
      removeFromCart(id)
      return
    }

    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const maxAllowed = item.maxQuantity || 10
          return { ...item, quantity: Math.min(quantity, maxAllowed) }
        }
        return item
      }),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = Math.round(items.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100) / 100

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isLoading,
    isHydrated,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextType {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
