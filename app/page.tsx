export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <main className="w-full max-w-2xl mx-auto px-6 py-12 text-center">
        {/* Eye Logo */}
        <div className="mb-8 flex justify-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[var(--color-brand)] drop-shadow-[0_0_12px_var(--color-brand)]"
            aria-hidden="true"
          >
            <path
              d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="3"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Brand Title */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          <span className="text-white">NULL</span>
          <span className="text-white/70">X</span>
          <span className="text-[var(--color-brand)]">ES</span>
        </h1>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-[var(--color-brand)] font-medium leading-relaxed mb-4 max-w-3xl mx-auto">
          Etiam Deus timuit curriculum vitae suum ibi submittere.
        </p>

        {/* Launch Status */}
        <p className="text-lg text-white/70 font-light">
          Launch 2026
        </p>

        {/* Yandex Rating Badge */}
        <div className="mt-6 flex justify-center">
          <iframe
            src="https://yandex.ru/sprav/widget/rating-badge/145129881765?type=rating&theme=dark"
            width={150}
            height={50}
            frameBorder={0}
            title="Yandex Rating Badge"
          />
        </div>

        {/* Footer Credits */}
        <footer className="mt-16 text-sm text-white/50">@MagistrTheOne</footer>
      </main>
    </div>
  );
}
