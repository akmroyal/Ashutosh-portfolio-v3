"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiCodechef, SiCodeforces, SiCodingninjas, SiGeeksforgeeks, SiLeetcode } from "react-icons/si"
import { FaBlogger, FaDev, FaHackerrank, FaMedium } from "react-icons/fa"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Copy,
  ExternalLink,
  BookOpen,
  FileText,
  Award,
  Briefcase,
  Code,
} from "lucide-react"
import QRCode from "./qr-code"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function ProfileContent() {
  const [selectedLink, setSelectedLink] = useState<{
    title: string
    url: string
    icon: React.ReactNode
  } | null>(null)

  const profiles = {
    social: [
      {
        title: "GitHub",
        url: "https://github.com/akmroyal",
        icon: <Github className="h-6 w-6" />,
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/ashu-maurya-9026xxxx/",
        icon: <Linkedin className="h-6 w-6" />,
      },
      {
        title: "Twitter",
        url: "https://x.com/akm_royals",
        icon: <Twitter className="h-6 w-6" />,
      },
      // {
      //   title: "Portfolio",
      //   url: "https://yourportfolio.com",
      //   icon: <Globe className="h-6 w-6" />,
      // },
      {
        title: "Email",
        url: "mailto:ashutosh.maurya2285@gmail.com",
        icon: <Mail className="h-6 w-6" />,
      },
    ],
    professional: [
      {
        title: "CV",
        url: "https://drive.google.com/file/d/1g-HFdWDeUtshGh_tnRn5bcGzPBX5MlEv/view?usp=sharing",
        icon: <FileText className="h-6 w-6" />,
      },
      {
        title: "Certifications",
        url: "https://www.linkedin.com/in/ashu-maurya-9026xxxx/details/featured/",
        icon: <Award className="h-6 w-6" />,
      },
      // {
      //   title: "Work History",
      //   url: "https://yourportfolio.com/work",
      //   icon: <Briefcase className="h-6 w-6" />,
      // },
    ],
    //
    coding: [
      {
        title: "LeetCode",
        url: "https://leetcode.com/u/ashu_maurya/",
        icon: <SiLeetcode className="h-6 w-6" />,
      },
      {
        title: "HackerRank",
        url: "https://www.hackerrank.com/profile/ashutoshmaxxxx",
        icon: <FaHackerrank className="h-6 w-6" />,
      },
      {
        title: "CodeForces",
        url: "https://codeforces.com/profile/Akm_royal",
        icon: <SiCodeforces className="h-6 w-6" />,
      },
      {
        title: "Coding Chef",
        url: "https://www.codechef.com/users/akm_royal",
        icon: <SiCodechef className="h-6 w-6" />,
      },
      {
        title: "CodingNinjas",
        url: "https://www.naukri.com/code360/profile/ashuMaurya",
        icon: <SiCodingninjas className="h-6 w-6" />,
      },
      {
        title: "GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/user/ashutosh3m5c/",
        icon: <SiGeeksforgeeks className="h-6 w-6" />,
      },
    ],
    blog: [
      {
        title: "Personal Blog",
        url: "https://akmroyal.blogspot.com/",
        icon: <FaBlogger className="w-6 h-6" />,
      },
      {
        title: "Medium",
        url: "https://medium.com/@ashutoshmaxxxx",
        icon: <FaMedium className="h-6 w-6" />,
      },
      {
        title: "Dev.to",
        url: "https://dev.to/akmroyal",
        icon: <FaDev className="w-6 h-6" />,
      },
    ],
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Link copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative group cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-primary/20 opacity-0 group-hover:opacity-70 blur-md transition-all duration-500" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-primary">
            <Image
              src="/profilImg.png"
              alt="Profile"
              width={400}
              height={400}
              className="object-cover transition-all duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-2">Ashutosh Maurya</h1>
          <p className="text-xl text-muted-foreground mb-4">Fullstack Developer & Java Programmer</p>
          <p className="max-w-2xl text-muted-foreground">
            Passionate about creating elegant solutions to complex problems. Experienced in Java, DSA, and modern web
            technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-4xl mb-12"
        >
          <Tabs defaultValue="social" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="social" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>Social</span>
                </TabsTrigger>
                <TabsTrigger value="professional" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Professional</span>
                </TabsTrigger>
                <TabsTrigger value="coding" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span>Coding</span>
                </TabsTrigger>
                <TabsTrigger value="blog" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Blog</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="social">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {profiles.social.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className="cursor-pointer h-full hover:shadow-md transition-all duration-300 hover:border-primary"
                      onClick={() => setSelectedLink(link)}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                        <div className="mb-4 text-primary">{link.icon}</div>
                        <p className="font-medium text-center">{link.title}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="professional">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {profiles.professional.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className="cursor-pointer h-full hover:shadow-md transition-all duration-300 hover:border-primary"
                      onClick={() => setSelectedLink(link)}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                        <div className="mb-4 text-primary">{link.icon}</div>
                        <p className="font-medium text-center">{link.title}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="coding">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {profiles.coding.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className="cursor-pointer h-full hover:shadow-md transition-all duration-300 hover:border-primary"
                      onClick={() => setSelectedLink(link)}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                        <div className="mb-4 text-primary">{link.icon}</div>
                        <p className="font-medium text-center">{link.title}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="blog">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {profiles.blog.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className="cursor-pointer h-full hover:shadow-md transition-all duration-300 hover:border-primary"
                      onClick={() => setSelectedLink(link)}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                        <div className="mb-4 text-primary">{link.icon}</div>
                        <p className="font-medium text-center">{link.title}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <Dialog open={!!selectedLink} onOpenChange={(open) => !open && setSelectedLink(null)}>
        <DialogContent className="sm:max-w-md z-[100] cursor-pointer">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedLink?.icon}
              <span>{selectedLink?.title}</span>
            </DialogTitle>
            <DialogDescription>Scan the QR code or use the buttons below to access the link.</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-4 rounded-lg mb-6 hover:shadow-lg transition-all duration-300"
            >
              {selectedLink && <QRCode value={selectedLink.url} size={200} />}
            </motion.div>

            <div className="flex gap-4 w-full">
              <Button
                variant="outline"
                className="flex-1 group"
                onClick={() => selectedLink && copyToClipboard(selectedLink.url)}
              >
                <Copy className="mr-2 h-4 w-4 group-hover:scale-125 transition-transform" />
                Copy Link
              </Button>

              <Button className="flex-1 group" onClick={() => selectedLink && window.open(selectedLink.url, "_blank")}>
                <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-125 transition-transform" />
                Visit
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}