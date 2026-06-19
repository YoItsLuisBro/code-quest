export const QUEST_DIFFICULTIES = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Boss"
] as const;

export const QUEST_TOPICS = [
    "JavaScript",
    "TypeScript",
    "React",
    "SQL",
    "Algorithms",
    "Backend",
    "CSS",
    "Debugging",
    "Portfolio"
] as const;

export const QUEST_STATUSES = [
    "Not Started",
    "In Progress",
    "Completed",
    "Archived"
] as const;

export type QuestDifficulty = (typeof QUEST_DIFFICULTIES)[number];

export type QuestTopic = (typeof QUEST_TOPICS)[number];

export type QuestStatus = (typeof QUEST_STATUSES)[number];

export type Quest = {
    id: string;
    title: string;
    description: string;
    difficulty: QuestDifficulty;
    topic: QuestTopic;
    status: QuestStatus;
    xp: number;
    estimatedTime: string;
    notes: string;
    solutionUrl: string;
    createdAt: string;
    completedAt: string | null;
};

export type CreateQuestInput = {
  title: string;
  description: string;
  difficulty: QuestDifficulty;
  topic: QuestTopic;
  xp: number;
  estimatedTime: string;
  notes: string;
  solutionUrl: string;
};

export type UpdateQuestInput = Partial<CreateQuestInput> & {
  status?: QuestStatus;
  completedAt?: string | null;
};