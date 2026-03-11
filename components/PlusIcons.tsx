/**
 * Decorative plus-icon corner marks — adapted from Webflow .plus-icon
 * Place inside a `position: relative` container.
 * Pass `corners` to control which corners show marks.
 */

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface PlusIconsProps {
  /** Which corners to decorate (default: top-right + bottom-left = diagonal) */
  corners?: Corner[];
  /** Extra Tailwind classes (e.g. "opacity-10" or "text-white") */
  className?: string;
}

const PLUS_SVG = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <line x1="8" y1="2" x2="8" y2="14" />
    <line x1="2" y1="8" x2="14" y2="8" />
  </svg>
);

export default function PlusIcons({
  corners = ["top-right", "bottom-left"],
  className = "",
}: PlusIconsProps) {
  return (
    <>
      {corners.map((c) => (
        <span key={c} className={`plus-icon ${c} ${className}`}>
          {PLUS_SVG}
        </span>
      ))}
    </>
  );
}
