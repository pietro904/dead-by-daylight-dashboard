import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { nav } from "@/data/compendio";

function Nevoa({ pathname }: { pathname: string }) {
  const primeira = useRef(true);
  const [ativa, setAtiva] = useState(false);

  useEffect(() => {
    if (primeira.current) {
      primeira.current = false;
      return;
    }
    setAtiva(true);
    const timer = window.setTimeout(() => setAtiva(false), 1200);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!ativa) return null;

  return (
    <div className="fog-veil" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export function CampfireShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <div className="camp" aria-hidden="true">
        <img src="/fogueira.jpg" alt="" />
        <div className="camp-shade" />
        <div className="glow" />
        <div className="embers">
          <span /><span /><span /><span /><span />
          <span /><span /><span /><span /><span />
        </div>
      </div>
      <div className="shell">
        <header className="topbar">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <img
                src="/marca-fogueira.jpg"
                alt=""
                className="h-11 w-11 rounded-full object-cover ring-2 ring-ember/70"
              />
              <div>
                <p className="font-display text-lg leading-none tracking-wide text-bone sm:text-xl">
                  A Fogueira
                </p>
                <p className="text-sm text-muted">Compêndio de Dead by Daylight</p>
              </div>
            </div>
            <nav className="flex w-full min-w-0 gap-2 overflow-x-auto pb-1" aria-label="Seções">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={
                      active
                        ? "shrink-0 rounded-full bg-ember px-4 py-2 text-sm font-medium text-ink transition-transform duration-150 active:scale-[0.96]"
                        : "shrink-0 rounded-full border border-line bg-ink/50 px-4 py-2 text-sm font-medium text-fg transition-transform duration-150 hover:border-ember hover:text-bone active:scale-[0.96]"
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>
        <Nevoa pathname={pathname} />
        <div key={pathname} className="page-enter">
          {children}
        </div>
      </div>
    </>
  );
}