import Image from "next/image"
import Link from "next/link"
import IMXLogo from "../public/imx.png"
import Logo from "../public/stripy-tp.png"
// import { passportInstance } from '../utils/passport';

export default function Header() {

  const passportAlert = () => {
    alert('Passport integration coming soon.\nSurprise for those who get here early.')
  }

  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center gap-2 group p-0">
        <Image
        src={Logo}
        alt={'IMX Watcher'}
        width={60}
        height={60}
        className="inline-block transition-transform duration-200 group-hover:animate-pulse cursor-pointer mt-1"
        />
        <Link href='/' className="text-white/80 font-semibold text-xl group-hover:animate-pulse">IMX Watcher</Link>
      </div>
      {/* <nav className="flex items-center space-x-4 md:space-x-8">
        <a
          href="/about"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          About
        </a>
        <a
          href="/docs"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Documentation
        </a>
        <a
          href="/plus"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-yellow-400/20 transition-all duration-200"
        >
          Watcher+
        </a>
      </nav> */}

      {/* Login Button Group with Arrow */}
      <div id="gooey-btn" className="relative flex items-center group">
        <button onClick={passportAlert} className="px-4 py-6 sm:py-2 rounded-full group bg-white text-black hover:bg-slate-800 hover:text-white hover:scale-105 font-normal text-xs transition-all duration-300 cursor-pointer h-8 flex items-center z-10">
          <span className="inline-flex items-center text-wrap md:text-nowrap">
            <Image
              src={IMXLogo}
              alt={"IMX Logo"}
              height={18}
              width={18}
              className="invert-100 inline-block mr-2 group-hover:group-enabled:invert-0 transition-all duration-300"
            />
            Login with Passport
          </span>
        </button>
      </div>
    </header>
  )
}
