import type { QuestStatus } from "../../types";
import { cn } from "../../lib/cn";

type StatusBadgeProps = {
  status: QuestStatus;
};

const statusClasses: Record<QuestStatus, string> = {
  "Not Started": "border-zinc-700 bg-black text-zinc-500",
  "In Progress": "border-[#a3ff12] bg-black text-[#a3ff12]",
  Completed: "border-white bg-white text-black",
  Archived: "border-zinc-800 bg-zinc-950 text-zinc-600",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex border px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.18em]",
        statusClasses[status],
      )}
    >
      {status}
    </span>
  );
}
