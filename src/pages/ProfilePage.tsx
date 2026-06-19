import { PageShell } from "../components/layout/PageShell";

export function ProfilePage() {
  return (
    <PageShell
      eyebrow="Profile / Rank"
      title="Developer Identity"
      description="View your developer rank, XP level, streaks, completed boss quests, and future Supabase profile data."
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 border-2 border-[#a3ff12] bg-black p-6 shadow-[8px_8px_0_#a3ff12]">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            Current Rank
          </p>
          <h3 className="mt-4 font-mono text-4xl font-black tracking-[-0.08em] text-white">
            Syntax Squire
          </h3>
          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Rank titles will become dynamic when the XP system is implemented.
          </p>
        </div>

        <div className="col-span-8 border-2 border-zinc-800 bg-[#0b0b0b] p-6 shadow-[8px_8px_0_#1f1f1f]">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            Profile System
          </p>
          <div className="mt-6 flex h-65 items-center justify-center border border-dashed border-zinc-800 bg-black">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Profile data arrives with Supabase auth later
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}