import Link from "next/link";
import { ReactNode } from "react";

export function AuthLayout({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f7f8f5] text-ink lg:grid lg:grid-cols-[0.9fr_1.1fr]">
      <aside className="relative hidden min-h-screen overflow-hidden bg-[#111a16] px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-x-12 top-28 h-72 rounded-full bg-[#f3c75f]/10 blur-3xl" />
        <div className="absolute bottom-24 right-10 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />

        <Link href="/" className="relative z-10 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#111a16] shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </span>
          <span>
            <span className="block font-display text-lg font-semibold">RepairConnect</span>
            <span className="block text-xs text-white/50">Repair talent network</span>
          </span>
        </Link>

        <div className="relative z-10">
          <div className="mb-8 max-w-md">
            <span className="mono-tag inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-[#f3c75f]">
              PREMIUM REPAIR WORKSPACE
            </span>
            <p className="mt-5 font-display text-4xl font-semibold leading-tight">
              Match urgent repair work with technicians who are ready to move.
            </p>
          </div>

          <div className="max-w-md rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="mono-tag text-xs text-white/45">LIVE JOB MATCH</div>
                <div className="mt-1 font-display text-xl font-semibold">MacBook no-power diagnosis</div>
              </div>
              <span className="rounded-full bg-[#f3c75f] px-3 py-1 text-xs font-semibold text-[#111a16]">
                Open
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 rounded-2xl bg-black/15 p-4 text-center">
              <div>
                <div className="font-display text-2xl font-semibold">3</div>
                <div className="mt-1 text-[11px] text-white/45">Applicants</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold">18m</div>
                <div className="mt-1 text-[11px] text-white/45">Response</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold">4.9</div>
                <div className="mt-1 text-[11px] text-white/45">Rating</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/60">
              "Posted a MacBook repair at 9am, had three qualified applicants by lunch."
            </p>
            <p className="mt-3 text-xs text-white/40">Ravi Kumar, QuickFix Mobile Repairs</p>
          </div>
        </div>

        <p className="relative z-10 text-xs text-white/40">© 2026 RepairConnect</p>
      </aside>

      <main className="flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 sm:py-12">
        <div className="w-full max-w-[520px]">
          <Link href="/" className="mb-8 flex items-center gap-3 lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold">RepairConnect</span>
          </Link>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_24px_70px_rgba(16,21,28,0.10)] sm:p-8">
            <span className="mono-tag mb-4 inline-flex items-center rounded-full border border-[#d7c58b] bg-[#fff8df] px-3 py-1 text-xs font-semibold text-[#8a6500]">
              {eyebrow}
            </span>
            <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h1>
            <p className="mt-3 mb-8 text-sm leading-6 text-ink-soft">{subtitle}</p>
          {children}
          </div>
        </div>
      </main>
    </div>
  );
}
