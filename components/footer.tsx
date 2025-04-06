"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Cpu, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Ashutosh Maurya</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Fullstack Developer specializing in Java, DSA, and modern web technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/profile" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Profile
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg">Connect</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="https://github.com/akmroyal"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                target="_black"
              >
                <Github className="h-4 w-4 group-hover:scale-125 transition-transform" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/ashu-maurya-9026xxxx/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                target="_blank"
              >
                <Linkedin className="h-4 w-4 group-hover:scale-125 transition-transform" />
                LinkedIn
              </Link>
              <Link
                href="https://x.com/akm_royal"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                target="_blank"
              >
                <Twitter className="h-4 w-4 group-hover:scale-125 transition-transform" />
                Twitter
              </Link>
              <Link
                href="mailto: ashutosh.maurya2285@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                target="_blank"
              >
                <Mail className="h-4 w-4 group-hover:scale-125 transition-transform" />
                Email
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 py-6 border-t border-b">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-1">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-1">9+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-1">1+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-1">300+</div>
              <div className="text-sm text-muted-foreground">Coding Challenges</div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ashutosh Maurya. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild className="group">
              <Link href="#">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

