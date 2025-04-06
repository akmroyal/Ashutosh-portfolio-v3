"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Globe, Cpu, Layers, GitBranch, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsPageContent() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      items: [
        { name: "Java", level: 95 },
        { name: "JavaScript", level: 80 },
        // { name: "TypeScript", level: 85 },
        { name: "C/C++", level: 90 },
        { name: "Python", level: 60 },
      ],
    },
    {
      category: "Data Structures & Algorithms",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      items: [
        { name: "Arrays & Strings", level: 85 },
        { name: "Linked Lists", level: 90 },
        { name: "Trees & Graphs", level: 40 },
        { name: "Dynamic Programming", level: 30 },
        { name: "Sorting Algorithms", level: 90 },
        { name: "Graph Algorithms", level: 35 },
      ],
    },
    {
      category: "Frontend Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      items: [
        { name: "HTML/CSS", level: 95 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 20 },
        { name: "Redux", level: 55 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 25 },
        { name: "Responsive Design", level: 95 },
      ],
    },
    {
      category: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      items: [
        { name: "Node.js", level: 60 },
        { name: "Express.js", level: 40 },
        // { name: "Spring Boot", level: 85 },
        { name: "RESTful APIs", level: 35 },
        // { name: "GraphQL", level: 80 },
        // { name: "Microservices", level: 85 },
      ],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      items: [
        { name: "MySQL", level: 90 },
        // { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 90 },
        // { name: "Redis", level: 80 },
        // { name: "ORM (Hibernate, Sequelize)", level: 85 },
        // { name: "Database Design", level: 90 },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 45 },
        // { name: "CI/CD", level: 80 },
        { name: "AWS(Basic)", level: 40 },
        { name: "Linux", level: 10 },
        // { name: "Agile Methodologies", level: 85 },
      ],
    },
    {
      category: "Architecture",
      icon: <Layers className="h-8 w-8 text-primary" />,
      items: [
        { name: "Operating System", level: 45 },
        { name: "Object Oriented Programming", level: 25 },
        // { name: "Design Patterns", level: 50 },
        { name: "System Design", level: 65 },
        { name: "API Design", level: 30 },
        // { name: "Scalable Architecture", level: 80 },
      ],
    },
    // {
    //   category: "Mobile Development",
    //   icon: <Smartphone className="h-8 w-8 text-primary" />,
    //   items: [
    //     { name: "React Native", level: 85 },
    //     { name: "Android (Java)", level: 80 },
    //     { name: "Responsive Web Apps", level: 95 },
    //     { name: "Mobile UI/UX", level: 85 },
    //     { name: "App Performance", level: 80 },
    //     { name: "Cross-platform Development", level: 85 },
    //   ],
    // },
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
    <div className="container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          My <span className="text-primary">Skills</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across various domains of software
          development.
        </p>
      </motion.div>

      <Tabs defaultValue="grid" className="w-full mb-12">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="detailed">Detailed View</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="grid">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skillCategories.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <h3 className="font-semibold text-lg">{skill.category}</h3>
                </div>

                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      • {item.name}
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="detailed">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-4">
                  {category.icon}
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6">
                      {category.items.map((item, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{item.name}</span>
                            <span className="text-muted-foreground">{item.level}%</span>
                          </div>
                          <Progress value={item.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

