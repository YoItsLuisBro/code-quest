import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { RotateCcw, Save, ScrollText } from "lucide-react";
import {
  QUEST_DIFFICULTIES,
  QUEST_TOPICS,
  type CreateQuestInput,
  type QuestDifficulty,
  type QuestTopic,
} from "../../types";
import {
  hasCreateQuestErrors,
  validateCreateQuestInput,
  type CreateQuestErrors,
} from "../../features/quests/createQuestValidation";

type CreateQuestFormProps = {
  onSubmit: (questInput: CreateQuestInput) => void;
};

const initialFormValues: CreateQuestInput = {
  title: "",
  description: "",
  difficulty: "Beginner",
  topic: "JavaScript",
  xp: 100,
  estimatedTime: "1 hour",
  notes: "",
  solutionUrl: "",
};

export function CreateQuestForm({ onSubmit }: CreateQuestFormProps) {
  const [formValues, setFormValues] =
    useState<CreateQuestInput>(initialFormValues);
  const [errors, setErrors] = useState<CreateQuestErrors>({});

  function updateTextField(
    field: keyof CreateQuestInput,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: event.target.value,
    }));
  }

  function updateDifficulty(event: ChangeEvent<HTMLSelectElement>) {
    setFormValues((currentValues) => ({
      ...currentValues,
      difficulty: event.target.value as QuestDifficulty,
    }));
  }

  function updateTopic(event: ChangeEvent<HTMLSelectElement>) {
    setFormValues((currentValues) => ({
      ...currentValues,
      topic: event.target.value as QuestTopic,
    }));
  }

  function updateXp(event: ChangeEvent<HTMLInputElement>) {
    setFormValues((currentValues) => ({
      ...currentValues,
      xp: Number(event.target.value),
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateCreateQuestInput(formValues);
    setErrors(validationErrors);

    if (hasCreateQuestErrors(validationErrors)) {
      return;
    }

    onSubmit({
      ...formValues,
      title: formValues.title.trim(),
      description: formValues.description.trim(),
      estimatedTime: formValues.estimatedTime.trim(),
      notes: formValues.notes.trim(),
      solutionUrl: formValues.solutionUrl.trim(),
    });
  }

  function handleReset() {
    setFormValues(initialFormValues);
    setErrors({});
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-zinc-800 bg-[#0b0b0b] p-8 shadow-[8px_8px_0_#1f1f1f]"
    >
      <div className="mb-8 flex items-start justify-between border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <ScrollText className="size-5 text-[#a3ff12]" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3ff12]">
              Quest Forge
            </p>
          </div>

          <h3 className="mt-3 font-mono text-3xl font-black tracking-[-0.06em] text-white">
            Create a Coding Quest
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Define the challenge, assign XP, choose a topic, and prepare the
            quest for your future local quest state system.
          </p>
        </div>

        <div className="border border-[#a3ff12] bg-black px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#a3ff12]">
          Draft Mode
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <FormField
            label="Quest Title"
            htmlFor="quest-title"
            error={errors.title}
          >
            <input
              id="quest-title"
              value={formValues.title}
              onChange={(event) => updateTextField("title", event)}
              placeholder="Example: Build a reusable modal component"
              className="h-12 w-full border border-zinc-700 bg-black px-4 font-mono text-sm text-white outline-none placeholder:text-zinc-700 focus:border-[#a3ff12]"
            />
          </FormField>

          <FormField
            label="Quest Description"
            htmlFor="quest-description"
            error={errors.description}
          >
            <textarea
              id="quest-description"
              value={formValues.description}
              onChange={(event) => updateTextField("description", event)}
              placeholder="Describe what the coding challenge requires..."
              rows={7}
              className="w-full resize-none border border-zinc-700 bg-black px-4 py-3 font-mono text-sm leading-6 text-white outline-none placeholder:text-zinc-700 focus:border-[#a3ff12]"
            />
          </FormField>

          <FormField label="Notes" htmlFor="quest-notes" error={errors.notes}>
            <textarea
              id="quest-notes"
              value={formValues.notes}
              onChange={(event) => updateTextField("notes", event)}
              placeholder="Add notes, reminders, hints, or implementation ideas..."
              rows={6}
              className="w-full resize-none border border-zinc-700 bg-black px-4 py-3 font-mono text-sm leading-6 text-white outline-none placeholder:text-zinc-700 focus:border-[#a3ff12]"
            />
          </FormField>

          <FormField
            label="Solution URL"
            htmlFor="quest-solution-url"
            error={errors.solutionUrl}
          >
            <input
              id="quest-solution-url"
              value={formValues.solutionUrl}
              onChange={(event) => updateTextField("solutionUrl", event)}
              placeholder="https://github.com/your-username/your-solution"
              className="h-12 w-full border border-zinc-700 bg-black px-4 font-mono text-sm text-white outline-none placeholder:text-zinc-700 focus:border-[#a3ff12]"
            />
          </FormField>
        </div>

        <aside className="col-span-4 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <FormField
              label="Difficulty"
              htmlFor="quest-difficulty"
              error={errors.difficulty}
            >
              <select
                id="quest-difficulty"
                value={formValues.difficulty}
                onChange={updateDifficulty}
                className="h-12 w-full border border-zinc-700 bg-black px-4 font-mono text-sm text-white outline-none focus:border-[#a3ff12]"
              >
                {QUEST_DIFFICULTIES.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Topic" htmlFor="quest-topic" error={errors.topic}>
              <select
                id="quest-topic"
                value={formValues.topic}
                onChange={updateTopic}
                className="h-12 w-full border border-zinc-700 bg-black px-4 font-mono text-sm text-white outline-none focus:border-[#a3ff12]"
              >
                {QUEST_TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="XP Value" htmlFor="quest-xp" error={errors.xp}>
              <input
                id="quest-xp"
                type="number"
                min={1}
                max={1000}
                value={formValues.xp}
                onChange={updateXp}
                className="h-12 w-full border border-zinc-700 bg-black px-4 font-mono text-sm text-white outline-none focus:border-[#a3ff12]"
              />
            </FormField>

            <FormField
              label="Estimated Time"
              htmlFor="quest-estimated-time"
              error={errors.estimatedTime}
            >
              <input
                id="quest-estimated-time"
                value={formValues.estimatedTime}
                onChange={(event) => updateTextField("estimatedTime", event)}
                placeholder="Example: 1 hour"
                className="h-12 w-full border border-zinc-700 bg-black px-4 font-mono text-sm text-white outline-none placeholder:text-zinc-700 focus:border-[#a3ff12]"
              />
            </FormField>
          </div>

          <div className="border-2 border-[#a3ff12] bg-black p-5 shadow-[6px_6px_0_#a3ff12]">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Quest Preview
            </p>

            <h4 className="mt-3 font-mono text-2xl font-black tracking-[-0.06em] text-white">
              {formValues.title || "Untitled Quest"}
            </h4>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              {formValues.description ||
                "Your quest description will appear here as you type."}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <PreviewStat label="Difficulty" value={formValues.difficulty} />
              <PreviewStat label="Topic" value={formValues.topic} />
              <PreviewStat label="XP" value={`+${formValues.xp} XP`} />
              <PreviewStat label="Time" value={formValues.estimatedTime} />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="flex h-12 flex-1 items-center justify-center gap-2 border border-zinc-700 bg-black font-mono text-xs font-black uppercase tracking-[0.18em] text-zinc-400 transition hover:border-white hover:text-white"
            >
              <RotateCcw className="size-4" />
              Reset
            </button>

            <button
              type="submit"
              className="flex h-12 flex-1 items-center justify-center gap-2 border border-[#a3ff12] bg-[#a3ff12] font-mono text-xs font-black uppercase tracking-[0.18em] text-black transition hover:translate-x-1 hover:translate-y-1"
            >
              <Save className="size-4" />
              Save Draft
            </button>
          </div>
        </aside>
      </div>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
};

function FormField({ label, htmlFor, error, children }: FormFieldProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <label
          htmlFor={htmlFor}
          className="block font-mono text-xs uppercase tracking-[0.22em] text-zinc-500"
        >
          {label}
        </label>

        {error ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
            {error}
          </span>
        ) : null}
      </div>

      {children}
    </div>
  );
}

type PreviewStatProps = {
  label: string;
  value: string;
};

function PreviewStat({ label, value }: PreviewStatProps) {
  return (
    <div className="border border-zinc-800 bg-[#050505] p-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        {label}
      </p>
      <p className="mt-1 font-mono text-xs font-black text-white">{value}</p>
    </div>
  );
}
