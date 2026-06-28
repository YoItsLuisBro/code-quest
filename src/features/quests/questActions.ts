import type { CreateQuestInput, Quest } from "../../types";

function createQuestId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `quest-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function createQuestFromInput(input: CreateQuestInput): Quest {
  return {
    id: createQuestId(),
    title: input.title,
    description: input.description,
    difficulty: input.difficulty,
    topic: input.topic,
    status: "Not Started",
    xp: input.xp,
    estimatedTime: input.estimatedTime,
    notes: input.notes,
    solutionUrl: input.solutionUrl,
    createdAt: new Date().toISOString(),
    completedAt: null,
  };
}
