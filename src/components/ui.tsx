import { Link } from "@tanstack/react-router";
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
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lede}</p>
        <div className="mt-5 h-px w-24 bg-ember" />
      </header>
      {children}
    </main>
  );
}

const faixaClass: Record<Faixa, string> = {
  S: "bg-ember text-ink",
  A: "bg-ember-deep text-bone",
  B: "bg-ink text-bone ring-1 ring-line",
  C: "bg-ink text-muted ring-1 ring-line",
  D: "bg-ink/80 text-muted ring-1 ring-line",
};

export function FaixaBadge({ faixa }: { faixa: Faixa }) {
  return (
    <span className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-sm font-semibold shadow-md shadow-ink/60 ${faixaClass[faixa]}`}>
      {faixa}
    </span>
  );
}

export function Card({
  title,
  aside,
  children,
  badge,
  icone,
}: {
  title: string;
  aside?: string;
  children: ReactNode;
  badge?: ReactNode;
  icone?: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-ink/80 shadow-lg shadow-ink/50 backdrop-blur-md transition-colors duration-150 hover:border-ember/80">
      {icone ? (
        <div className="relative h-44">
          <img
            src={icone}
            alt=""
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
          {badge ? <div className="absolute top-3 right-3">{badge}</div> : null}
          <div className="absolute inset-x-0 bottom-0 px-4 pb-3">
            <h2 className="font-display text-2xl leading-none text-bone">{title}</h2>
            {aside ? <p className="mt-1 text-sm text-bone/80">{aside}</p> : null}
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-between gap-3 px-4 pt-4">
          <div>
            <h2 className="font-display text-xl leading-snug text-bone">{title}</h2>
            {aside ? <p className="text-sm text-muted">{aside}</p> : null}
          </div>
          {badge}
        </div>
      )}
      <div className={`px-4 pb-4 text-sm leading-relaxed text-fg ${icone ? "pt-3" : "pt-2"}`}>{children}</div>
    </article>
  );
}

export function Grid({ children }: { children: ReactNode }) {
  return <div className="rise grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function Elenco({
  pessoas,
}: {
  pessoas: { nome: string; icone: string; href: "/assassinos" | "/sobreviventes" }[];
}) {
  return (
    <div className="mb-6 flex w-full min-w-0 gap-3 overflow-x-auto pb-2">
      {pessoas.map((pessoa) => (
        <Link key={pessoa.nome} to={pessoa.href} className="w-16 shrink-0 text-center">
          <img
            src={pessoa.icone}
            alt=""
            className="mx-auto h-16 w-16 rounded-full object-cover ring-2 ring-ember/80 transition-transform duration-150 hover:scale-105"
          />
          <span className="mt-1 block truncate text-xs text-bone">{pessoa.nome.split(" ")[0]}</span>
        </Link>
      ))}
    </div>
  );
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
      className="mb-4 w-full rounded-card border border-line bg-ink/75 px-4 py-3 text-base text-fg outline-none placeholder:text-muted focus:border-ember"
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
                : "rounded-full border border-line bg-ink/70 px-3 py-2 text-sm text-fg transition-transform duration-150 hover:border-ember active:scale-[0.96]"
            }
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}