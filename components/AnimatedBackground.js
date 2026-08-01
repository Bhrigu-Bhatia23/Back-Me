export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#030712]">

      {/* Blob 1 */}
      <div className="absolute -top-24 -left-20 h-[28rem] w-[28rem] rounded-full bg-emerald-500/30 blur-[120px] animate-blob"></div>

      {/* Blob 2 */}
      <div className="absolute top-1/3 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/25 blur-[150px] animate-blob animation-delay-2000"></div>

      {/* Blob 3 */}
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-green-400/20 blur-[120px] animate-blob animation-delay-4000"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

    </div>
  );
}