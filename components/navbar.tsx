"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "./theme-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [text, setText] = useState("")
  const fullText = "Akm_Royal"
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (text.length < fullText.length) {
      setIsTyping(true)
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 150)
      return () => clearTimeout(timeout)
    } else {
      setIsTyping(false)
      // Instead of setting isTyping to false, we'll reset after a pause
      const timeout = setTimeout(() => {
        setText("")
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [text])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Profile", path: "/profile" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="group-hover:text-primary transition-colors"
          >
            <Cpu className="h-6 w-6" />
          </motion.div>
          <span className="font-bold text-xl relative">
            {text}
            <span
              className={`absolute right-0 top-0 h-full w-[2px] bg-primary ${isTyping ? "animate-blink" : "opacity-0"}`}
            ></span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              prefetch={true}
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                pathname === item.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <ThemeSwitcher />
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Background overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/10 backdrop-blur-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
            
            {/* Header with border */}
            <div className="relative border-b border-border/50 bg-background/80 backdrop-blur-sm">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <Cpu className="h-6 w-6 text-primary" />
                  </motion.div>
                  <span className="font-bold text-xl">{text}</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
            </div>
            
            {/* Navigation menu with card-like styling */}
            <div className="relative p-6">
              <div className="relative overflow-hidden rounded-lg border bg-card/90 backdrop-blur-sm p-6">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-30 blur-sm" />
                
                <nav className="relative grid gap-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.path}
                        prefetch={true}
                        className={`block text-lg font-medium transition-all duration-300 p-3 rounded-md hover:bg-primary/10 hover:text-primary relative group ${
                          pathname === item.path ? "text-primary bg-primary/5" : "text-muted-foreground"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="mt-4 pt-4 border-t border-border/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <ThemeSwitcher />
                  </motion.div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}