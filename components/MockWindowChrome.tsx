interface MockWindowChromeProps {
  title?: string;
  children: React.ReactNode;
}

export default function MockWindowChrome({
  title,
  children,
}: MockWindowChromeProps) {
  return (
    <div className="rounded-lg overflow-hidden">
      {/* Chrome bar */}
      <div className="mock-chrome">
        <div className="mock-chrome-dot bg-[#FF5F56]" />
        <div className="mock-chrome-dot bg-[#FFBD2E]" />
        <div className="mock-chrome-dot bg-[#27C93F]" />
        {title && (
          <span className="flex-1 text-center text-[11px] text-text-tertiary font-medium -ml-[46px]">
            {title}
          </span>
        )}
      </div>
      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
