"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 grid grid-cols-3 gap-1 p-2">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => {
              document.documentElement.className = theme.value // Add this line to force theme change
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
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

