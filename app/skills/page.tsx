import Navbar01 from '@/components/Navbars/Navbar01'
import SkillSection from '@/components/skill-section/SkillSection'
import React from 'react'

export default function page() {
  return (
    <main className="w-full z-10 relative min-h-screen  flex flex-col gap-20 ">
    <div className="w-full relative flex flex-col gap-20 px-0 md:px-10 py-8">
      <Navbar01 />
      <div className="w-full min-h-[100vh] ">
        <SkillSection />
      </div>
    </div>
  </main>
  )
}
