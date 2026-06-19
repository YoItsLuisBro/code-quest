import { ArrowUpRight, Clock3, FileText } from "lucide-react";
import { Link } from "react-router";
import type { Quest } from "../../types";
import { DifficultyBadge } from "./DifficultyBadge";
import { StatusBadge } from "./StatusBadge";

type QuestBoardCardProps = {
  quest: Quest;
};

export function QuestBoardCard({ quest }: QuestBoardCardProps) {
  return (
    <article className="group border border-zinc-800 bg-black p-4 transition hover:border-[#a3ff12] hover:shadow-[5px_5px_0_#a3ff12]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <DifficultyBadge difficulty={quest.difficulty} />
          <StatusBadge status={quest.status} />
        </div>

        <span className="shrink-0 border border-[#a3ff12] px-2 py-1 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#a3ff12]">
          +{quest.xp} XP
        </span>
      </div>

      <h3 className="mt-4 font-mono text-lg font-black leading-6 tracking-tighter text-white">
        {quest.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        {quest.description}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="border border-zinc-900 bg-[#050505] p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Topic
          </p>
          <p className="mt-1 font-mono text-xs font-black text-zinc-300">
            {quest.topic}
          </p>
        </div>

        <div className="border border-zinc-900 bg-[#050505] p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Time
          </p>
          <p className="mt-1 font-mono text-xs font-black text-zinc-300">
            {quest.estimatedTime}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between borderr-t border-zinc-900 pt-4">
        <div className="flex items-center gap-3 text-zinc-600">
          <div className="flex items-center gap-1.5">
            <Clock3 className="size-3.5" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              {quest.createdAt.slice(0, 10)}
            </span>
          </div>

          {quest.notes ? (
            <div className="flex items-center gap-1.5">
              <FileText className="size-3.5" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                Notes
              </span>
            </div>
          ) : null}
        </div>

        <Link
          to={`/quests/${quest.id}`}
          className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.18em] text-[#a3ff12] transition group-hover:translate-x-1"
        >
          Open
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
