"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AboutSection from "./about-section"
import SkillsSection from "./skills-section"
import ProjectsSection from "./projects-section"
import Typewriter from "@/components/typewriter"

export default function Hero() {
  return (
    <>
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-primary">Turning Ideas</span> into <span className="text-primary">Reality</span> with
            Code
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Fullstack Developer | Java Programmer | Advanced DSA | C/C++ Programmer
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button asChild size="lg" className="group">
              <Link href="https://drive.google.com/file/d/1g-HFdWDeUtshGh_tnRn5bcGzPBX5MlEv/view?usp=sharing" target="_blank">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#projects">View Projects</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="/#about">
            <Button variant="ghost" size="icon" className="animate-bounce">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </Link>
        </motion.div>

        {/* Background animated elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.7,
                scale: 1,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-32 right-10 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/20 opacity-70 blur-md animate-pulse" />
            <div className="relative bg-background p-4 rounded-lg border shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-xs font-mono">terminal</div>
              </div>
              <div className="mt-2 font-mono text-sm">
                <Typewriter
                  text={[
                    "Hello World!",
                    "npm install portfolio",
                    "Initializing awesome projects...",
                    "Ready to collaborate?",
                  ]}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  )
}

