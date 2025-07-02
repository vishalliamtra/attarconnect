"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Search, X, Clock, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  id: string
  name: string
  type: "product" | "artisan"
  image: string
  price?: number
  artisan?: string
  location?: string
}

const SearchModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock data for search results
  const mockProducts: SearchResult[] = [
    {
      id: "1",
      name: "Pure Rose Attar",
      type: "product",
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 2499,
      artisan: "Mohammad Rashid",
    },
    {
      id: "2",
      name: "Mysore Sandalwood Oil",
      type: "product",
      image: "https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 3799,
      artisan: "Suresh Kumar",
    },
    {
      id: "3",
      name: "Mohammad Rashid",
      type: "artisan",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Kannauj, UP",
    },
    {
      id: "4",
      name: "Jasmine Night Bloom",
      type: "product",
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 1899,
      artisan: "Priya Devi",
    },
  ]

  const trendingSearches = ["Rose Attar", "Sandalwood", "Oud", "Jasmine", "Traditional Perfumes"]

  useEffect(() => {
    const handleOpenSearch = () => {
      setIsOpen(true)
    }

    window.addEventListener("openSearch", handleOpenSearch)
    return () => window.removeEventListener("openSearch", handleOpenSearch)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem("recentSearches")
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved))
      } catch (error) {
        console.error("Error loading recent searches:", error)
      }
    }
  }, [])

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true)
      // Simulate search delay
      const timer = setTimeout(() => {
        const filtered = mockProducts.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            (item.artisan && item.artisan.toLowerCase().includes(query.toLowerCase())) ||
            (item.location && item.location.toLowerCase().includes(query.toLowerCase())),
        )
        setResults(filtered)
        setIsLoading(false)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setResults([])
      setIsLoading(false)
    }
  }, [query])

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      // Add to recent searches
      const newRecentSearches = [searchQuery, ...recentSearches.filter((s) => s !== searchQuery)].slice(0, 5)
      setRecentSearches(newRecentSearches)
      localStorage.setItem("recentSearches", JSON.stringify(newRecentSearches))

      // Close modal and navigate to search results
      setIsOpen(false)
      setQuery("")
      // In a real app, you would navigate to a search results page
      console.log("Searching for:", searchQuery)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(query)
    } else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Search Header */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products, artisans, or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 text-lg outline-none placeholder-gray-500"
          />
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Search Content */}
        <div className="max-h-96 overflow-y-auto">
          {query.trim() ? (
            // Search Results
            <div className="p-4">
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Search Results</h3>
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      href={result.type === "product" ? `/shop/${result.id}` : `/artisans/${result.id}`}
                      className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                      onClick={() => {
                        handleSearch(query)
                      }}
                    >
                      <img
                        src={result.image || "/placeholder.svg"}
                        alt={result.name}
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                          {result.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {result.type === "product" ? (
                            <>
                              by {result.artisan} • ₹{result.price?.toLocaleString()}
                            </>
                          ) : (
                            result.location
                          )}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No results found for "{query}"</p>
                  <p className="text-sm text-gray-400 mt-1">Try searching for something else</p>
                </div>
              )}
            </div>
          ) : (
            // Default State
            <div className="p-4 space-y-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Recent Searches
                    </h3>
                    <button
                      onClick={clearRecentSearches}
                      className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setQuery(search)
                          handleSearch(search)
                        }}
                        className="block w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-700"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((trend, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(trend)
                        handleSearch(trend)
                      }}
                      className="px-3 py-2 bg-gray-100 hover:bg-amber-100 hover:text-amber-700 rounded-full text-sm transition-colors"
                    >
                      {trend}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchModal
