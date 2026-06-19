import { Skull } from "lucide-react";
import { Link } from "react-router";
import type { Quest } from "../../types";
import { DifficultyBadge } from "./DifficultyBadge";
import { StatusBadge } from "./StatusBadge";

type BossQuestCardProps = {
  quest?: Quest;
};

export function BossQuestCard({ quest }: BossQuestCardProps) {
  if (!quest) {
    return (
      <article className="border-2 border-[#a3ff12] bg-black p-6 shadow-[8px_8px_0_#a3ff12]">
        <Skull className="size-8 text-[#a3ff12]" />

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
          Boss Quest Preview
        </p>

        <h3 className="mt-3 font-mono text-2xl font-black tracking-[-0.06em] text-white">
          No boss quest found
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Boss quests are larger coding challenges worth major XP.
        </p>
      </article>
    );
  }

  return (
    <article className="border-2 border-[#a3ff12] bg-black p-6 shadow-[8px_8px_0_#a3ff12]">
      <div className="flex items-start justify-between gap-4">
        <Skull className="size-8 text-[#a3ff12]" />

        <span className="font-mono text-xs font-black text-[#a3ff12]">
          +{quest.xp} XP
        </span>
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
        Boss Quest Preview
      </p>

      <h3 className="mt-3 font-mono text-2xl font-black tracking-[-0.06em] text-white">
        {quest.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {quest.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <DifficultyBadge difficulty={quest.difficulty} />
        <StatusBadge status={quest.status} />
      </div>

      <Link
        to={`/quests/${quest.id}`}
        className="mt-6 inline-flex border border-[#a3ff12] px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#a3ff12] transition hover:bg-[#a3ff12] hover:text-black"
      >
        Inspect Boss Quest
      </Link>
    </article>
  );
}
