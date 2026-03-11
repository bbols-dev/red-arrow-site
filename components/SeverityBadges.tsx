interface SeverityBadgesProps {
  critical: number;
  high: number;
  medium: number;
}

export default function SeverityBadges({
  critical,
  high,
  medium,
}: SeverityBadgesProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5 text-xs font-medium">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span>{critical} Critical</span>
      </div>
      <div className="flex items-center gap-1.5 text-xs font-medium">
        <div className="w-2 h-2 rounded-full bg-amber" />
        <span>{high} High</span>
      </div>
      <div className="flex items-center gap-1.5 text-xs font-medium text-text-tertiary">
        <div className="w-2 h-2 rounded-full bg-text-tertiary/40" />
        <span>{medium} Medium</span>
      </div>
    </div>
  );
}
