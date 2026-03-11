interface HealthGaugeProps {
  score: number;
  size?: number;
  label?: string;
}

export default function HealthGauge({
  score,
  size = 120,
  label,
}: HealthGaugeProps) {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(100, score)) / 100;
  const offset = circumference * (1 - progress);

  const color =
    score < 40 ? "#C9544D" : score < 70 ? "#E88D3F" : "#3DAA64";

  const center = size / 2;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(0,0,0,0.06)"
          strokeWidth="8"
        />
        {/* Progress arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
      </svg>
      {/* Score text overlaid */}
      <div
        className="absolute flex flex-col items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span
          className="font-accent leading-none"
          style={{ fontSize: size * 0.3, color }}
        >
          {score}
        </span>
        <span
          className="text-text-tertiary"
          style={{ fontSize: size * 0.1 }}
        >
          /100
        </span>
      </div>
      {label && (
        <span className="text-xs font-medium text-text-tertiary mt-1">
          {label}
        </span>
      )}
    </div>
  );
}
