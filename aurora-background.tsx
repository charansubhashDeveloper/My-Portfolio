export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[120px] dark:bg-cyan-500/15" />
      <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px] dark:bg-violet-600/15" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent dark:from-cyan-900/20" />
    </div>
  );
}
