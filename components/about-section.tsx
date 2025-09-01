"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { FileText } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 md:grid-cols-2 items-center"
        >
          <div className="relative group flex justify-center">
            <div
              className={`absolute -inset-2 rounded-lg bg-gradient-to-r from-primary to-primary/20 opacity-30 blur-lg transition-all duration-500 ${isHovered ? "opacity-70 scale-105" : "opacity-30"
                }`}
              style={{ width: '50%', height: '100%', left: '12%' }}
            />
            <div
              className="relative overflow-hidden rounded-lg border bg-background flex items-center justify-center"
              style={{ width: '50%', height: '50%' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative flex items-center justify-center" style={{ width: '100%', height: '100%' }}>
                <Image
                  src="/profilImg.png"
                  alt="About me"
                  width={150}
                  height={150}
                  className={`object-cover transition-all duration-500 ${isHovered ? "scale-110 filter grayscale" : "scale-100"
                    }`}
                  style={{ width: '100%', height: '100%' }}
                />
                {isHovered && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button size="lg" asChild>
                        <Link href="/profile">
                          <User className="mr-2 h-4 w-4" />
                          View Profile
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              About <span className="text-primary">Me</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Ashutosh Maurya, a passionate Fullstack Developer with expertise in Java programming and advanced Data
                Structures & Algorithms. My journey in software development started with C/C++ and has evolved to
                encompass modern web technologies.
              </p>

              <p>
                I specialize in building robust, scalable applications that solve real-world problems. With a strong
                foundation in computer science fundamentals and a keen eye for detail, I strive to write clean,
                efficient, and maintainable code.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or solving complex algorithmic problems to keep my skills sharp.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-lg">Education</h3>
                <p className="text-muted-foreground">Computer Science, B.Tech</p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Experience</h3>
                <p className="text-muted-foreground">2+ Yr(Relevant Experience)</p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Location</h3>
                <p className="text-muted-foreground">Remote</p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Availability</h3>
                <p className="text-muted-foreground">Full-time</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/profile">
                  <User className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  View Profile
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="group">
                <Link href="/about">
                  <FileText className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Full About Me
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

