"use client"

export function FloralDecorations() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* Top-left rose cluster */}
      <svg className="absolute -top-4 -left-4 w-48 h-48 opacity-20 animate-float-slow" viewBox="0 0 200 200">
        <circle cx="60" cy="60" r="25" fill="hsl(340, 60%, 70%)" />
        <circle cx="80" cy="50" r="20" fill="hsl(340, 55%, 75%)" />
        <circle cx="50" cy="45" r="18" fill="hsl(340, 65%, 68%)" />
        <circle cx="70" cy="70" r="22" fill="hsl(340, 50%, 78%)" />
        <circle cx="55" cy="75" r="15" fill="hsl(340, 58%, 72%)" />
        {/* Leaves */}
        <ellipse cx="35" cy="95" rx="20" ry="8" fill="hsl(140, 35%, 55%)" transform="rotate(-30 35 95)" />
        <ellipse cx="95" cy="85" rx="18" ry="7" fill="hsl(140, 35%, 50%)" transform="rotate(20 95 85)" />
      </svg>

      {/* Top-right lily cluster */}
      <svg className="absolute -top-2 -right-4 w-44 h-44 opacity-15" viewBox="0 0 200 200">
        <ellipse cx="100" cy="60" rx="12" ry="35" fill="hsl(0, 0%, 95%)" transform="rotate(-15 100 60)" />
        <ellipse cx="100" cy="60" rx="12" ry="35" fill="hsl(0, 0%, 92%)" transform="rotate(15 100 60)" />
        <ellipse cx="100" cy="60" rx="12" ry="35" fill="hsl(0, 0%, 90%)" transform="rotate(45 100 60)" />
        <ellipse cx="100" cy="60" rx="12" ry="35" fill="hsl(0, 0%, 93%)" transform="rotate(-45 100 60)" />
        <ellipse cx="100" cy="60" rx="12" ry="35" fill="hsl(0, 0%, 88%)" />
        <circle cx="100" cy="55" r="6" fill="hsl(50, 70%, 65%)" />
      </svg>

      {/* Bottom-left lilies */}
      <svg className="absolute bottom-8 -left-6 w-52 h-52 opacity-15 animate-float-slow" style={{ animationDelay: '2s' }} viewBox="0 0 200 200">
        <ellipse cx="90" cy="100" rx="14" ry="40" fill="hsl(0, 0%, 94%)" transform="rotate(-20 90 100)" />
        <ellipse cx="90" cy="100" rx="14" ry="40" fill="hsl(0, 0%, 91%)" transform="rotate(20 90 100)" />
        <ellipse cx="90" cy="100" rx="14" ry="40" fill="hsl(0, 0%, 89%)" transform="rotate(50 90 100)" />
        <ellipse cx="90" cy="100" rx="14" ry="40" fill="hsl(0, 0%, 92%)" transform="rotate(-50 90 100)" />
        <circle cx="90" cy="95" r="7" fill="hsl(50, 65%, 60%)" />
        <ellipse cx="60" cy="145" rx="22" ry="8" fill="hsl(140, 30%, 50%)" transform="rotate(-40 60 145)" />
      </svg>

      {/* Bottom-right rose cluster */}
      <svg className="absolute -bottom-4 -right-4 w-56 h-56 opacity-20" viewBox="0 0 200 200">
        <circle cx="130" cy="130" r="28" fill="hsl(340, 55%, 72%)" />
        <circle cx="150" cy="120" r="22" fill="hsl(340, 60%, 68%)" />
        <circle cx="120" cy="115" r="20" fill="hsl(340, 50%, 76%)" />
        <circle cx="145" cy="145" r="24" fill="hsl(340, 58%, 74%)" />
        <circle cx="160" cy="140" r="16" fill="hsl(340, 52%, 70%)" />
        <ellipse cx="100" cy="160" rx="22" ry="8" fill="hsl(140, 35%, 52%)" transform="rotate(25 100 160)" />
        <ellipse cx="170" cy="155" rx="20" ry="7" fill="hsl(140, 30%, 48%)" transform="rotate(-15 170 155)" />
      </svg>

      {/* Mid-left small roses */}
      <svg className="absolute top-1/3 -left-2 w-32 h-32 opacity-15 animate-float-slow" style={{ animationDelay: '4s' }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="18" fill="hsl(340, 55%, 75%)" />
        <circle cx="60" cy="42" r="14" fill="hsl(340, 60%, 70%)" />
        <circle cx="40" cy="42" r="12" fill="hsl(340, 50%, 78%)" />
        <ellipse cx="30" cy="72" rx="14" ry="5" fill="hsl(140, 35%, 55%)" transform="rotate(-25 30 72)" />
      </svg>

      {/* Mid-right small lily */}
      <svg className="absolute top-2/3 -right-2 w-28 h-28 opacity-12" viewBox="0 0 100 100">
        <ellipse cx="50" cy="45" rx="10" ry="28" fill="hsl(0, 0%, 94%)" transform="rotate(-15 50 45)" />
        <ellipse cx="50" cy="45" rx="10" ry="28" fill="hsl(0, 0%, 91%)" transform="rotate(15 50 45)" />
        <ellipse cx="50" cy="45" rx="10" ry="28" fill="hsl(0, 0%, 89%)" transform="rotate(45 50 45)" />
        <circle cx="50" cy="42" r="5" fill="hsl(50, 70%, 65%)" />
      </svg>
    </div>
  )
}
