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
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
            <div className="absolute inset-0 bg-black/20 -z-10" />
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Cpu className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">{text}</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="container grid gap-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  prefetch={true}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4">
                <ThemeSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}