"use client";

import { useEffect, useState } from "react";

type Dot = { start: { lat: number; lng: number }; end: { lat: number; lng: number } };

// Visual launch point aligned to the map artwork's Hong Kong/South China area.
const HONG_KONG_ORIGIN = { lat: 7.2, lng: 122.0 };
const DEFAULT_ROUTES: Dot[] = [
  { start: HONG_KONG_ORIGIN, end: { lat: 51.5, lng: -0.12 } }, // London
  { start: HONG_KONG_ORIGIN, end: { lat: 40.71, lng: -74.0 } }, // New York
  { start: HONG_KONG_ORIGIN, end: { lat: 1.35, lng: 103.82 } }, // Singapore
  { start: HONG_KONG_ORIGIN, end: { lat: -33.87, lng: 151.21 } }, // Sydney
  { start: HONG_KONG_ORIGIN, end: { lat: 25.2, lng: 55.27 } }, // Dubai
];

export default function WorldMap({
  dots = DEFAULT_ROUTES,
  lineColor = "#9D7BFF",
}: {
  dots?: Dot[];
  lineColor?: string;
}) {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    if (window.matchMedia) setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const project = (lat: number, lng: number) => ({
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  });
  const curve = (s: { x: number; y: number }, e: { x: number; y: number }) => {
    const midX = (s.x + e.x) / 2;
    const midY = Math.min(s.y, e.y) - 50;
    return `M ${s.x} ${s.y} Q ${midX} ${midY} ${e.x} ${e.y}`;
  };
  const origin = project(HONG_KONG_ORIGIN.lat, HONG_KONG_ORIGIN.lng);

  const stagger = 0.3;
  const drawDur = 2;
  const total = dots.length * stagger + drawDur;
  const full = total + 2;
  const splines = "0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1";

  return (
    <div className="wmap">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/world-dots.svg" className="wmap-img" alt="" draggable={false} />
      <svg viewBox="0 0 800 400" className="wmap-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="wmapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const s = project(dot.start.lat, dot.start.lng);
          const e = project(dot.end.lat, dot.end.lng);
          const d = curve(s, e);
          const startT = (i * stagger) / full;
          const endT = (i * stagger + drawDur) / full;
          const resetT = total / full;
          return (
            <path
              key={`p${i}`}
              d={d}
              fill="none"
              stroke="url(#wmapGrad)"
              strokeWidth="1"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={reduce ? 0 : 1}
            >
              {!reduce && (
                <animate
                  attributeName="stroke-dashoffset"
                  dur={`${full}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes={`0;${startT};${endT};${resetT};1`}
                  keySplines={splines}
                  values="1;1;0;0;1"
                />
              )}
            </path>
          );
        })}

        {dots.map((dot, i) => {
          const e = project(dot.end.lat, dot.end.lng);
          return (
            <g key={`d${i}`}>
              <circle cx={e.x} cy={e.y} r="2.2" fill={lineColor} />
              {!reduce && (
                <circle cx={e.x} cy={e.y} r="2.2" fill={lineColor} opacity="0.5">
                  <animate attributeName="r" from="2.2" to="11" dur="2s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          );
        })}

        {/* Origin hub — the single, emphasised launch point */}
        <g>
          <circle cx={origin.x} cy={origin.y} r="4.4" fill={lineColor} opacity="0.25" />
          <circle cx={origin.x} cy={origin.y} r="3" fill="#fff" />
          {!reduce && (
            <circle cx={origin.x} cy={origin.y} r="3.4" fill={lineColor} opacity="0.55">
              <animate attributeName="r" from="3.4" to="22" dur="2s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="2s" begin="0s" repeatCount="indefinite" />
            </circle>
          )}
        </g>
      </svg>
    </div>
  );
}
