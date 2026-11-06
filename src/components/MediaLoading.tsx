type MediaLoadingProps = {
  label?: string;
  dark?: boolean;
  className?: string;
};

export function MediaLoading({
  label = "Loading…",
  dark = false,
  className = "",
}: MediaLoadingProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[1] flex flex-col items-center justify-center gap-3 ${
        dark ? "bg-[#101613]/media-loading-dark" : "bg-[rgba(231,235,230,0.92)] media-loading"
      } ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span className={`media-spinner ${dark ? "media-spinner-dark" : ""}`} aria-hidden />
      <p
        className={`text-xs tracking-[0.14em] uppercase ${
          dark ? "text-white/75" : "text-muted"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
