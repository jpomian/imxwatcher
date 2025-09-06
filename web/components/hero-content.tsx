"use client"

export default function HeroContent() {
  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-2xl w-full">
      <div className="text-right">
        <div
          className="inline-flex justify-center items-center gap-1 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm mr-2 mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="white"
            className="mr-1"
          >
            <path d="M9.197 10a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm-2.382 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm-1.581 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" />
            <path d="M4.125 0h15.75a4.11 4.11 0 0 1 2.92 1.205A4.11 4.11 0 0 1 24 4.125c0 1.384-.476 2.794-1.128 4.16-.652 1.365-1.515 2.757-2.352 4.104l-.008.013c-.849 1.368-1.669 2.691-2.28 3.97-.614 1.283-.982 2.45-.982 3.503a2.625 2.625 0 1 0 4.083-2.183.75.75 0 1 1 .834-1.247A4.126 4.126 0 0 1 19.875 24H4.5a4.125 4.125 0 0 1-4.125-4.125c0-2.234 1.258-4.656 2.59-6.902.348-.586.702-1.162 1.05-1.728.8-1.304 1.567-2.553 2.144-3.738H3.39c-.823 0-1.886-.193-2.567-1.035A3.647 3.647 0 0 1 0 4.125 4.125 4.125 0 0 1 4.125 0ZM15.75 19.875c0-1.38.476-2.786 1.128-4.15.649-1.358 1.509-2.743 2.343-4.086l.017-.028c.849-1.367 1.669-2.692 2.28-3.972.614-1.285.982-2.457.982-3.514A2.615 2.615 0 0 0 19.875 1.5a2.625 2.625 0 0 0-2.625 2.625c0 .865.421 1.509 1.167 2.009A.75.75 0 0 1 18 7.507H7.812c-.65 1.483-1.624 3.069-2.577 4.619-.334.544-.666 1.083-.98 1.612-1.355 2.287-2.38 4.371-2.38 6.137A2.625 2.625 0 0 0 4.5 22.5h12.193a4.108 4.108 0 0 1-.943-2.625ZM1.5 4.125c-.01.511.163 1.008.487 1.403.254.313.74.479 1.402.479h12.86a3.648 3.648 0 0 1-.499-1.882 4.11 4.11 0 0 1 .943-2.625H4.125A2.625 2.625 0 0 0 1.5 4.125Z" />
          </svg>
          <span className="text-white/90 text-xs font-mono relative z-10">
            Available for free!
          </span>
        </div>
      </div>

      <div className="text-center tracking-tight font-light text-white">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl md:leading-16 mb-3">
          <span className="font-medium">Gain <span className="font-bold">instant</span> market edge</span>
        </h1>

        {/* Description */}
        <p className="text-md font-light text-white/70 leading-relaxed">
          Setup personal helper that fetches fresh listings of your liking directly from blockchain.
        </p>
        <p className="text-md font-light text-white/70 mb-4 leading-relaxed">
          Configure when and how you get notified whenever a listing is posted.
        </p>
        <p className="text-sm font-bold text-white/70 mt-2 mb-4 leading-relaxed">
          Built on top of Immutable zkEVM blockchain. All the power encapsulated as a Telegram bot.
        </p>

        {/* Buttons */}
        <a
          href="https://web.telegram.org/k/#@gogwatcher_bot"
          className="relative px-14 py-3 mr-6 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-slate-800/70 cursor-pointer group inline-block text-center no-underline"
        >
          Start a bot
          <span className="flex items-center justify-center text-[10px] text-white/70 mt-1">
            on
            <svg
              className="w-3 h-3 ml-2 mr-1"
              viewBox="0 0 26 26"
              fill="currentColor"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            Telegram
          </span>
        </a>
        <a
          href="https://discord.gg/3FUA5kv7QA"
          className="relative px-14 py-3 ml-6 rounded-full bg-indigo-400/50 border border-black/30 text-white font-normal text-sm transition-all duration-200 hover:bg-indigo-400/30 hover:border-white/50 cursor-pointer group inline-block text-center no-underline">
          Join us
          <span className="flex items-center justify-center text-[10px] text-white/70 mt-1">
            on
            <svg
              className="w-3 h-3 mx-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
            </svg>
            Discord
          </span>
        </a>
      </div>
    </main>
  )
}
