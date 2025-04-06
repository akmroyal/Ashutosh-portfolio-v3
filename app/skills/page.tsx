import { Suspense } from "react"
import SkillsPageContent from "@/components/skills-page-content"
import Loader from "@/components/loader"

export default function SkillsPage() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-screen py-12">
        <SkillsPageContent />
      </main>
    </Suspense>
  )
}

