import { Link } from "react-router";
import { PageShell } from "../components/layout/PageShell";

export function NotFoundPage() {
  return (
    <PageShell
      eyebrow="404"
      title="Quest Not Found"
      description="The route you entered does not exist in the CODE//QUESTS command center."
    >
      <div className="border-2 border-zinc-800 bg-[#0b0b0b] p-8 shadow-[8px_8px_0_#1f1f1f]">
        <Link
          to="/"
          className="inline-flex border border-[#a3ff12] bg-[#a3ff12] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.2em] text-black"
        >
          Return to Dashboard
        </Link>
      </div>
    </PageShell>
  );
}
