export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-[#16213a] to-ink" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 85% 0%, hsl(152 85% 63% / 0.18), transparent 70%), radial-gradient(ellipse 50% 60% at 0% 100%, hsl(215 16% 47% / 0.22), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(115deg, transparent 35%, hsl(0 0% 100% / 0.04) 50%, transparent 65%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-volt/60 to-transparent" />
    </div>
  );
}
