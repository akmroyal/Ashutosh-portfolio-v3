"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send, RefreshCw, CheckCircle, Mail, Phone, MapPin, Eye } from "lucide-react"
import Link from "next/link"
import Swal from "sweetalert2"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showContact, setShowContact] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Configure EmailJS with your service ID, template ID, and public key
    emailjs
      .send(
        "service_rw2cg6l", // Replace with your EmailJS service ID
        "template_zzluat8", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "amvzvRyWQ_Ao_e3jL", // Replace with your EmailJS public key
      )
      .then(() => {
        setFormState("success")
        Swal.fire({
          title: "Message Sent!",
          text: "Thank you for reaching out. I will get back to you soon!",
          icon: "success",
          confirmButtonColor: "hsl(var(--primary))",
        })
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
          setFormState("idle")
        }, 1000)
      })
      .catch((error) => {
        console.error("Error sending email:", error)
        setFormState("error")
        Swal.fire({
          title: "Error!",
          text: "There was a problem sending your message. Please try again later.",
          icon: "error",
          confirmButtonColor: "hsl(var(--primary))",
        })
        setTimeout(() => {
          setFormState("idle")
        }, 1000)
      })
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const handleShowContact = () => {
    Swal.fire({
      title: "Important Notice",
      text: "Please use this contact information for professional purposes only.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "hsl(var(--primary))",
      cancelButtonColor: "",
      confirmButtonText: "I Understand",
    }).then((result) => {
      if (result.isConfirmed) {
        setShowContact(true)
      }
    })
  }

  return (
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
            <p className="text-muted-foreground">
              Have a project in mind or want to discuss a potential collaboration? Fill out the form and I'll get back
              to you as soon as possible.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">ashutosh.maurya2285@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">WhatsApp</h3>
                {showContact ? (
                  <Link href="https://bit.ly/3rkZVcU" className="text-muted-foreground" target="_blank">
                    https://bit.ly/3rkZVcU
                  </Link>
                ) : (
                  <Button variant="outline" size="sm" onClick={handleShowContact} className="mt-1">
                    <span className="flex items-center">
                      <Eye className="mr-2 h-4 w-4" />
                      View Contact Number
                    </span>
                  </Button>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Remote / Worldwide</p>
              </div>
            </div>
          </div>
          
          {/* No need of that now */}
          {/* <div className="mt-8">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
                <CardDescription>When you can expect to hear back from me</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/50">
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll respond as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="w-full" disabled={formState !== "idle"}>
                    {formState === "idle" && (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                    {formState === "submitting" && (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    )}
                    {formState === "success" && (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Sent Successfully
                      </>
                    )}
                    {formState === "error" && (
                      <>
                        <span className="mr-2">❌</span>
                        Error Sending
                      </>
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    disabled={formState !== "idle"}
                    className="w-full"
                  >
                    Clear
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}