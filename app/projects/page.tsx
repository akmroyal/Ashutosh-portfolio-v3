import { Suspense } from "react"
import ProjectsPageContent from "@/components/projects-page-content"
import Loader from "@/components/loader"

export default function ProjectsPage() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-screen py-12">
        <ProjectsPageContent />
      </main>
    </Suspense>
  )
}

