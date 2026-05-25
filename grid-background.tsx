export function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.35] dark:opacity-[0.25]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />
    </div>
  );
}
