import type { Quest } from "../types/quest";

export const mockQuests: Quest[] = [
  {
    id: "quest-001",
    title: "Build a Reusable Button Component",
    description:
      "Create a flexible React Button component with variants, sizes, disabled states, and strong TypeScript props.",
    difficulty: "Beginner",
    topic: "React",
    status: "Completed",
    xp: 75,
    estimatedTime: "45 minutes",
    notes:
      "Focus on reusable props, consistent styling, and making the component easy to extend.",
    solutionUrl: "https://github.com/YoItsLuisBro/code-quests",
    createdAt: "2026-06-01T10:00:00.000Z",
    completedAt: "2026-06-01T11:15:00.000Z",
  },
  {
    id: "quest-002",
    title: "Master Array Methods",
    description:
      "Practice map, filter, reduce, find, some, every, and sort using real coding challenge examples.",
    difficulty: "Beginner",
    topic: "JavaScript",
    status: "Completed",
    xp: 100,
    estimatedTime: "1 hour",
    notes:
      "Reduce is the most important one to revisit. Build examples with totals, grouping, and transformation.",
    solutionUrl: "",
    createdAt: "2026-06-02T13:30:00.000Z",
    completedAt: "2026-06-02T15:00:00.000Z",
  },
  {
    id: "quest-003",
    title: "Create TypeScript Utility Types",
    description:
      "Build custom utility types using Pick, Omit, Partial, Required, and mapped types.",
    difficulty: "Intermediate",
    topic: "TypeScript",
    status: "In Progress",
    xp: 150,
    estimatedTime: "1.5 hours",
    notes:
      "Use this quest to improve confidence with real TypeScript patterns used in production apps.",
    solutionUrl: "",
    createdAt: "2026-06-03T09:45:00.000Z",
    completedAt: null,
  },
  {
    id: "quest-004",
    title: "Debug a Broken React Form",
    description:
      "Fix a React form with broken state updates, missing labels, poor validation, and incorrect submit behavior.",
    difficulty: "Intermediate",
    topic: "Debugging",
    status: "In Progress",
    xp: 125,
    estimatedTime: "1 hour",
    notes:
      "Pay attention to controlled inputs, form state, and making the submit handler predictable.",
    solutionUrl: "",
    createdAt: "2026-06-04T18:00:00.000Z",
    completedAt: null,
  },
  {
    id: "quest-005",
    title: "Build a SQL Query Practice Table",
    description:
      "Create a small SQL practice dataset and write queries using SELECT, WHERE, ORDER BY, GROUP BY, and JOIN.",
    difficulty: "Beginner",
    topic: "SQL",
    status: "Not Started",
    xp: 90,
    estimatedTime: "1 hour",
    notes:
      "Good quest for strengthening database fundamentals before adding Supabase later.",
    solutionUrl: "",
    createdAt: "2026-06-05T12:20:00.000Z",
    completedAt: null,
  },
  {
    id: "quest-006",
    title: "Implement Search and Filter Logic",
    description:
      "Create reusable filtering logic for quests by search term, topic, difficulty, and status.",
    difficulty: "Intermediate",
    topic: "React",
    status: "Not Started",
    xp: 175,
    estimatedTime: "2 hours",
    notes:
      "This will be useful when building the Quest Board page. Keep the filtering logic reusable.",
    solutionUrl: "",
    createdAt: "2026-06-06T16:10:00.000Z",
    completedAt: null,
  },
  {
    id: "quest-007",
    title: "Solve Two Pointer Algorithm Challenges",
    description:
      "Practice common two pointer problems such as valid palindrome, two sum sorted, and container with most water.",
    difficulty: "Advanced",
    topic: "Algorithms",
    status: "Not Started",
    xp: 225,
    estimatedTime: "2.5 hours",
    notes:
      "Write notes explaining when two pointers are better than nested loops.",
    solutionUrl: "",
    createdAt: "2026-06-07T11:00:00.000Z",
    completedAt: null,
  },
  {
    id: "quest-008",
    title: "Style a Brutalist Dashboard Card System",
    description:
      "Create reusable dashboard cards with sharp borders, dark backgrounds, accent shadows, and terminal-style labels.",
    difficulty: "Intermediate",
    topic: "CSS",
    status: "Completed",
    xp: 120,
    estimatedTime: "1 hour",
    notes:
      "The goal is to make the UI feel consistent and portfolio-worthy from the beginning.",
    solutionUrl: "",
    createdAt: "2026-06-08T14:00:00.000Z",
    completedAt: "2026-06-08T15:30:00.000Z",
  },
  {
    id: "quest-009",
    title: "Build a Backend API Route Plan",
    description:
      "Plan the future backend structure for creating, reading, updating, and deleting quests from Supabase.",
    difficulty: "Advanced",
    topic: "Backend",
    status: "Not Started",
    xp: 250,
    estimatedTime: "2 hours",
    notes:
      "Do not build Supabase yet. Just outline what data operations the app will need later.",
    solutionUrl: "",
    createdAt: "2026-06-09T08:30:00.000Z",
    completedAt: null,
  },
  {
    id: "quest-010",
    title: "Portfolio Project Case Study",
    description:
      "Write a project case study explaining the problem, features, tech stack, screenshots, challenges, and final result.",
    difficulty: "Intermediate",
    topic: "Portfolio",
    status: "Archived",
    xp: 150,
    estimatedTime: "2 hours",
    notes:
      "Archived for now. Revisit once the core app is closer to completion.",
    solutionUrl: "",
    createdAt: "2026-06-10T17:45:00.000Z",
    completedAt: null,
  },
  {
    id: "quest-011",
    title: "Boss Quest: Full CRUD Quest System",
    description:
      "Build the complete local CRUD system for creating, updating, completing, archiving, and viewing coding quests.",
    difficulty: "Boss",
    topic: "React",
    status: "Not Started",
    xp: 500,
    estimatedTime: "5 hours",
    notes:
      "This is a major milestone quest. Complete it after the Create Quest and Quest Detail pages are functional.",
    solutionUrl: "",
    createdAt: "2026-06-11T20:00:00.000Z",
    completedAt: null,
  },
  {
    id: "quest-012",
    title: "Boss Quest: Supabase User Quest Sync",
    description:
      "Connect the frontend to Supabase so each authenticated user can store and manage their own quests.",
    difficulty: "Boss",
    topic: "Backend",
    status: "Not Started",
    xp: 700,
    estimatedTime: "6 hours",
    notes:
      "This should happen later after authentication, schema creation, and local app state are stable.",
    solutionUrl: "",
    createdAt: "2026-06-12T19:15:00.000Z",
    completedAt: null,
  },
];