export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-6 py-20 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-xl flex-col gap-6">
            <div className="h-10 w-full animate-pulse rounded-xl bg-skeleton" />
            <div className="h-10 w-4/5 animate-pulse rounded-xl bg-skeleton" />
            <div className="h-5 w-3/5 animate-pulse rounded-lg bg-skeleton/60" />
            <div className="mt-4 h-12 w-44 animate-pulse rounded-2xl bg-skeleton-light" />
          </div>

          <div className="relative">
            <div className="h-72 w-64 animate-pulse rounded-2xl bg-surface ring-1 ring-skeleton/30 lg:h-80 lg:w-72">
              <div className="flex flex-col gap-3 p-6">
                <div className="h-4 w-3/4 animate-pulse rounded bg-skeleton/50" />
                <div className="h-4 w-full animate-pulse rounded bg-skeleton/50" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-skeleton/50" />
                <div className="mt-4 h-20 w-full animate-pulse rounded-lg bg-skeleton/30" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-skeleton/50" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-skeleton/50" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-16 w-16 animate-pulse rounded-xl bg-skeleton-light/40 blur-sm" />
            <div className="absolute -top-4 -left-4 h-12 w-12 animate-pulse rounded-full bg-skeleton/30 blur-sm" />
          </div>
        </div>
      </section>

      <section className="border-t border-skeleton/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group flex flex-col gap-4 rounded-2xl bg-surface p-8 ring-1 ring-skeleton/20 transition-all duration-300 hover:ring-skeleton/40 hover:shadow-lg hover:shadow-skeleton/5"
            >
              <div className="h-12 w-12 animate-pulse rounded-xl bg-skeleton" />
              <div className="h-5 w-3/4 animate-pulse rounded-lg bg-skeleton" />
              <div className="h-4 w-full animate-pulse rounded bg-skeleton/50" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-skeleton/10 px-6 py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
          <div className="flex h-64 w-full animate-pulse flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-skeleton/40 bg-surface/50 transition-colors hover:border-skeleton-light/50">
            <div className="h-12 w-12 animate-pulse rounded-full bg-skeleton/40" />
            <div className="h-4 w-48 animate-pulse rounded bg-skeleton/50" />
            <div className="h-3 w-32 animate-pulse rounded bg-skeleton/30" />
          </div>

          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <div className="h-12 flex-1 animate-pulse rounded-xl bg-surface ring-1 ring-skeleton/30" />
            <div className="h-12 w-36 animate-pulse rounded-xl bg-skeleton-light" />
          </div>
        </div>
      </section>
    </div>
  );
}
