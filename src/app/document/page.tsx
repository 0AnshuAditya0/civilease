export default function DocumentResult() {
  return (
    <div className="flex flex-col gap-8 px-6 py-10">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2">
        <div className="h-4 w-16 animate-pulse rounded bg-skeleton/50" />
        <div className="h-4 w-2 animate-pulse rounded bg-skeleton/30" />
        <div className="h-4 w-24 animate-pulse rounded bg-skeleton/50" />
        <div className="h-4 w-2 animate-pulse rounded bg-skeleton/30" />
        <div className="h-4 w-32 animate-pulse rounded bg-skeleton" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="flex flex-col gap-8 lg:col-span-3">
          <div className="flex flex-col gap-4 rounded-2xl bg-surface p-8 ring-1 ring-skeleton/20">
            <div className="h-6 w-40 animate-pulse rounded-lg bg-skeleton" />
            <div className="h-4 w-full animate-pulse rounded bg-skeleton/50" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-skeleton/50" />
            <div className="h-4 w-4/6 animate-pulse rounded bg-skeleton/50" />
            <div className="h-4 w-full animate-pulse rounded bg-skeleton/40" />
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-surface p-8 ring-1 ring-skeleton/20">
            <div className="h-6 w-36 animate-pulse rounded-lg bg-skeleton" />
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-skeleton/60" />
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="h-4 w-3/4 animate-pulse rounded bg-skeleton/50" />
                    <div className="h-3 w-1/2 animate-pulse rounded bg-skeleton/30" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-surface p-8 ring-1 ring-skeleton/20">
            <div className="h-6 w-48 animate-pulse rounded-lg bg-skeleton" />
            <div className="flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 shrink-0 animate-pulse rounded bg-skeleton/60" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-skeleton/50" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-2">
          <div className="flex flex-col gap-4 rounded-2xl bg-surface p-8 ring-1 ring-skeleton/20">
            <div className="h-6 w-32 animate-pulse rounded-lg bg-skeleton" />
            <div className="h-4 w-full animate-pulse rounded bg-skeleton/50" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-skeleton/50" />
            <div className="mt-2 h-10 w-full animate-pulse rounded-xl bg-skeleton/40" />
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-surface p-8 ring-1 ring-skeleton/20">
            <div className="h-6 w-28 animate-pulse rounded-lg bg-skeleton" />
            <div className="h-80 w-full animate-pulse rounded-xl bg-skeleton/30 ring-1 ring-skeleton/20">
              <div className="flex h-full flex-col items-center justify-between p-6">
                <div className="h-10 w-10 animate-pulse rounded-lg bg-skeleton/40" />
                <div className="flex w-full flex-col items-center gap-2">
                  <div className="h-px w-full bg-skeleton/20" />
                  <div className="h-10 w-10 animate-pulse rounded-lg bg-skeleton/40" />
                  <div className="h-px w-full bg-skeleton/20" />
                  <div className="h-10 w-10 animate-pulse rounded-lg bg-skeleton/40" />
                  <div className="h-px w-full bg-skeleton/20" />
                  <div className="h-10 w-10 animate-pulse rounded-lg bg-skeleton/40" />
                </div>
                <div className="h-10 w-10 animate-pulse rounded-lg bg-skeleton/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-4 rounded-2xl bg-surface px-8 py-4 ring-1 ring-skeleton/20">
            <div className="h-10 w-10 animate-pulse rounded-full bg-skeleton-light" />
            <div className="flex flex-col gap-1">
              <div className="h-4 w-28 animate-pulse rounded bg-skeleton/50" />
              <div className="h-3 w-20 animate-pulse rounded bg-skeleton/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
