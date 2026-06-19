import { Clock3, Flame, Swords, Trophy, Zap } from "lucide-react";
import { BossQuestCard } from "../components/quest/BossQuestCard";
import { NextRecommendedQuestCard } from "../components/quest/NextRecommendedQuestCard";
import { QuestPreviewCard } from "../components/quest/QuestPreviewCard";
import { PageShell } from "../components/layout/PageShell";
import { StatCard } from "../components/ui/StatCard";
import { mockQuests } from "../data";
import {
  getActiveQuests,
  getBossQuestPreview,
  getCompletedQuests,
  getCompletionRate,
  getLongestCompletionStreak,
  getNextRecommendedQuest,
  getRecentCompletions,
  getTotalCompletedXp,
} from "../features/progress/progressUtils";
import {
  getNextRankForXp,
  getRankForXp,
  getRankProgress,
} from "../features/progress/ranks";

export function DashboardPage() {
  const totalXp = getTotalCompletedXp(mockQuests);
  const completedQuests = getCompletedQuests(mockQuests);
  const activeQuests = getActiveQuests(mockQuests);
  const recentCompletions = getRecentCompletions(mockQuests);
  const bossQuest = getBossQuestPreview(mockQuests);
  const nextRecommendedQuest = getNextRecommendedQuest(mockQuests);
  const longestStreak = getLongestCompletionStreak(mockQuests);
  const completionRate = getCompletionRate(mockQuests);

  const currentRank = getRankForXp(totalXp);
  const nextRank = getNextRankForXp(totalXp);
  const rankProgress = getRankProgress(totalXp);

  return (
    <PageShell
      eyebrow="Dashboard"
      title="Quest Command Deck"
      description="Track your coding progress, active quests, XP, rank progression, boss challenges, and recommended next moves."
    >
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-8 space-y-6">
          <div className="grid grid-cols-4 gap-6">
            <StatCard
              label="Total XP"
              value={totalXp.toLocaleString()}
              helperText="XP earned from completed quests."
              icon={<Zap className="size-6" />}
            />

            <StatCard
              label="Completed"
              value={completedQuests.length.toString()}
              helperText={`${completionRate}% completion rate.`}
              icon={<Trophy className="size-6" />}
            />

            <StatCard
              label="Active"
              value={activeQuests.length.toString()}
              helperText="Quests currently in progress."
              icon={<Swords className="size-6" />}
            />

            <StatCard
              label="Best Streak"
              value={`${longestStreak} Days`}
              helperText="Longest mock completion streak."
              icon={<Flame className="size-6" />}
            />
          </div>

          <NextRecommendedQuestCard quest={nextRecommendedQuest} />

          <div className="grid grid-cols-2 gap-6">
            <section className="border-2 border-zinc-800 bg-[#0b0b0b] p-6 shadow-[8px_8px_0_#1f1f1f]">
              <div className="mb-5 flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Active Quests
                  </p>
                  <h3 className="mt-2 font-mono text-2xl font-black tracking-[-0.06em] text-white">
                    Currently Running
                  </h3>
                </div>

                <span className="border border-zinc-700 px-2 py-1 font-mono text-xs text-zinc-500">
                  {activeQuests.length}
                </span>
              </div>

              <div className="space-y-4">
                {activeQuests.length > 0 ? (
                  activeQuests
                    .slice(0, 3)
                    .map((quest) => (
                      <QuestPreviewCard key={quest.id} quest={quest} />
                    ))
                ) : (
                  <div className="flex h-60 items-center justify-center border border-dashed border-zinc-800 bg-black">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                      No active quests
                    </p>
                  </div>
                )}
              </div>
            </section>

            <section className="border-2 border-zinc-800 bg-[#0b0b0b] p-6 shadow-[8px_8px_0_#1f1f1f]">
              <div className="mb-5 flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Completion History
                  </p>
                  <h3 className="mt-2 font-mono text-2xl font-black tracking-[-0.06em] text-white">
                    Recent Victories
                  </h3>
                </div>

                <Clock3 className="size-5 text-[#a3ff12]" />
              </div>

              <div className="space-y-3">
                {recentCompletions.length > 0 ? (
                  recentCompletions.map((quest) => (
                    <div
                      key={quest.id}
                      className="border border-zinc-800 bg-black p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-mono text-sm font-black text-white">
                            {quest.title}
                          </h4>

                          <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
                            {quest.topic} / {quest.difficulty}
                          </p>
                        </div>

                        <span className="font-mono text-xs font-black text-[#a3ff12]">
                          +{quest.xp} XP
                        </span>
                      </div>

                      <p className="mt-3 text-xs text-zinc-600">
                        Completed{" "}
                        {quest.completedAt
                          ? new Date(quest.completedAt).toLocaleDateString()
                          : "Unknown date"}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="flex h-60 items-center justify-center border border-dashed border-zinc-800 bg-black">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                      No completed quests yet
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </section>

        <aside className="col-span-4 space-y-6">
          <BossQuestCard quest={bossQuest} />

          <section className="border-2 border-zinc-800 bg-[#0b0b0b] p-6 shadow-[8px_8px_0_#1f1f1f]">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Developer Rank
            </p>

            <h3 className="mt-3 font-mono text-4xl font-black tracking-[-0.08em] text-white">
              {currentRank.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
              {currentRank.description}
            </p>

            <div className="mt-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              <span>{totalXp.toLocaleString()} XP</span>
              <span>{nextRank ? nextRank.title : "Max Rank"}</span>
            </div>

            <div className="mt-3 h-3 border border-zinc-700 bg-black">
              <div
                className="h-full bg-[#a3ff12]"
                style={{ width: `${rankProgress.percentage}%` }}
              />
            </div>

            <p className="mt-3 font-mono text-xs text-zinc-500">
              {nextRank
                ? `${rankProgress.xpRemaining.toLocaleString()} XP until ${nextRank.title}`
                : "You have reached the highest available rank."}
            </p>
          </section>

          <section className="border-2 border-zinc-800 bg-black p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Quest Inventory
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between border border-zinc-800 px-4 py-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Total Quests
                </span>
                <span className="font-mono text-sm font-black text-white">
                  {mockQuests.length}
                </span>
              </div>

              <div className="flex items-center justify-between border border-zinc-800 px-4 py-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Boss Quests
                </span>
                <span className="font-mono text-sm font-black text-white">
                  {
                    mockQuests.filter((quest) => quest.difficulty === "Boss")
                      .length
                  }
                </span>
              </div>

              <div className="flex items-center justify-between border border-zinc-800 px-4 py-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Archived
                </span>
                <span className="font-mono text-sm font-black text-white">
                  {
                    mockQuests.filter((quest) => quest.status === "Archived")
                      .length
                  }
                </span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </PageShell>
  );
}
