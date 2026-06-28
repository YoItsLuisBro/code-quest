import { Link } from "react-router";
import { PageShell } from "../components/layout/PageShell";
import { CreateQuestForm } from "../components/quest/CreateQuestForm";
import { useQuests } from "../features/quests/QuestContext";
import type { CreateQuestInput, Quest } from "../types";
import { useState } from "react";

export function CreateQuestPage() {
  const { createQuest } = useQuests();
  const [createdQuest, setCreatedQuest] = useState<Quest | null>(null);

  function handleCreateQuest(questInput: CreateQuestInput) {
    const newQuest = createQuest(questInput);
    setCreatedQuest(newQuest);
  }

  return (
    <PageShell
      eyebrow="Create Quest"
      title="Forge a New Quest"
      description="Create a new coding challenge with a title, difficulty, topic, XP value, estimated time, notes, and solution link."
    >
      <div className="space-y-6">
        {createdQuest ? (
          <section className="border-2 border-[#a3ff12] bg-black p-6 shadow-[8px_8px_0_#a3ff12]">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3ff12]">
              Quest Created
            </p>

            <div className="mt-4 flex items-start justify-between gap-8">
              <div>
                <h3 className="font-mono text-3xl font-black tracking-[-0.06em] text-white">
                  {createdQuest.title}
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                  Your quest has been added to local state. It will now appear
                  on the Dashboard and Quest Board until the page is refreshed.
                  Persistence arrives in Phase 10.
                </p>

                <div className="mt-5 flex gap-3">
                  <Link
                    to={`/quests/${createdQuest.id}`}
                    className="inline-flex border border-[#a3ff12] bg-[#a3ff12] px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-black"
                  >
                    Open Quest
                  </Link>

                  <Link
                    to="/quests"
                    className="inline-flex border border-zinc-700 bg-black px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-zinc-300 transition hover:border-white hover:text-white"
                  >
                    View Board
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                <CreatedQuestStat
                  label="Difficulty"
                  value={createdQuest.difficulty}
                />
                <CreatedQuestStat label="Topic" value={createdQuest.topic} />
                <CreatedQuestStat label="XP" value={`+${createdQuest.xp} XP`} />
                <CreatedQuestStat label="Status" value={createdQuest.status} />
              </div>
            </div>
          </section>
        ) : null}

        <CreateQuestForm onSubmit={handleCreateQuest} />
      </div>
    </PageShell>
  );
}

type CreatedQuestStatProps = {
  label: string;
  value: string;
};

function CreatedQuestStat({ label, value }: CreatedQuestStatProps) {
  return (
    <div className="min-w-32 border border-zinc-800 bg-[#050505] px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        {label}
      </p>

      <p className="mt-1 font-mono text-xs font-black text-white">{value}</p>
    </div>
  );
}
