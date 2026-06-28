import { Archive, CheckCircle2, Play, RotateCcw } from "lucide-react";
import { Link, useParams } from "react-router";
import { PageShell } from "../components/layout/PageShell";
import { DifficultyBadge } from "../components/quest/DifficultyBadge";
import { StatusBadge } from "../components/quest/StatusBadge";
import { useQuests } from "../features/quests/QuestContext";

export function QuestDetailPage() {
  const { questId } = useParams();
  const {
    getQuestById,
    startQuest,
    completeQuest,
    archiveQuest,
    restoreQuest,
  } = useQuests();

  const quest = questId ? getQuestById(questId) : undefined;

  if (!quest) {
    return (
      <PageShell
        eyebrow="Quest Detail"
        title="Quest Not Found"
        description="The quest you are trying to inspect does not exist in local state."
      >
        <div className="border-2 border-zinc-800 bg-[#0b0b0b] p-8 shadow-[8px_8px_0_#1f1f1f]">
          <Link
            to="/quests"
            className="inline-flex border border-[#a3ff12] bg-[#a3ff12] px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.2em] text-black"
          >
            Return to Quest Board
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      eyebrow="Quest Detail"
      title="Quest Intel"
      description="View local quest information and test status controls before the full Quest Detail build in Phase 8."
    >
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-8 border-2 border-zinc-800 bg-[#0b0b0b] p-8 shadow-[8px_8px_0_#1f1f1f]">
          <div className="flex items-start justify-between gap-6 border-b border-zinc-800 pb-6">
            <div>
              <div className="flex flex-wrap gap-2">
                <DifficultyBadge difficulty={quest.difficulty} />
                <StatusBadge status={quest.status} />
              </div>

              <h3 className="mt-5 font-mono text-4xl font-black tracking-[-0.07em] text-white">
                {quest.title}
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
                {quest.description}
              </p>
            </div>

            <div className="border border-[#a3ff12] bg-black px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#a3ff12]">
              +{quest.xp} XP
            </div>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-4">
            <QuestMeta label="Topic" value={quest.topic} />
            <QuestMeta label="Difficulty" value={quest.difficulty} />
            <QuestMeta label="Status" value={quest.status} />
            <QuestMeta label="Time" value={quest.estimatedTime} />
          </div>

          <div className="mt-6 border border-zinc-800 bg-black p-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Notes
            </p>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {quest.notes || "No notes added yet."}
            </p>
          </div>

          <div className="mt-6 border border-zinc-800 bg-black p-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Solution URL
            </p>

            {quest.solutionUrl ? (
              <a
                href={quest.solutionUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex font-mono text-sm text-[#a3ff12] underline-offset-4 hover:underline"
              >
                {quest.solutionUrl}
              </a>
            ) : (
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                No solution URL added yet.
              </p>
            )}
          </div>
        </section>

        <aside className="col-span-4 space-y-6">
          <section className="border-2 border-[#a3ff12] bg-black p-6 shadow-[8px_8px_0_#a3ff12]">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Status Controls
            </p>

            <h3 className="mt-3 font-mono text-3xl font-black tracking-[-0.06em] text-white">
              Manage Quest
            </h3>

            <div className="mt-6 space-y-3">
              {quest.status === "Not Started" ? (
                <DetailActionButton
                  label="Start Quest"
                  icon={<Play className="size-4" />}
                  onClick={() => startQuest(quest.id)}
                />
              ) : null}

              {quest.status === "Not Started" ||
              quest.status === "In Progress" ? (
                <DetailActionButton
                  label="Complete Quest"
                  icon={<CheckCircle2 className="size-4" />}
                  onClick={() => completeQuest(quest.id)}
                  accent
                />
              ) : null}

              {quest.status !== "Archived" ? (
                <DetailActionButton
                  label="Archive Quest"
                  icon={<Archive className="size-4" />}
                  onClick={() => archiveQuest(quest.id)}
                />
              ) : null}

              {quest.status === "Archived" ? (
                <DetailActionButton
                  label="Restore Quest"
                  icon={<RotateCcw className="size-4" />}
                  onClick={() => restoreQuest(quest.id)}
                  accent
                />
              ) : null}
            </div>
          </section>

          <section className="border-2 border-zinc-800 bg-[#0b0b0b] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Quest Dates
            </p>

            <div className="mt-5 space-y-3">
              <QuestMeta label="Created" value={quest.createdAt.slice(0, 10)} />
              <QuestMeta
                label="Completed"
                value={quest.completedAt ? quest.completedAt.slice(0, 10) : "—"}
              />
            </div>
          </section>

          <Link
            to="/quests"
            className="inline-flex w-full justify-center border border-zinc-700 bg-black px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.2em] text-zinc-300 transition hover:border-white hover:text-white"
          >
            Back to Board
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}

type QuestMetaProps = {
  label: string;
  value: string;
};

function QuestMeta({ label, value }: QuestMetaProps) {
  return (
    <div className="border border-zinc-800 bg-black p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        {label}
      </p>
      <p className="mt-2 font-mono text-sm font-black text-white">{value}</p>
    </div>
  );
}

type DetailActionButtonProps = {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  accent?: boolean;
};

function DetailActionButton({
  label,
  icon,
  onClick,
  accent = false,
}: DetailActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        accent
          ? "flex h-12 w-full items-center justify-center gap-2 border border-[#a3ff12] bg-[#a3ff12] font-mono text-xs font-black uppercase tracking-[0.18em] text-black transition hover:translate-x-1 hover:translate-y-1"
          : "flex h-12 w-full items-center justify-center gap-2 border border-zinc-700 bg-black font-mono text-xs font-black uppercase tracking-[0.18em] text-zinc-300 transition hover:border-white hover:text-white"
      }
    >
      {icon}
      {label}
    </button>
  );
}
