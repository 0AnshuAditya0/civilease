export default function Footer() {
  return (
    <footer className="w-full border-t border-skeleton/20 bg-surface/50 mt-auto">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="h-5 w-28 animate-pulse rounded-md bg-skeleton" />
          <div className="h-3 w-20 animate-pulse rounded bg-skeleton/60" />
          <div className="h-3 w-24 animate-pulse rounded bg-skeleton/60" />
          <div className="h-3 w-18 animate-pulse rounded bg-skeleton/60" />
          <div className="h-3 w-22 animate-pulse rounded bg-skeleton/60" />
        </div>

        <div className="flex flex-col gap-3">
          <div className="h-5 w-24 animate-pulse rounded-md bg-skeleton" />
          <div className="h-3 w-28 animate-pulse rounded bg-skeleton/60" />
          <div className="h-3 w-20 animate-pulse rounded bg-skeleton/60" />
          <div className="h-3 w-32 animate-pulse rounded bg-skeleton/60" />
          <div className="h-3 w-16 animate-pulse rounded bg-skeleton/60" />
        </div>

        <div className="flex flex-col gap-3">
          <div className="h-5 w-20 animate-pulse rounded-md bg-skeleton" />
          <div className="h-3 w-24 animate-pulse rounded bg-skeleton/60" />
          <div className="h-3 w-28 animate-pulse rounded bg-skeleton/60" />
          <div className="h-3 w-20 animate-pulse rounded bg-skeleton/60" />
          <div className="h-3 w-26 animate-pulse rounded bg-skeleton/60" />
        </div>
      </div>

      <div className="border-t border-skeleton/10 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="h-3 w-40 animate-pulse rounded bg-skeleton/40" />
          <div className="flex gap-3">
            <div className="h-6 w-6 animate-pulse rounded-full bg-skeleton/40" />
            <div className="h-6 w-6 animate-pulse rounded-full bg-skeleton/40" />
            <div className="h-6 w-6 animate-pulse rounded-full bg-skeleton/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
