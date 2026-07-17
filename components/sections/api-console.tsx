"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/content/profile";

type Line = { id: number; method: string; path: string; status: string; typed: number; done: boolean };

export function ApiConsole() {
  const [lines, setLines] = useState<Line[]>([]);
  const idRef = useRef(0);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion.current) {
      setLines(
        profile.apiConsoleLines.map((l, i) => ({
          id: i,
          method: l.method,
          path: l.path,
          status: l.status,
          typed: l.method.length + l.path.length + 1,
          done: true,
        }))
      );
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const runLine = (index: number) => {
      const source = profile.apiConsoleLines[index % profile.apiConsoleLines.length];
      if (!source) return;
      const full = `${source.method} ${source.path}`;
      const id = idRef.current++;

      setLines((prev) => {
        const next = [...prev, { id, method: source.method, path: source.path, status: source.status, typed: 0, done: false }];
        return next.length > 5 ? next.slice(next.length - 5) : next;
      });

      let typed = 0;
      const type = () => {
        if (cancelled) return;
        typed++;
        setLines((prev) => prev.map((l) => (l.id === id ? { ...l, typed } : l)));
        if (typed < full.length) {
          timeoutId = setTimeout(type, 22);
        } else {
          timeoutId = setTimeout(() => {
            setLines((prev) => prev.map((l) => (l.id === id ? { ...l, done: true } : l)));
            timeoutId = setTimeout(() => runLine(index + 1), 900);
          }, 250);
        }
      };
      type();
    };

    runLine(0);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border-soft bg-surface-2 px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-1.5 font-mono text-xs text-text-muted">api.log — live</span>
      </div>
      <div className="min-h-[220px] p-5 font-mono text-[13px]">
        {lines.map((l) => {
          const full = `${l.method} ${l.path}`;
          const visible = full.slice(0, l.typed);
          const [visibleMethod, ...rest] = visible.split(" ");
          const visiblePath = rest.join(" ");
          const methodColor = l.method === "POST" ? "text-[#7CB7E8]" : "text-[#B39DDB]";
          return (
            <p key={l.id} className="mb-2.5 break-words">
              <span className={methodColor}>{visibleMethod}</span> {visiblePath}
              {l.done ? <span className="text-success"> → {l.status}</span> : <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-blink bg-accent align-[-2px]" />}
            </p>
          );
        })}
      </div>
    </div>
  );
}
