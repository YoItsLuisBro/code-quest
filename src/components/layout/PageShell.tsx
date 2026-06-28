import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <section className="mx-auto w-full max-w-350">
      <div className="mb-8 border-2 border-zinc-800 bg-[#0b0b0b] p-6 shadow-[8px_8px_0_#1f1f1f]">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#a3ff12]">
          {eyebrow}
        </p>

        <div className="mt-4 flex items-end justify-between gap-8">
          <div>
            <h2 className="font-mono text-5xl font-black tracking-[-0.08em] text-white">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
              {description}
            </p>
          </div>

          <div className="border border-[#a3ff12] bg-black px-4 py-3 font-mono text-xs uppercase tracking-[0.22em] text-[#a3ff12]">
            Desktop Build
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}
