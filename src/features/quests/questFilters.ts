import type {
  Quest,
  QuestDifficulty,
  QuestStatus,
  QuestTopic,
} from "../../types";

export type QuestDifficultyFilter = QuestDifficulty | "All";
export type QuestTopicFilter = QuestTopic | "All";
export type QuestStatusFilter = QuestStatus | "All";

export type QuestFilters = {
  search: string;
  difficulty: QuestDifficultyFilter;
  topic: QuestTopicFilter;
  status: QuestStatusFilter;
};

export const defaultQuestFilters: QuestFilters = {
  search: "",
  difficulty: "All",
  topic: "All",
  status: "All",
};

export function filterQuests(quests: Quest[], filters: QuestFilters) {
  const searchTerm = filters.search.trim().toLowerCase();

  return quests.filter((quest) => {
    const matchesSearch =
      searchTerm.length === 0 ||
      quest.title.toLowerCase().includes(searchTerm) ||
      quest.description.toLowerCase().includes(searchTerm) ||
      quest.topic.toLowerCase().includes(searchTerm) ||
      quest.difficulty.toLowerCase().includes(searchTerm) ||
      quest.status.toLowerCase().includes(searchTerm) ||
      quest.notes.toLowerCase().includes(searchTerm);

    const matchesDifficulty =
      filters.difficulty === "All" || quest.difficulty === filters.difficulty;

    const matchesTopic =
      filters.topic === "All" || quest.topic === filters.topic;

    const matchesStatus =
      filters.status === "All" || quest.status === filters.status;

    return matchesSearch && matchesDifficulty && matchesTopic && matchesStatus;
  });
}

export function getQuestsByStatus(quests: Quest[], status: QuestStatus) {
  return quests.filter((quest) => quest.status === status);
}

export function getFilteredQuestXp(quests: Quest[]) {
  return quests.reduce((total, quest) => total + quest.xp, 0);
}
