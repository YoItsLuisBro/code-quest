import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { Quest } from "../../types";
import { DifficultyBadge } from "./DifficultyBadge";
import { StatusBadge } from "./StatusBadge";

type QuestPreviewCardProps = {
  quest: Quest;
};

export function QuestPreviewCard({ quest }: QuestPreviewCardProps) {
  return (
    <article className="border border-zinc-800 bg-black p-4 transition hover:border-[#a3ff12]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <DifficultyBadge difficulty={quest.difficulty} />
          <StatusBadge status={quest.status} />
        </div>

        <span className="font-mono text-xs font-black text-[#a3ff12]">
          +{quest.xp} XP
        </span>
      </div>

      <h4 className="font-mono text-lg font-black tracking-tighter text-white">
        {quest.title}
      </h4>

      <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-500">
        {quest.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-zinc-900 pt-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
          {quest.topic}
        </span>

        <Link
          to={`/quests/${quest.id}`}
          className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.18em] text-[#a3ff12]"
        >
          Open
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
