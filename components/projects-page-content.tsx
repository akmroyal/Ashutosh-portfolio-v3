"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Code, Trophy, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import Swal from "sweetalert2"

export default function ProjectsPageContent() {
  const devProjects = [
    {
      title: "HealthScribe - AI-Powered Medical Transcriptor",
      description: "HealthScribe is an AI-powered medical assistant that transforms doctor-patient conversations into structured clinical notes, saving 60% of documentation time.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "Vite + React", "Supabase", "Express.js", "Nodejs", "OpenAI API + Whisper"],
      github: "https://github.com/akmroyal/HealthScribe-MERN-Project.git",
      demo: "#",
      featured: true,
      deploy: false,
    },
    {
      title: "Clipio - Video Sharing Platform",
      description: "This is the video sharing platform named AkVideoTube | Clipio, built for sharing and streaming videos with features like user authentication, video upload, and comments.",
      image: "/clipio.gif",
      tags: ["Reactjs", "JavaScript", "Tailwind CSS", "Axios", "Express.js", "Nodejs", "MongoDB", "Cloudinary"],
      github: "https://github.com/akmroyal/Video-Tube-frontend.git",
      demo: "https://ak-videotube.vercel.app/",
      featured: true,
      deploy: true,
    },
    {
      title: "Gamification Learning Platform",
      description:
        "Student engagement and learning outcomes on WSCube's platform through an AI-powered gamification system. By integrating interactive game mechanics with adaptive AI, the system delivers a tailored and engaging learning experience.",
      image: "/Gamified.png",
      tags: ["Astro", "TypeScript", "React", "ShadCn", "MaterialUI", "TailwindCSS"],
      github: "https://github.com/akmroyal/Gamified-EdTech-Project",
      demo: "#",
      featured: true,
      deploy: false,
    },
    {
      title: "CareerQuest - Job Board Platform",
      description:
        "CareerQuest is a modern job board platform which provides a seamless experience for both job seekers and employers.",
      image: "/careerquiest.gif",
      tags: ["ReactJs", "TailwindCSS", "Node.js", "MongoDB", "ExpressJS", "ShadCN"],
      github: "https://github.com/akmroyal/CareerQuest-WebApp.git",
      demo: "#",
      featured: true,
      deploy: false,
    },
    {
      title: "Dev-Launch-Pad",
      description: "A powerful collection of development tools built with React + TypeScript + Vite, designed to make developers' lives easier and more productive. Clean UI, fast performance, and crafted with 💖.",
      image: "/devlaunchpad.gif",
      tags: ["Vite + React", "TypeScript", "Web-Socket", "Tailwind CSS", "Framer Motion", "ShadCn",],
      github: "https://github.com/akmroyal/Dev-Launch-Pad-Tools-App.git",
      demo: "https://dev-launch-pad-tools-app.vercel.app/",
      featured: true,
      deploy: true,
    },
    {
      title: "Online Book Store",
      description:
        "The Online Book Management System is a MERN-stack project that enables users to manage books efficiently with authentication, CRUD operations, and data visualization.",
      image: "/LibraryMang.png",
      tags: ["ReactJs", "TailwindCSS", "Node.js", "MongoDB", "ExpressJS"],
      github: "https://github.com/akmroyal/online-book-managment-frontend.git",
      demo: "#",
      featured: false,
      deploy: false,
    },
    {
      title: "PDF Converter : Any 2 Any",
      description: "This React.js-based PDF Converter allows users to convert files into different formats effortlessly. The application is designed with a modern UI using Tailwind CSS and offers multiple file conversion functionalities",
      image: "/Any2Any.png",
      tags: ["React", "JavaScript", "TailwindCss", "PDF.js", "File-Saver", "react-dropzone"],
      github: "https://github.com/akmroyal/ANY-2-ANY-Convrter-Project.git",
      demo: "https://any-2-any-convrter-project.vercel.app/",
      featured: false,
      deploy: true,
    },
    {
      title: "Moder-Portfolio-Design",
      description: "A modern portfolio design showcasing skills, projects, and contact information. And build with Nextjs, Tailwind CSS, and Framer Motion.",
      image: "/Portfolio-Gif.gif",
      tags: ["NextJs", "TypeScript", "FrmaerMotion", "ShadCN", "TaiwindCSS"],
      github: "https://github.com/akmroyal/Ashutosh-portfolio-v3.git",
      demo: "https://ashutosh-portfolio-v3.vercel.app/",
      featured: true,
      deploy: true,
    },
    {
      title: "SMS - Student Management System",
      description: "This is a PERN stack based practiced Student Management System (SMS) that allows users to perform CRUD operations with students record and with charts for data visualization.",
      image: "/SMS.png",
      tags: ["React", "JavaScript", "Tailwind CSS", "Express.js", "Node.js", "PostgreSQL", "Chart.js"],
      github: "https://github.com/akmroyal/SMS-PERN-Stack.git",
      demo: "https://sms-pern-stack.vercel.app/",
      featured: false,
      deploy: true,
    },
    {
      title: "Portfolio Website",
      description: "This is a React.js-based portfolio website that showcases my skills, projects, and contact information in an interactive and visually appealing way.",
      image: "/Portfolio.png",
      tags: ["React", "Tailwind CSS", "Framer Motion", "ShadCn", "JavaScript"],
      github: "https://github.com/akmroyal/Demo-Portfolio-Design-ReactJS.git",
      demo: "#",
      featured: false,
      deploy: false,
    },
  ]

  const compProjects = [
    {
      title: "Library Management System",
      description:
        "A simple console-based Library Management System built in Java that allows users to manage books, handle user registration/login, track book transactions, and calculate fines for overdue returns.",
      image: "/LMS.png",
      tags: ["Java", "Object Oriented Programming", "File Handling", "Collections", "Console Application", "Data Structures"],
      github: "https://github.com/akmroyal/LibraryMangSystem-JAVA.git",
      demo: "#",
      featured: true,
      deploy: false,
    },
    {
      title: "Competitive Programming Solutions",
      description:
        "A collection of solutions to competitive programming problems from platforms like LeetCode, GFG, CodingNinjas, and HackerRank.",
      image: "/DSA.png",
      tags: ["Java", "Python", "C/C++", "Algorithms", "Data Structures", "Problem Solving"],
      github: "https://github.com/akmroyal/DSA_Q_sheets_Preparation.git",
      demo: "#",
      featured: true,
      deploy: false,
    },
    // {
    //   title: "DSA Playground",
    //   description:
    //     "An interactive platform to practice and visualize data structures and algorithms with real-time feedback.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["Java", "JavaScript", "DSA", "Educational", "Interactive"],
    //   github: "#",
    //   demo: "#",
    //   featured: false,
    //   deploy: false,
    // },
    // {
    //   title: "Graph Theory Explorer",
    //   description: "A tool for exploring and understanding graph theory concepts with interactive visualizations.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["JavaScript", "D3.js", "Graph Theory", "Algorithms", "Educational"],
    //   github: "#",
    //   demo: "#",
    //   featured: false,
    //   deploy: false,
    // },
    // {
    //   title: "Dynamic Programming Visualizer",
    //   description: "A platform to visualize and understand dynamic programming algorithms step by step.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["React", "TypeScript", "Algorithms", "Dynamic Programming", "Educational"],
    //   github: "#",
    //   demo: "#",
    //   featured: false,
    //   deploy: false,
    // },
  ]

  // Handle the demo Alert : to show alert
  const handleDemo = () => {
    Swal.fire("Sorry, I'll deploy soon 😌")
  }
  const [searchTerm, setSearchTerm] = useState("")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filterProjects = (projects: any[], term: string) => {
    if (!term) return projects

    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(term.toLowerCase()) ||
        project.description.toLowerCase().includes(term.toLowerCase()) ||
        project.tags.some((tag: string) => tag.toLowerCase().includes(term.toLowerCase())),
    )
  }

  const filteredDevProjects = filterProjects(devProjects, searchTerm)
  const filteredCompProjects = filterProjects(compProjects, searchTerm)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my technical projects, demonstrating my skills, problem-solving abilities, and passion for
          development.
        </p>
      </motion.div>

      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects by name, description, or technology..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="development" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="development">
              <span className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Development
              </span>
            </TabsTrigger>
            <TabsTrigger value="competitive">
              <span className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Competitive
              </span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="development">
          {filteredDevProjects.length > 0 ? (
            <>
              {filteredDevProjects.some((p) => p.featured) && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {filteredDevProjects
                      .filter((p) => p.featured)
                      .map((project, index) => (
                        <motion.div
                          key={`featured-${index}`}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          onMouseEnter={() => setHoveredProject(index)}
                          onMouseLeave={() => setHoveredProject(null)}
                          className="group"
                        >
                          <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <div className="relative aspect-video overflow-hidden">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                              />

                              {hoveredProject === index && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="absolute inset-0 bg-black/70 flex items-center justify-center"
                                >
                                  <div className="flex gap-4">
                                    <Button
                                      size="sm"
                                      variant="secondary"
                                      asChild
                                      className="hover:scale-105 transition-transform"
                                    >
                                      <Link href={project.github} target="_blank">
                                        <span className="flex items-center">
                                          <Github className="mr-2 h-4 w-4" />
                                          Code
                                        </span>
                                      </Link>
                                    </Button>
                                    {project.deploy ? (
                                      <Button size="sm" className="hover:scale-105 transition-transform">
                                        <Link href={project.demo} target="_blank">
                                          <span className="flex items-center">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Demo
                                          </span>
                                        </Link>
                                      </Button>
                                    ) : (
                                      <Button size="sm" className="hover:scale-105 transition-transform" onClick={handleDemo}>
                                        <span className="flex items-center">
                                          <ExternalLink className="mr-2 h-4 w-4" />
                                          Demo
                                        </span>
                                      </Button>
                                    )
                                    }
                                  </div>
                                </motion.div>
                              )}
                            </div>

                            <CardHeader>
                              <CardTitle>{project.title}</CardTitle>
                              <CardDescription>{project.description}</CardDescription>
                            </CardHeader>

                            <CardFooter>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                  <Badge
                                    key={i}
                                    variant="secondary"
                                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>
              )}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredDevProjects
                  .filter((p) => !p.featured)
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredProject(index + 100)} // Offset to avoid conflict with featured projects
                      onMouseLeave={() => setHoveredProject(null)}
                      className="group"
                    >
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                          />

                          {hoveredProject === index + 100 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute inset-0 bg-black/70 flex items-center justify-center"
                            >
                              <div className="flex gap-4">
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  asChild
                                  className="hover:scale-105 transition-transform"
                                >
                                  <Link href={project.github} target="_blank">
                                    <span className="flex items-center">
                                      <Github className="mr-2 h-4 w-4" />
                                      Code
                                    </span>
                                  </Link>
                                </Button>
                                {project.deploy ? (
                                  <Button size="sm" className="hover:scale-105 transition-transform">
                                    <Link href={project.demo} target="_blank">
                                      <span className="flex items-center">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                      </span>
                                    </Link>
                                  </Button>
                                ) : (
                                  <Button size="sm" className="hover:scale-105 transition-transform" onClick={handleDemo}>
                                    <span className="flex items-center">
                                      <ExternalLink className="mr-2 h-4 w-4" />
                                      Demo
                                    </span>
                                  </Button>
                                )
                                }
                              </div>
                            </motion.div>
                          )}
                        </div>

                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>

                        <CardFooter>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="hover:bg-primary hover:text-primary-foreground transition-colors"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No development projects found matching your search.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="competitive">
          {filteredCompProjects.length > 0 ? (
            <>
              {filteredCompProjects.some((p) => p.featured) && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {filteredCompProjects
                      .filter((p) => p.featured)
                      .map((project, index) => (
                        <motion.div
                          key={`featured-comp-${index}`}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          onMouseEnter={() => setHoveredProject(index + 200)}
                          onMouseLeave={() => setHoveredProject(null)}
                          className="group"
                        >
                          <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <div className="relative aspect-video overflow-hidden">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                              />

                              {hoveredProject === index + 200 && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="absolute inset-0 bg-black/70 flex items-center justify-center"
                                >
                                  <div className="flex gap-4">
                                    <Button
                                      size="sm"
                                      variant="secondary"
                                      asChild
                                      className="hover:scale-105 transition-transform"
                                    >
                                      <Link href={project.github} target="_blank">
                                        <span className="flex items-center">
                                          <Github className="mr-2 h-4 w-4" />
                                          Code
                                        </span>
                                      </Link>
                                    </Button>
                                    <Button size="sm" asChild className="hover:scale-105 transition-transform">
                                      <Link href={project.demo} target="_blank">
                                        <span className="flex items-center">
                                          <ExternalLink className="mr-2 h-4 w-4" />
                                          Demo
                                        </span>
                                      </Link>
                                    </Button>
                                  </div>
                                </motion.div>
                              )}
                            </div>

                            <CardHeader>
                              <CardTitle>{project.title}</CardTitle>
                              <CardDescription>{project.description}</CardDescription>
                            </CardHeader>

                            <CardFooter>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                  <Badge
                                    key={i}
                                    variant="secondary"
                                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>
              )}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredCompProjects
                  .filter((p) => !p.featured)
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredProject(index + 300)}
                      onMouseLeave={() => setHoveredProject(null)}
                      className="group"
                    >
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                          />

                          {hoveredProject === index + 300 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute inset-0 bg-black/70 flex items-center justify-center"
                            >
                              <div className="flex gap-4">
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  asChild
                                  className="hover:scale-105 transition-transform"
                                >
                                  <Link href={project.github} target="_blank">
                                    <span className="flex items-center">
                                      <Github className="mr-2 h-4 w-4" />
                                      Code
                                    </span>
                                  </Link>
                                </Button>
                                <Button size="sm" asChild className="hover:scale-105 transition-transform">
                                  <Link href={project.demo} target="_blank">
                                    <span className="flex items-center">
                                      <ExternalLink className="mr-2 h-4 w-4" />
                                      Demo
                                    </span>
                                  </Link>
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </div>

                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>

                        <CardFooter>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="hover:bg-primary hover:text-primary-foreground transition-colors"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No competitive programming projects found matching your search.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

