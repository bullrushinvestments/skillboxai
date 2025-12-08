import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillBoxAI',
  description: 'SkillBoxAI combines subscription box services with community platforms to deliver personalized professional development materials and networking opportunities for niche professionals.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillBoxAI</h1>
      <p className="mt-4 text-lg">SkillBoxAI combines subscription box services with community platforms to deliver personalized professional development materials and networking opportunities for niche professionals.</p>
    </main>
  )
}
