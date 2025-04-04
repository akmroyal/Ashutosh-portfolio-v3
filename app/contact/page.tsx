import { Suspense } from "react"
import ContactForm from "@/components/contact-form"
import Loader from "@/components/loader"

export default function ContactPage() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-screen py-12">
        <ContactForm />
      </main>
    </Suspense>
  )
}

