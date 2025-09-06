"use client"

import Header from "@/components/header";
import ShaderBackground from "@/components/shader-background";
import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <ShaderBackground>
      <Header />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-2xl w-full px-6">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="font-mono text-6xl md:text-8xl text-white/90 font-bold tracking-wider">404</h1>
            <div className="h-1 w-16 bg-white/60 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl text-white font-semibold">Page Not Found</h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-md mx-auto">
              The page you are looking for does not exist or has been moved to a different location.
            </p>
          </div>

         

          <div className="pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-3">From here:</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <Link href="/" className="text-white/80 hover:text-white underline underline-offset-2">
                Go back to Homepage
              </Link>
              <span className="text-white/40">•</span>
              <Link href="https://discord.gg/3FUA5kv7QA" className="text-white/80 hover:text-white underline underline-offset-2">
                Tell us on Discord #support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ShaderBackground>
  )
}