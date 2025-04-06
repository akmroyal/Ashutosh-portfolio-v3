"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User, Download, Calendar, Briefcase, GraduationCap, Award, X } from "lucide-react"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@/components/ui/timeline"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

export default function AboutPageContent() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    name: string
    link: string
    details: string
  } | null>(null)

  const education = [
    {
      degree: "12th",
      institution: "Bapu Inter College, Salempur Deoria (UP)",
      year: "2020 - 2021",
      description: "Passed with 75%",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lloyd Institute Of Engineering & Technology, Greater Noida (UP)",
      year: "2022 - Present",
      // description: "Graduated with honors. Specialized in algorithms and data structures.",
    },
    // {
    //   degree: "Master of Science in Software Engineering",
    //   institution: "Tech Institute",
    //   year: "2020 - 2022",
    //   description: "Focused on advanced software architecture and design patterns.",
    // },
  ]

  const experience = [
    {
      position: "Junior Developer",
      company: "Hackathons / College Projects / Personal Projects",
      year: "2020 - 2021",
      description: "",
    },
    // {
    //   position: "Software Engineer",
    //   company: "Enterprise Solutions",
    //   year: "2021 - 2022",
    //   description: "Worked on scalable backend systems using Java and Spring Boot.",
    // },
    // {
    //   position: "Senior Developer",
    //   company: "Innovation Labs",
    //   year: "2022 - Present",
    //   description: "Leading development of microservices architecture and mentoring junior developers.",
    // },
  ]

  // Make awards and certifications clickable
  const certifications = [
    {
      name: "HackerRank Certified JavaScript",
      link: "https://www.hackerrank.com/certificates/iframe/a0c5f0b5dd2f",
      details:
        "Certification for JavaScript programming skills, covering topics like functions, closures, prototypes, and ES6 features.",
    },
    // {
    //   name: "HackerRank Certified Java Programmer",
    //   link: "#",
    //   details:
    //     "Advanced Java programming certification covering OOP concepts, collections, concurrency, and design patterns.",
    // },
    {
      name: "HackerRank: Certified Problem Solver (Data Structure and Algo.)",
      link: "https://www.hackerrank.com/certificates/iframe/2d4d3b9e0cf6",
      details:
        "Certification for problem-solving skills using data structures and algorithms, covering topics like arrays, linked lists, trees, and graph algorithms.",
    },
    // {
    //   name: "Google Cloud Professional Developer",
    //   link: "#",
    //   details:
    //     "Professional-level certification for developing applications using Google Cloud Platform services and APIs.",
    // },
  ]

  return (
    <div className="container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          About <span className="text-primary">Me</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn more about my background, experience, and what drives me as a developer.
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-primary to-primary/20 opacity-30 blur-lg group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative overflow-hidden rounded-lg border bg-background">
            <Image
              src="/profilImg.png"
              alt="About me"
              width={600}
              height={600}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Fullstack Developer & <span className="text-primary">Problem Solver</span>
          </h2>

          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Hello! I'm a passionate Fullstack Developer with expertise in Java programming and advanced Data
              Structures & Algorithms. My journey in software development started with C/C++ and has evolved to
              encompass modern web technologies.
            </p>

            <p>
              I specialize in building robust, scalable applications that solve real-world problems. With a strong
              foundation in computer science fundamentals and a keen eye for detail, I strive to write clean, efficient,
              and maintainable code.
            </p>

            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              solving complex algorithmic problems to keep my skills sharp.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                <User className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://drive.google.com/file/d/1g-HFdWDeUtshGh_tnRn5bcGzPBX5MlEv/view?usp=sharing">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Education & <span className="text-primary">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-5 w-5 text-primary" />
              Education
            </h3>

            <Timeline>
              {education.map((item, index) => (
                <TimelineItem key={index}>
                  {index !== education.length - 1 && <TimelineConnector />}
                  <TimelineHeader>
                    <TimelineIcon className="bg-primary" />
                    <div className="flex flex-col">
                      <h4 className="text-lg font-semibold">{item.degree}</h4>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {item.year}
                      </p>
                    </div>
                  </TimelineHeader>
                  <TimelineBody>
                    <p className="font-medium">{item.institution}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </TimelineBody>
                </TimelineItem>
              ))}
            </Timeline>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 h-5 w-5 text-primary" />
              Experience
            </h3>

            <Timeline>
              {experience.map((item, index) => (
                <TimelineItem key={index}>
                  {index !== experience.length - 1 && <TimelineConnector />}
                  <TimelineHeader>
                    <TimelineIcon className="bg-primary" />
                    <div className="flex flex-col">
                      <h4 className="text-lg font-semibold">{item.position}</h4>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {item.year}
                      </p>
                    </div>
                  </TimelineHeader>
                  <TimelineBody>
                    <p className="font-medium">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </TimelineBody>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Certifications & <span className="text-primary">Awards</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 border rounded-lg bg-background hover:shadow-md transition-all text-center group cursor-pointer"
              onClick={() => setSelectedCertificate(cert)}
            >
              <Award className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-medium">{cert.name}</p>
              <p className="text-xs text-muted-foreground mt-2">Click to view certificate</p>
              <div className="w-0 h-0.5 bg-primary mx-auto mt-2 group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Dialog open={!!selectedCertificate} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedCertificate?.name}</DialogTitle>
            <DialogDescription>{selectedCertificate?.details}</DialogDescription>
          </DialogHeader>
          <div className="relative w-full aspect-[4/3] mt-4 bg-muted rounded-md overflow-hidden">
            {selectedCertificate && (
              <iframe src={selectedCertificate.link} className="w-full h-full border-0" allowFullScreen />
            )}
          </div>
          <DialogClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}