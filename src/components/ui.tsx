import type { ReactNode } from "react";
import type { Faixa } from "@/data/compendio";

export function Page({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="rise mb-8 max-w-3xl">
        <p className="mb-2 text-sm font-medium tracking-widest text-ember uppercase">{kicker}</p>
        <h1 className="font-display text-4xl leading-tight text-bone sm:text-5xl">{title}</h1>
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{lede}</p>
      </header>
      {children}
    </main>
  );
}

const faixaClass: Record<Faixa, string> = {
  S: "bg-ember text-ink",
  A: "bg-ember-deep text-bone",
  B: "bg-surface text-bone ring-1 ring-line",
  C: "bg-ink text-muted ring-1 ring-line",
  D: "bg-ink/80 text-muted ring-1 ring-line",
};

export function FaixaBadge({ faixa }: { faixa: Faixa }) {
  return (
    <span className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-sm font-semibold ${faixaClass[faixa]}`}>
      {faixa}
    </span>
  );
}

export function Card({
  title,
  aside,
  children,
  badge,
}: {
  title: string;
  aside?: string;
  children: ReactNode;
  badge?: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col rounded-card border border-line bg-surface/80 p-4 shadow-lg shadow-ink/40 backdrop-blur-md">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-xl leading-snug text-bone">{title}</h2>
          {aside ? <p className="text-sm text-muted">{aside}</p> : null}
        </div>
        {badge}
      </div>
      <div className="text-sm leading-relaxed text-fg">{children}</div>
    </article>
  );
}

export function Grid({ children }: { children: ReactNode }) {
  return <div className="rise grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function Field({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mb-4 w-full rounded-card border border-line bg-ink/70 px-4 py-3 text-base text-fg outline-none ring-ember/0 placeholder:text-muted focus:ring-2 focus:ring-ember"
    />
  );
}

export function Chips({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={
              active
                ? "rounded-full bg-ember px-3 py-2 text-sm font-medium text-ink transition-transform duration-150 active:scale-[0.96]"
                : "rounded-full border border-line bg-ink/60 px-3 py-2 text-sm text-fg transition-transform duration-150 hover:border-ember active:scale-[0.96]"
            }
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
