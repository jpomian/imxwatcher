"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import IMXLogo from "../public/imx.png"

export default function IMXCircle() {
  return (
    <div className="absolute bottom-8 right-8 z-30">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <Image 
        src={IMXLogo}
        alt={"IMX Logo"}
        height={50}
        width={50}
        />

        {/* Rotating Text Around the Pulsing Border */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ transform: "scale(1.6)" }}
        >
          <defs>
            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text className="text-sm fill-white/80 instrument">
            <textPath href="#circle" startOffset="0%">
              Works for zkEVM •Works for zkEVM •
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  )
}
