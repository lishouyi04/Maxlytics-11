"use client";

import { useEffect, useRef } from "react";

const PROMPT = "Best SEO agency in Hong Kong?";

/** AI search → "thinking" → ranked results reveal, looping. Maxlytics surfaces at #1. */
export default function GeoRankSearch() {
  const typeRef = useRef<HTMLDivElement>(null);
  const sendRef = useRef<HTMLDivElement>(null);
  const thinkRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const type = typeRef.current;
    const send = sendRef.current;
    const think = thinkRef.current;
    const board = boardRef.current;
    if (!type || !send || !think || !board) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: show the final state, no loop.
    if (reduce) {
      type.innerHTML = PROMPT;
      send.classList.add("active");
      board.classList.add("show");
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number, fn: () => void) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.push(id);
    };

    const run = () => {
      if (cancelled) return;
      type.innerHTML = '<span class="gr-cursor"></span>';
      send.classList.remove("active");
      think.classList.remove("show");
      board.classList.remove("show", "hide");

      let i = 0;
      const typing = window.setInterval(() => {
        if (cancelled) {
          clearInterval(typing);
          return;
        }
        if (i < PROMPT.length) {
          type.innerHTML = PROMPT.substring(0, i + 1) + '<span class="gr-cursor"></span>';
          i++;
        } else {
          clearInterval(typing);
          send.classList.add("active");
          wait(500, () => {
            think.classList.add("show");
            wait(1800, () => {
              think.classList.remove("show");
              board.classList.add("show");
              wait(4500, () => {
                board.classList.remove("show");
                board.classList.add("hide");
                wait(1300, run);
              });
            });
          });
        }
      }, 75);
      timers.push(typing);
    };

    run();
    return () => {
      cancelled = true;
      timers.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
    };
  }, []);

  return (
    <div className="gr-window" aria-hidden="true">
      <div className="gr-search">
        <div className="gr-text" ref={typeRef}>
          <span className="gr-cursor" />
        </div>
        <div className="gr-send" ref={sendRef}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </div>
      </div>

      <div className="gr-thinking" ref={thinkRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="gr-sparkle" src="/icons/ai/thinking.svg" alt="" width={18} height={18} />
        <span>Thinking…</span>
      </div>

      <div className="gr-board" ref={boardRef}>
        <div className="gr-item active">
          <div className="gr-num">1</div>
          <div className="gr-content">
            <div className="gr-title">
              Maxlytics — a data-first SEO agency in Hong Kong, cited for verifiable rankings and Google +
              Baidu cross-border growth.
            </div>
            <div className="gr-url">maxlytics.io › seo</div>
          </div>
          <div className="gr-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-9 12h18z" />
            </svg>
            <span>rank</span>
          </div>
        </div>

        {[2, 3, 4].map((n) => (
          <div className="gr-item skeleton" key={n}>
            <div className="gr-num">{n}</div>
            <div className="gr-skel">
              <div className="gr-line long" />
              <div className="gr-line short" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
