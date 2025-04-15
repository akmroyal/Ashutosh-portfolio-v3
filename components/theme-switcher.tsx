"use client"

import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Palette, Pause, Play } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const themes = [
  { name: "Light", value: "light", color: "#ffffff" },
  { name: "Dark", value: "dark", color: "#1e293b" },
  { name: "Blue", value: "blue", color: "#3b82f6" },
  { name: "Green", value: "green", color: "#10b981" },
  { name: "Purple", value: "purple", color: "#8b5cf6" },
  { name: "Orange", value: "orange", color: "#f97316" },
  { name: "Pink", value: "pink", color: "#ec4899" },
]

export function ThemeSwitcher() {
  const { setTheme, theme: currentTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [autoChangeTheme, setAutoChangeTheme] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Load auto-change preference from localStorage on component mount
  useEffect(() => {
    const savedPreference = localStorage.getItem("autoChangeTheme")
    if (savedPreference !== null) {
      setAutoChangeTheme(savedPreference === "true")
    }
  }, [])

  // Save auto-change preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("autoChangeTheme", autoChangeTheme.toString())
  }, [autoChangeTheme])

  // Set up theme auto-changing
  useEffect(() => {
    if (!autoChangeTheme) return

    // Find current theme index
    const initialIndex = themes.findIndex((t) => t.value === currentTheme) || 0
    setCurrentIndex(initialIndex)

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % themes.length
      const nextTheme = themes[nextIndex].value
      document.documentElement.className = nextTheme // Force theme change
      setTheme(nextTheme)
      setCurrentIndex(nextIndex)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoChangeTheme, setTheme, currentTheme, currentIndex])

  const toggleAutoChange = () => {
    setAutoChangeTheme((prev) => !prev)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          {autoChangeTheme ? (
            <Play className="h-[1.2rem] w-[1.2rem] animate-pulse" />
          ) : (
            <Palette className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-2">
            {autoChangeTheme ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            <Label htmlFor="auto-theme" className="text-sm font-medium">
              Auto-change theme
            </Label>
          </div>
          <Switch id="auto-theme" checked={autoChangeTheme} onCheckedChange={toggleAutoChange} />
        </div>
        <DropdownMenuSeparator />
        <div className="grid grid-cols-3 gap-1 p-2">
          {themes.map((theme) => (
            <DropdownMenuItem
              key={theme.value}
              onClick={() => {
                document.documentElement.className = theme.value // Force theme change
                setTheme(theme.value)
                setIsOpen(false)
              }}
              className={`flex flex-col items-center justify-center p-2 gap-1 h-20 hover:bg-muted rounded-md transition-colors ${
                currentTheme === theme.value ? "border-2 border-primary" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-full border" style={{ backgroundColor: theme.color }} />
              <span className="text-xs font-medium">{theme.name}</span>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}