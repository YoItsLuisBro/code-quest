import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import type { Quest } from "../../types";
import { DifficultyBadge } from "./DifficultyBadge";
import { StatusBadge } from "./StatusBadge";

type NextRecommendedQuestCardProps = {
  quest?: Quest;
};

export function NextRecommendedQuestCard({
  quest,
}: NextRecommendedQuestCardProps) {
  if (!quest) {
    return (
      <article className="border-2 border-zinc-800 bg-[#0b0b0b] p-6 shadow-[8px_8px_0_#1f1f1f]">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
          Next Recommended Quest
        </p>

        <h3 className="mt-3 font-mono text-3xl font-black tracking-[-0.06em] text-white">
          No quests available
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Create a new quest to continue your progression.
        </p>

        <Link
          to="/quests/new"
          className="mt-6 inline-flex items-center gap-2 border border-[#a3ff12] bg-[#a3ff12] px-4 py-3 font-mono text-sm font-black uppercase tracking-[0.2em] text-black"
        >
          Create Quest
          <ArrowRight className="size-4" />
        </Link>
      </article>
    );
  }

  return (
    <article className="border-2 border-zinc-800 bg-[#0b0b0b] p-6 shadow-[8px_8px_0_#1f1f1f]">
      <div className="flex items-start justify-between gap-8">
        <div>
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-[#a3ff12]" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Next Recommended Quest
            </p>
          </div>

          <h3 className="mt-3 font-mono text-3xl font-black tracking-[-0.06em] text-white">
            {quest.title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            {quest.description}
          </p>

          <div className="mt-5 flex items-center gap-2">
            <DifficultyBadge difficulty={quest.difficulty} />
            <StatusBadge status={quest.status} />
            <span className="border border-zinc-700 px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
              {quest.topic}
            </span>
          </div>
        </div>

        <div className="border border-[#a3ff12] px-3 py-2 font-mono text-xs font-black uppercase text-[#a3ff12]">
          +{quest.xp} XP
        </div>
      </div>

      <Link
        to={`/quests/${quest.id}`}
        className="mt-6 inline-flex items-center gap-2 border border-[#a3ff12] bg-[#a3ff12] px-4 py-3 font-mono text-sm font-black uppercase tracking-[0.2em] text-black transition hover:translate-x-1 hover:translate-y-1"
      >
        Start Recommended Quest
        <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}
