import { PageShell } from "../components/layout/PageShell";

export function CreateQuestPage() {
  return (
    <PageShell
      eyebrow="Create Quest"
      title="Forge a New Quest"
      description="Create a new coding challenge with a title, difficulty, topic, XP value, estimated time, notes, and solution link."
    >
      <div className="border-2 border-zinc-800 bg-[#0b0b0b] p-8 shadow-[8px_8px_0_#1f1f1f]">
        <div className="flex h-105 items-center justify-center border border-dashed border-zinc-800 bg-black">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-zinc-600">
            Create quest form arrives in Phase 6
          </p>
        </div>
      </div>
    </PageShell>
  );
}
