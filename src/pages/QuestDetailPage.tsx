import { useParams } from "react-router";
import { PageShell } from "../components/layout/PageShell";

export function QuestDetailPage() {
  const { questId } = useParams();

  return (
    <PageShell
      eyebrow="Quest Detail"
      title="Quest Intel"
      description="View the full quest brief, notes, solution URL, status controls, completion controls, and quest metadata."
    >
      <div className="border-2 border-zinc-800 bg-[#0b0b0b] p-8 shadow-[8px_8px_0_#1f1f1f]">
        <div className="border border-zinc-800 bg-black p-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            Current Quest ID
          </p>
          <p className="mt-3 font-mono text-3xl font-black text-[#a3ff12]">
            {questId ?? "No quest selected"}
          </p>
          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Dynamic quest detail data will be connected in Phase 8 after we have
            mock data and local quest state.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
