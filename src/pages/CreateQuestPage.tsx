import { useState } from "react";
import { PageShell } from "../components/layout/PageShell";
import { CreateQuestForm } from "../components/quest/CreateQuestForm";
import type { CreateQuestInput } from "../types";

export function CreateQuestPage() {
  const [preapredQuest, setPreparedQuest] = useState<CreateQuestInput | null>(
    null,
  );

  function handleCreateQuest(questInput: CreateQuestInput) {
    setPreparedQuest(questInput);
  }

  return (
    <PageShell
      eyebrow="Create Quest"
      title="Forge a New Quest"
      description="Create a new coding challenge with a title, difficulty, topic, XP value, estimated time, notes, and solution link."
    >
      <div className="space-y-6">
        {preapredQuest ? (
          <section className="border-2 border-[#a3ff12] bg-black p-6 shadow-[8px_8px_0_#a3ff12]">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3ff12]">
              Quest Draft Prepared
            </p>

            <div className="mt-4 flex items-start justify-between gap-8">
              <div>
                <h3 className="font-mono text-3xl font-black tracking-[-0.06em] text-white">
                  {preapredQuest.title}
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                  This quest has passed validation. In Phase 7, we will connect
                  this form to local quest state so it appears on the Dashboard
                  and Quest Board.
                </p>

                <div className="grid grid-cols-4 gap-3">
                  <PreparedQuestStat
                    label="Difficulty"
                    value={preapredQuest.difficulty}
                  />
                  <PreparedQuestStat
                    label="Topic"
                    value={preapredQuest.topic}
                  />
                  <PreparedQuestStat
                    label="XP"
                    value={`+{preapredQuest.xp}XP`}
                  />
                  <PreparedQuestStat
                    label="Time"
                    value={preapredQuest.estimatedTime}
                  />
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <CreateQuestForm onSubmit={handleCreateQuest} />
      </div>
    </PageShell>
  );
}

type PreparedQuestStatProps = {
  label: string;
  value: string;
};

function PreparedQuestStat({ label, value }: PreparedQuestStatProps) {
  return (
    <div className="min-w-32 border border-zinc-800 bg-[#050505] px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        {label}
      </p>

      <p className="mt-1 font-mono text-xs font-black text-white">{value}</p>
    </div>
  );
}
