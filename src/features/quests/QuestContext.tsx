import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { mockQuests } from "../../data";
import type { CreateQuestInput, Quest, QuestStatus, UpdateQuestInput } from "../../types";
import { createQuestFromInput } from "./questActions";

type QuestContextValue = {
  quests: Quest[];
  createQuest: (input: CreateQuestInput) => Quest;
  updateQuest: (questId: string, updates: UpdateQuestInput) => void;
  setQuestStatus: (questId: string, status: QuestStatus) => void;
  startQuest: (questId: string) => void;
  completeQuest: (questId: string) => void;
  archiveQuest: (questId: string) => void;
  restoreQuest: (questId: string) => void;
  getQuestById: (questId: string) => Quest | undefined;
  resetQuests: () => void;
};

const QuestContext = createContext<QuestContextValue | null>(null);

type QuestProviderProps = {
  children: ReactNode;
};

export function QuestProvider({ children }: QuestProviderProps) {
  const [quests, setQuests] = useState<Quest[]>(mockQuests);

  const createQuest = useCallback((input: CreateQuestInput) => {
    const newQuest = createQuestFromInput(input);

    setQuests((currentQuests) => [newQuest, ...currentQuests]);

    return newQuest;
  }, []);

  const updateQuest = useCallback((questId: string, updates: UpdateQuestInput) => {
    setQuests((currentQuests) =>
      currentQuests.map((quest) => {
        if (quest.id !== questId) {
          return quest;
        }

        return {
          ...quest,
          ...updates,
        };
      }),
    );
  }, []);

  const setQuestStatus = useCallback((questId: string, status: QuestStatus) => {
    setQuests((currentQuests) =>
      currentQuests.map((quest) => {
        if (quest.id !== questId) {
          return quest;
        }

        const completedAt =
          status === "Completed"
            ? quest.completedAt ?? new Date().toISOString()
            : status === "Archived"
              ? quest.completedAt
              : null;

        return {
          ...quest,
          status,
          completedAt,
        };
      }),
    );
  }, []);

  const startQuest = useCallback(
    (questId: string) => {
      setQuestStatus(questId, "In Progress");
    },
    [setQuestStatus],
  );

  const completeQuest = useCallback(
    (questId: string) => {
      setQuestStatus(questId, "Completed");
    },
    [setQuestStatus],
  );

  const archiveQuest = useCallback(
    (questId: string) => {
      setQuestStatus(questId, "Archived");
    },
    [setQuestStatus],
  );

  const restoreQuest = useCallback(
    (questId: string) => {
      setQuestStatus(questId, "Not Started");
    },
    [setQuestStatus],
  );

  const getQuestById = useCallback(
    (questId: string) => {
      return quests.find((quest) => quest.id === questId);
    },
    [quests],
  );

  const resetQuests = useCallback(() => {
    setQuests(mockQuests);
  }, []);

  const value = useMemo<QuestContextValue>(
    () => ({
      quests,
      createQuest,
      updateQuest,
      setQuestStatus,
      startQuest,
      completeQuest,
      archiveQuest,
      restoreQuest,
      getQuestById,
      resetQuests,
    }),
    [
      quests,
      createQuest,
      updateQuest,
      setQuestStatus,
      startQuest,
      completeQuest,
      archiveQuest,
      restoreQuest,
      getQuestById,
      resetQuests,
    ],
  );

  return (
    <QuestContext.Provider value={value}>{children}</QuestContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useQuests() {
  const context = useContext(QuestContext);

  if (!context) {
    throw new Error("useQuests must be used inside QuestProvider.");
  }

  return context;
}