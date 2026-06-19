import { PageShell } from "../components/layout/PageShell";

export function QuestBoardPage() {
  return (
    <PageShell
      eyebrow="Quest Board"
      title="All Coding Quests"
      description="Search, filter, sort, and manage your coding quests by topic, difficulty, status, and XP value."
    >
      <div className="grid grid-cols-4 gap-6">
        {["Not Started", "In Progress", "Completed", "Archived"].map(
          (status) => (
            <div
              key={status}
              className="min-h-105 border-2 border-zinc-800 bg-[#0b0b0b] p-5"
            >
              <div className="mb-5 flex items-center justify-between border-b border-zinc-800 pb-4">
                <h3 className="font-mono text-sm font-black uppercase tracking-[0.2em] text-white">
                  {status}
                </h3>
                <span className="border border-zinc-700 px-2 py-1 font-mono text-xs text-zinc-500">
                  0
                </span>
              </div>

              <div className="flex h-80 items-center justify-center border border-dashed border-zinc-800 bg-black">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Quest cards in Phase 5
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </PageShell>
  );
}
