import type { Quest, QuestDifficulty, QuestStatus } from "../../types";

const difficultyWeight: Record<QuestDifficulty, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Boss: 4,
};

const statusRecommendationWeight: Record<QuestStatus, number> = {
  "Not Started": 1,
  "In Progress": 2,
  Completed: 99,
  Archived: 100,
};

export function getCompletedQuests(quests: Quest[]) {
  return quests.filter((quest) => quest.status === "Completed");
}

export function getActiveQuests(quests: Quest[]) {
  return quests.filter((quest) => quest.status === "In Progress");
}

export function getAvailableQuests(quests: Quest[]) {
  return quests.filter(
    (quest) => quest.status !== "Completed" && quest.status !== "Archived",
  );
}

export function getTotalCompletedXp(quests: Quest[]) {
  return getCompletedQuests(quests).reduce((total, quest) => {
    return total + quest.xp;
  }, 0);
}

export function getCompletionRate(quests: Quest[]) {
  const visibleQuests = quests.filter((quest) => quest.status !== "Archived");

  if (visibleQuests.length === 0) {
    return 0;
  }

  return Math.round(
    (getCompletedQuests(visibleQuests).length / visibleQuests.length) * 100,
  );
}

export function getBossQuestPreview(quests: Quest[]) {
  return quests
    .filter(
      (quest) => quest.difficulty === "Boss" && quest.status !== "Archived",
    )
    .sort((a, b) => {
      if (a.status === "Completed" && b.status !== "Completed") return 1;
      if (a.status !== "Completed" && b.status === "Completed") return -1;

      return b.xp - a.xp;
    })[0];
}

export function getNextRecommendedQuest(quests: Quest[]) {
  return getAvailableQuests(quests)
    .filter((quest) => quest.difficulty !== "Boss")
    .sort((a, b) => {
      const statusDifference =
        statusRecommendationWeight[a.status] -
        statusRecommendationWeight[b.status];

      if (statusDifference !== 0) {
        return statusDifference;
      }

      const difficultyDifference =
        difficultyWeight[a.difficulty] - difficultyWeight[b.difficulty];

      if (difficultyDifference !== 0) {
        return difficultyDifference;
      }

      return a.xp - b.xp;
    })[0];
}

export function getRecentCompletions(quests: Quest[], limit = 4) {
  return getCompletedQuests(quests)
    .filter((quest) => quest.completedAt)
    .sort((a, b) => {
      return (
        new Date(b.completedAt ?? "").getTime() -
        new Date(a.completedAt ?? "").getTime()
      );
    })
    .slice(0, limit);
}

export function getLongestCompletionStreak(quests: Quest[]) {
  const completedDates = getCompletedQuests(quests)
    .filter((quest) => quest.completedAt)
    .map((quest) => {
      const date = new Date(quest.completedAt ?? "");
      return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      ).getTime();
    });

  const uniqueDates = [...new Set(completedDates)].sort((a, b) => a - b);

  if (uniqueDates.length === 0) {
    return 0;
  }

  let longestStreak = 1;
  let currentStreak = 1;

  for (let index = 1; index < uniqueDates.length; index += 1) {
    const previousDate = uniqueDates[index - 1];
    const currentDate = uniqueDates[index];
    const oneDay = 24 * 60 * 60 * 1000;

    if (currentDate - previousDate === oneDay) {
      currentStreak += 1;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else {
      currentStreak = 1;
    }
  }

  return longestStreak;
}
