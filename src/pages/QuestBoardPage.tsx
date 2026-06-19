import { PlusSquare } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router";
import { PageShell } from "../components/layout/PageShell";
import { QuestBoardCard } from "../components/quest/QuestBoardCard";
import { QuestFilterPanel } from "../components/quest/QuestFilterPanel";
import { mockQuests } from "../data";
import {
  defaultQuestFilters,
  filterQuests,
  getFilteredQuestXp,
  getQuestsByStatus,
  type QuestDifficultyFilter,
  type QuestStatusFilter,
  type QuestTopicFilter,
} from "../features/quests/questFilters";
import { QUEST_STATUSES, type QuestStatus } from "../types";

export function QuestBoardPage() {
  const [filters, setFilters] = useState(defaultQuestFilters);

  const filteredQuests = useMemo(() => {
    return filterQuests(mockQuests, filters);
  }, [filters]);

  const filteredXp = useMemo(() => {
    return getFilteredQuestXp(filteredQuests);
  }, [filteredQuests]);

  function handleSearchChange(value: string) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      search: value,
    }));
  }

  function handleDifficultyChange(value: QuestDifficultyFilter) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      difficulty: value,
    }));
  }

  function handleTopicChange(value: QuestTopicFilter) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      topic: value,
    }));
  }

  function handleStatusChange(value: QuestStatusFilter) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      status: value,
    }));
  }

  function handleResetFilters() {
    setFilters(defaultQuestFilters);
  }

  return (
    <PageShell
      eyebrow="Quest Board"
      title="All Coding Quests"
      description="Search, filter, sort, and manage your coding quests by topic, difficulty, status, and XP value."
    >
      <div className="mb-6 flex items-center justify-between border-2 border-zinc-800 bg-black p-5 shadow-[8px_8px_0_#1f1f1f]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            Board Status
          </p>
          <h3 className="mt-2 font-mono text-2xl font-black tracking-[-0.06em] text-white">
            {filteredQuests.length} quests visible
          </h3>
        </div>

        <Link
          to="/quests/new"
          className="inline-flex items-center gap-2 border border-[#a3ff12] bg-[#a3ff12] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.2em] text-black transition hover:translate-x-1 hover:translate-y-1"
        >
          <PlusSquare className="size-4" />
          Create Quest
        </Link>
      </div>

      <QuestFilterPanel
        filters={filters}
        resultCount={filteredQuests.length}
        totalCount={mockQuests.length}
        totalXp={filteredXp}
        onSearchChange={handleSearchChange}
        onDifficultyChange={handleDifficultyChange}
        onTopicChange={handleTopicChange}
        onStatusChange={handleStatusChange}
        onResetFilters={handleResetFilters}
      />

      <div className="grid grid-cols-4 gap-6">
        {QUEST_STATUSES.map((status) => (
          <QuestStatusColumn
            key={status}
            status={status}
            quests={getQuestsByStatus(filteredQuests, status)}
          />
        ))}
      </div>
    </PageShell>
  );
}

type QuestStatusColumnProps = {
  status: QuestStatus;
  quests: ReturnType<typeof getQuestsByStatus>;
};

function QuestStatusColumn({ status, quests }: QuestStatusColumnProps) {
  return (
    <section className="min-h-140 border-2 border-zinc-800 bg-[#0b0b0b] p-4 shadow-[6px_6px_0_#1f1f1f]">
      <div className="mb-5 flex items-center justify-between border-b border-zinc-800 pb-4">
        <h3 className="font-mono text-sm font-black uppercase tracking-[0.2em] text-white">
          {status}
        </h3>

        <span className="border border-zinc-700 bg-black px-2 py-1 font-mono text-xs text-zinc-500">
          {quests.length}
        </span>
      </div>

      {quests.length > 0 ? (
        <div className="space-y-4">
          {quests.map((quest) => (
            <QuestBoardCard key={quest.id} quest={quest} />
          ))}
        </div>
      ) : (
        <div className="flex h-110 items-center justify-center border border-dashed border-zinc-800 bg-black px-6 text-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-600">
              No quests
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              No matching quests found in this status column.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
