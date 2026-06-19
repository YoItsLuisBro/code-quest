import { ArrowRight, Flame, Skull, Trophy, Zap } from "lucide-react";
import { Link } from "react-router";
import { PageShell } from "../components/layout/PageShell";

export function DashboardPage() {
  return (
    <PageShell
      eyebrow="Dashboard"
      title="Quest Command Deck"
      description="Track your coding progress, active quests, XP, rank progression, boss challenges, and recommended next moves."
    >
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-8 grid grid-cols-3 gap-6">
          <div className="border-2 border-zinc-800 bg-black p-5 shadow-[6px_6px_0_#1f1f1f]">
            <Zap className="size-6 text-[#a3ff12]" />
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Total XP
            </p>
            <p className="mt-2 font-mono text-4xl font-black text-white">360</p>
          </div>

          <div className="border-2 border-zinc-800 bg-black p-5 shadow-[6px_6px_0_#1f1f1f]">
            <Trophy className="size-6 text-[#a3ff12]" />
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Completed
            </p>
            <p className="mt-2 font-mono text-4xl font-black text-white">4</p>
          </div>

          <div className="border-2 border-zinc-800 bg-black p-5 shadow-[6px_6px_0_#1f1f1f]">
            <Flame className="size-6 text-[#a3ff12]" />
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Streak
            </p>
            <p className="mt-2 font-mono text-4xl font-black text-white">
              3 Days
            </p>
          </div>

          <div className="col-span-3 border-2 border-zinc-800 bg-[#0b0b0b] p-6 shadow-[8px_8px_0_#1f1f1f]">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Next Recommended Quest
                </p>
                <h3 className="mt-3 font-mono text-3xl font-black tracking-[-0.06em] text-white">
                  Build a reusable Button component
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                  Recommended because it improves your component architecture
                  and prepares the app for reusable UI patterns.
                </p>
              </div>

              <div className="border border-[#a3ff12] px-3 py-2 font-mono text-xs uppercase text-[#a3ff12]">
                +75 XP
              </div>
            </div>

            <Link
              to="/quests"
              className="mt-6 inline-flex items-center gap-2 border border-[#a3ff12] bg-[#a3ff12] px-4 py-3 font-mono text-sm font-black uppercase tracking-[0.2em] text-black transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              View Quest Board
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        <aside className="col-span-4 space-y-6">
          <div className="border-2 border-[#a3ff12] bg-black p-6 shadow-[8px_8px_0_#a3ff12]">
            <Skull className="size-8 text-[#a3ff12]" />
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Boss Quest Preview
            </p>
            <h3 className="mt-3 font-mono text-2xl font-black tracking-[-0.06em] text-white">
              Build a full CRUD quest system
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Larger milestone quests will live here. Boss quests are worth more
              XP and represent portfolio-level challenges.
            </p>
          </div>

          <div className="border-2 border-zinc-800 bg-[#0b0b0b] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Developer Rank
            </p>
            <h3 className="mt-3 font-mono text-3xl font-black tracking-[-0.06em] text-white">
              Syntax Squire
            </h3>
            <div className="mt-5 h-3 border border-zinc-700 bg-black">
              <div className="h-full w-[36%] bg-[#a3ff12]" />
            </div>
            <p className="mt-3 font-mono text-xs text-zinc-500">
              640 XP until next rank
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
