import { Suspense } from "react"
import AboutPageContent from "@/components/about-page-content"
import Loader from "@/components/loader"

export default function AboutPage() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-screen py-12">
        <AboutPageContent />
      </main>
    </Suspense>
  )
}

