import { PageShell } from "../components/layout/PageShell";

export function ProgressPage() {
  return (
    <PageShell
      eyebrow="Progress / Stats"
      title="Developer Progress"
      description="Analyze XP totals, completion count, topic breakdown, difficulty breakdown, recent completions, and rank progress."
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="h-80 border-2 border-zinc-800 bg-[#0b0b0b] p-6 shadow-[8px_8px_0_#1f1f1f]">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            XP Analytics
          </p>
          <div className="mt-6 flex h-55 items-center justify-center border border-dashed border-zinc-800 bg-black">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Stats arrive in Phase 9
            </p>
          </div>
        </div>

        <div className="h-80 border-2 border-zinc-800 bg-[#0b0b0b] p-6 shadow-[8px_8px_0_#1f1f1f]">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            Topic Breakdown
          </p>
          <div className="mt-6 flex h-55 items-center justify-center border border-dashed border-zinc-800 bg-black">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Charts arrive in Phase 9
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
