"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  text: string[]
  delay?: number
  typingSpeed?: number
  erasingSpeed?: number
  pauseTime?: number
}

export default function Typewriter({
  text,
  delay = 1000,
  typingSpeed = 100,
  erasingSpeed = 50,
  pauseTime = 2000,
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (currentText.length < text[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(text[currentTextIndex].slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        setIsPaused(true)
        timeout = setTimeout(() => {
          setIsPaused(false)
          setIsTyping(false)
        }, pauseTime)
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1))
        }, erasingSpeed)
      } else {
        setIsTyping(true)
        setCurrentTextIndex((currentTextIndex + 1) % text.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isTyping, isPaused, text, typingSpeed, erasingSpeed, pauseTime])

  return (
    <div className="inline-flex items-center">
      <span>{currentText}</span>
      <span className={`ml-0.5 w-2 h-4 bg-primary ${isPaused ? "opacity-0" : "animate-blink"}`}></span>
    </div>
  )
}

