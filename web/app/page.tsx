"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import IMXCircle from "@/components/imx-circle"
import ShaderBackground from "@/components/shader-background"

export default function ShaderShowcase() {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
      <IMXCircle />
    </ShaderBackground>
  )
}
