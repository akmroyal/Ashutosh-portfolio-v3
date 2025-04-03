import { Suspense } from "react"
import Hero from "@/components/hero"
import Loader from "@/components/loader"

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-screen">
        <Hero />
      </main>
    </Suspense>
  )
}

