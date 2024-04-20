export default function Loading() {
  return (
    <div className="animate-slideout fixed left-0 top-0 z-10 grid h-full w-full place-items-center bg-[var(--bg-secondary)]">
      <div className="grid justify-items-center">
        <div className="loading-logo mb-5" />
        <p className="font-heading text-3xl lowercase tracking-2">
          Burning lamb
        </p>
      </div>
    </div>
  );
}
