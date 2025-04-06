import { Suspense } from "react"
import ProfileContent from "@/components/profile-content"
import Loader from "@/components/loader"

export default function ProfilePage() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-screen py-12">
        <ProfileContent />
      </main>
    </Suspense>
  )
}

