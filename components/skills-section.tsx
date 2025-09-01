"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Server, Globe, Cpu, Layers, GitBranch, Smartphone } from "lucide-react"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    // {
    //   category: "Programming Languages",
    //   icon: <Code className="h-8 w-8 text-primary" />,
    //   items: ["Java", "JavaScript", "C/C++", "Python (Basic)"],
    // },
    {
      category: "Programming Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      items: [
        "Java",
        "JavaScript",
        "TypeScript",
        "C/C++",
        "Python",
      ],
    },
    {
      category: "Data Structures & Algorithms",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      items: [
        "Arrays & Strings",
        "Linked Lists",
        "Trees & Graphs",
        "Dynamic Programming",
        "Sorting Algorithms",
        "Graph Algorithms",
      ],
    },
    {
      category: "Frontend Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      items: [
        "HTML/CSS",
        "React.js",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "Material UI",
        "Responsive Design",
      ],
    },
    {
      category: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      items: [
        "Node.js",
        "Express.js",
        "Supabase",
        "Firebase",
        "RESTful APIs",
      ],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        // "Redis",
        // "ORM (Hibernate, Sequelize)",
        // "Database Design",
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      items: [
        "Git",
        "Docker",
        "CI/CD",
        "AWS(Basic)",
        "Linux",
        // "Agile Methodologies",
      ],
    },
    {
      category: "Architecture",
      icon: <Layers className="h-8 w-8 text-primary" />,
      items: [
        "Operating System",
        "Object Oriented Programming",
        // "Design Patterns",
        "System Design",
        "API Design",
        // "Scalable Architecture",
      ],
    },
    {
      category: "Development Tools",
      icon: <Server className="h-8 w-8 text-primary" />,
      items: [
        "WordPress",
        "Figma & Bubble",
        "Postman",
        "Canva",
        "Shopify",
        "VS Code",
      ],
    },
    {
      category: "AI Tools & Platforms",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      items: [
        "ChatGPT",
        "GitHub Copilot",
        "MidJourney",
        "DALL·E",
        "Perplexity",
        "Grok",
      ],
    },
  ]

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
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical skills I've acquired through years of practice, projects, and continuous
            learning.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="font-semibold text-lg">{skill.category}</h3>
              </div>

              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>

              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

