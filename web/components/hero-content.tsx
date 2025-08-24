"use client"

export default function HeroContent() {
  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-xl w-full">
      <div className="text-right">
        <div
          className="inline-flex justify-center px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm mr-2 mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <span className="text-white/90 text-xs font-light relative z-10">📜 Try for free!</span>
        </div>
      </div>

      <div className="text-center tracking-tight font-light text-white">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 mb-3">
          <span className="font-medium">IMX Watcher</span>
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
          className="relative px-10 py-3 mr-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-slate-800/70 cursor-pointer group inline-block text-center no-underline"
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
        className="relative px-10 py-3 ml-3 rounded-full bg-indigo-400/50 border border-black/30 text-white font-normal text-xs transition-all duration-200 hover:bg-indigo-400/30 hover:border-white/50 cursor-pointer group inline-block text-center no-underline">
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
