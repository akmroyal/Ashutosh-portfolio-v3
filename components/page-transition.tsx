"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "./loader"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  // Only show loader on initial page load, not on subsequent navigations
  useEffect(() => {
    const handleInitialLoad = () => {
      setIsLoading(true)
      // Use a shorter timeout for better UX
      setTimeout(() => {
        setIsLoading(false)
      }, 900) // Reduced from 300ms to 100ms for faster transitions
    }

    handleInitialLoad()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0 }} // Reduced from 0.2s to 0.1s for faster transitions
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}