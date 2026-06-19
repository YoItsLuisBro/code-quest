import { RotateCcw, Search } from "lucide-react";
import {
  QUEST_DIFFICULTIES,
  QUEST_STATUSES,
  QUEST_TOPICS,
  type QuestDifficulty,
  type QuestStatus,
  type QuestTopic,
} from "../../types";
import type {
  QuestDifficultyFilter,
  QuestFilters,
  QuestStatusFilter,
  QuestTopicFilter,
} from "../../features/quests/questFilters";

type QuestFilterPanelProps = {
  filters: QuestFilters;
  resultCount: number;
  totalCount: number;
  totalXp: number;
  onSearchChange: (value: string) => void;
  onDifficultyChange: (value: QuestDifficultyFilter) => void;
  onTopicChange: (value: QuestTopicFilter) => void;
  onStatusChange: (value: QuestStatusFilter) => void;
  onResetFilters: () => void;
};

export function QuestFilterPanel({
  filters,
  resultCount,
  totalCount,
  totalXp,
  onSearchChange,
  onDifficultyChange,
  onTopicChange,
  onStatusChange,
  onResetFilters,
}: QuestFilterPanelProps) {
  return (
    <section className="mb-6 border-2 border-zinc-800 bg-[#0b0b0b] p-5 shadow-[8px_8px_0_#1f1f1f]">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <label
            htmlFor="quest-search"
            className="mb-2 block font-mono text-xs uppercase tracking-[0.22em] text-zinc-500"
          >
            Search Quests
          </label>

          <div className="flex h-12 items-center gap-3 border border-zinc-700 bg-black px-4 focus-within:border-[#a3ff12]">
            <Search className="size-4 text-zinc-500" />
            <input
              id="quest-search"
              value={filters.search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search title, topic, notes..."
              className="h-full flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-zinc-700"
            />
          </div>
        </div>

        <div className="col-span-2">
          <label
            htmlFor="difficulty-filter"
            className="mb-2 block font-mono text-xs uppercase tracking-[0.22em] text-zinc-500"
          >
            Difficulty
          </label>

          <select
            id="difficulty-filter"
            value={filters.difficulty}
            onChange={(event) =>
              onDifficultyChange(event.target.value as QuestDifficulty | "All")
            }
            className="h-12 w-full border border-zinc-700 bg-black px-3 font-mono text-sm text-white outline-none focus:border-[#a3ff12]"
          >
            <option value="All">All</option>
            {QUEST_DIFFICULTIES.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-2">
          <label
            htmlFor="topic-filter"
            className="mb-2 block font-mono text-xs uppercase tracking-[0.22em] text-zinc-500"
          >
            Topic
          </label>

          <select
            id="topic-filter"
            value={filters.topic}
            onChange={(event) =>
              onTopicChange(event.target.value as QuestTopic | "All")
            }
            className="h-12 w-full border border-zinc-700 bg-black px-3 font-mono text-sm text-white outline-none focus:border-[#a3ff12]"
          >
            <option value="All">All</option>
            {QUEST_TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-2">
          <label
            htmlFor="status-filter"
            className="mb-2 block font-mono text-xs uppercase tracking-[0.22em] text-zinc-500"
          >
            Status
          </label>

          <select
            id="status-filter"
            value={filters.status}
            onChange={(event) =>
              onStatusChange(event.target.value as QuestStatus | "All")
            }
            className="h-12 w-full border border-zinc-700 bg-black px-3 font-mono text-sm text-white outline-none focus:border-[#a3ff12]"
          >
            <option value="All">All</option>
            {QUEST_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-2 flex flex-col justify-end">
          <button
            type="button"
            onClick={onResetFilters}
            className="flex h-12 items-center justify-center gap-2 border border-zinc-700 bg-black px-4 font-mono text-xs font-black uppercase tracking-[0.18em] text-zinc-400 transition hover:border-[#a3ff12] hover:text-[#a3ff12]"
          >
            <RotateCcw className="size-4" />
            Reset
          </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4 border-t border-zinc-800 pt-5">
        <div className="border border-zinc-800 bg-black px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
            Results
          </p>
          <p className="mt-1 font-mono text-lg font-black text-white">
            {resultCount} / {totalCount}
          </p>
        </div>

        <div className="border border-zinc-800 bg-black px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
            Filtered XP
          </p>
          <p className="mt-1 font-mono text-lg font-black text-[#a3ff12]">
            {totalXp.toLocaleString()} XP
          </p>
        </div>

        <div className="border border-zinc-800 bg-black px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
            Mode
          </p>
          <p className="mt-1 font-mono text-lg font-black text-white">
            Board View
          </p>
        </div>
      </div>
    </section>
  );
}
