"use client";

export default function TerminalCard() {
  return (
    <div className="relative h-[400px] w-[320px] overflow-hidden rounded-xl border border-emerald-500/20 bg-black shadow-[0_0_60px_rgba(16,185,129,0.12)]">

      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.08) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-2 border-b border-emerald-500/20 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <p className="ml-3 text-xs text-emerald-400">
          portfolio-terminal
        </p>
      </div>

      {/* Terminal Content */}
      <div className="space-y-5 p-6 font-mono text-sm text-emerald-400">

        <div>
          <p>$ whoami</p>
          <p className="mt-2 text-zinc-300">
            Frontend Engineer
          </p>
        </div>

        <div>
          <p>$ skills --list</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Zustand",
              "Jest",
              "Playwright",
              "Node.js"
            ].map((skill) => (
              <span
                key={skill}
                className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p>$ current-focus</p>

          <p className="mt-2 leading-relaxed text-zinc-300">
            Building performant web experiences and scalable frontend systems.
          </p>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-emerald-500/10 to-transparent" />
    </div>
  );
}