import React from 'react'
import Navber from '@/Components/Navber'
import Herosection from '@/Components/Herosection'

export default function page() {
  return (
    <main
      className="min-h-screen antialiased bg-black/[0.96]   "
    >
      <Navber />
      <Herosection/>
    </main>
  )
}
