"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

export type FlowerCreditsProgressProps = {
  /** 0–1 playback progress */
  value: number;
  className?: string;
};

/**
 * Progress read as a stem that draws through + a rose silhouette that fills in (gold → petal pink).
 */
export function FlowerCreditsProgress({ value, className }: FlowerCreditsProgressProps) {
  const safeId = useId().replace(/:/g, "");
  const clipId = `flower-clip-${safeId}`;
  const gradId = `flower-fill-${safeId}`;
  const stemGradId = `stem-${safeId}`;

  const p = Math.min(1, Math.max(0, value));
  const w = 280;
  const clipW = w * p;

  return (
    <div
      className={cn("w-full max-w-lg", className)}
      role="progressbar"
      aria-valuenow={Math.round(p * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Credits progress"
    >
      <svg
        viewBox={`0 0 ${w} 52`}
        className="h-12 w-full overflow-visible drop-shadow-[0_2px_12px_rgba(251,113,133,0.12)]"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="40%" stopColor="#fb923c" />
            <stop offset="75%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#fecdd3" />
          </linearGradient>
          <linearGradient id={stemGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a574" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#fb7185" stopOpacity={0.9} />
          </linearGradient>
          <clipPath id={clipId}>
            <rect x="0" y="0" width={clipW} height="52" />
          </clipPath>
        </defs>

        <line
          x1="14"
          y1="44"
          x2="266"
          y2="44"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="44"
          x2="266"
          y2="44"
          stroke={`url(#${stemGradId})`}
          strokeWidth="2.25"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - p}
        />

        <g transform="translate(140, 22)" opacity={0.14}>
          <RoseSilhouette fill="white" />
        </g>

        <g clipPath={`url(#${clipId})`}>
          <g transform="translate(140, 22)">
            <RoseSilhouette fill={`url(#${gradId})`} />
          </g>
        </g>

        {p > 0.88 ? (
          <g fill="#fef3c7" opacity={0.35 + (p - 0.88) * 2.5}>
            <circle cx={182} cy={14} r={1.2} />
            <circle cx={98} cy={18} r={0.9} />
            <circle cx={154} cy={8} r={0.7} />
          </g>
        ) : null}
      </svg>
    </div>
  );
}

function RoseSilhouette({ fill }: { fill: string }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <g>
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx={0}
          cy={-12}
          rx={10}
          ry={15.5}
          fill={fill}
          transform={`rotate(${deg})`}
        />
      ))}
      <circle cx={0} cy={0} r={7} fill={fill} />
    </g>
  );
}
