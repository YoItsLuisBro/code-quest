import type { QuestDifficulty } from "../../types";
import { cn } from "../../lib/cn";

type DifficultyBadgeProps = {
  difficulty: QuestDifficulty;
};

const difficultyClasses: Record<QuestDifficulty, string> = {
  Beginner: "border-zinc-600 bg-zinc-950 text-zinc-300",
  Intermediate: "border-[#a3ff12] bg-[#a3ff12] text-black",
  Advanced: "border-white bg-white text-black",
  Boss: "border-[#a3ff12] bg-black text-[#a3ff12] shadow-[4px_4px_0_#a3ff12]",
};

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex border px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.18em]",
        difficultyClasses[difficulty],
      )}
    >
      {difficulty}
    </span>
  );
}
