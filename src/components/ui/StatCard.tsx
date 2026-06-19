import type { ReactNode } from "react";

type StatCardProps = {
  label: string;
  value: string;
  icon: ReactNode;
  helperText?: string;
};

export function StatCard({ label, value, icon, helperText }: StatCardProps) {
  return (
    <article className="border-2 border-zinc-800 bg-black p-5 shadow-[6px_6px_0_#1f1f1f]">
      <div className="flex items-center justify-between">
        <div className="text-[#a3ff12]">{icon}</div>
        <div className="h-2 w-2 bg-[#a3ff12]" />
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>

      <p className="mt-6 font-mono text-xs uppercase tracking-[-0.06em] text-white">
        {value}
      </p>

      {helperText ? (
        <p className="mt-3 text-sm leading-6 text-zinc-500">{helperText}</p>
      ) : null}
    </article>
  );
}
