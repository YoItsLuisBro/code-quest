import { Bell, Command, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-[#090909] px-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3ff12]">
          Command Center
        </p>
        <h1 className="mt-1 font-mono text-2xl font-black tracking-[-0.06em] text-white">
          Developer Quest Terminal
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-11 w-90 items-center gap-3 border border-zinc-700 bg-black px-4">
          <Search className="size-4 text-zinc-500" />
          <span className="font-mono text-sm text-zinc-600">
            Search quests later...
          </span>
        </div>

        <button className="flex size-11 items-center justify-center border border-zinc-700 bg-black text-zinc-400 transition hover:border-[#a3ff12] hover:text-[#a3ff12]">
          <Command className="size-4" />
        </button>

        <button className="relative flex size-11 items-center justify-center border border-zinc-700 bg-black text-zinc-400 transition hover:border-[#a3ff12] hover:text-[#a3ff12]">
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-2 bg-[#a3ff12]" />
        </button>
      </div>
    </header>
  );
}
