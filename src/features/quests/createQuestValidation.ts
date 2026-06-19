import type { CreateQuestInput } from "../../types";

export type CreateQuestErrors = Partial<Record<keyof CreateQuestInput, string>>;

export function validateCreateQuestInput(input: CreateQuestInput) {
  const errors: CreateQuestErrors = {};

  if (!input.title.trim()) {
    errors.title = "Quest title is required.";
  }

  if (input.title.trim().length > 90) {
    errors.title = "Quest title must be 90 characters or less.";
  }

  if (!input.description.trim()) {
    errors.description = "Quest description is required.";
  }

  if (input.description.trim().length < 20) {
    errors.description = "Quest description should be at least 20 characters.";
  }

  if (!Number.isFinite(input.xp)) {
    errors.xp = "XP must be a valid number.";
  }

  if (input.xp <= 0) {
    errors.xp = "XP must be greater than 0.";
  }

  if (input.xp > 1000) {
    errors.xp = "XP should not be higher than 1,000 for one quest.";
  }

  if (!input.estimatedTime.trim()) {
    errors.estimatedTime = "Estimated time is required.";
  }

  if (input.solutionUrl.trim()) {
    try {
      new URL(input.solutionUrl);
    } catch {
      errors.solutionUrl = "Solution URL must be a valid link.";
    }
  }

  return errors;
}

export function hasCreateQuestErrors(errors: CreateQuestErrors) {
  return Object.keys(errors).length > 0;
}
