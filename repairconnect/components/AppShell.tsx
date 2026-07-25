"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavItem = { href: string; label: string; icon: ReactNode };

const icons = {
  jobs: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  ),
  post: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  profile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
    </svg>
  ),
};

const employerNav: NavItem[] = [
  { href: "/employer/dashboard", label: "Posted jobs", icon: icons.jobs },
  { href: "/employer/post-job", label: "Post a job", icon: icons.post },
];

const techNav: NavItem[] = [
  { href: "/tech/dashboard", label: "Browse jobs", icon: icons.search },
  { href: "/tech/profile", label: "My profile", icon: icons.profile },
];

export function AppShell({
  role,
  children,
}: {
  role: "employer" | "tech";
  children: ReactNode;
}) {
  const pathname = usePathname();
  const nav = role === "employer" ? employerNav : techNav;
  const roleLabel = role === "employer" ? "Employer" : "Technician";
  const otherRoleHref = role === "employer" ? "/tech/dashboard" : "/employer/dashboard";
  const otherRoleLabel = role === "employer" ? "Switch to Technician view" : "Switch to Employer view";

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-ink">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 shrink-0 flex-col border-r border-black/10 bg-[#111a16] px-4 py-6 text-white lg:flex">
        <Link href="/" className="mb-8 flex items-center gap-3 rounded-xl px-2">
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

        <div className="mb-4 px-2">
          <Tag>{roleLabel} workspace</Tag>
        </div>

        <nav className="flex flex-col gap-1">
          {nav.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white text-[#111a16] shadow-sm"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.06] p-3">
          <div className="mb-3 text-xs leading-5 text-white/55">
            Keep repair queues moving with clear jobs, fast matches, and qualified applicants.
          </div>
          <Link
            href={otherRoleHref}
            className="focus-ring block rounded-lg px-3 py-2 text-xs font-medium text-white/70 hover:bg-white/10 hover:text-white"
          >
            {otherRoleLabel}
          </Link>
          <Link
            href="/login"
            className="focus-ring block rounded-lg px-3 py-2 text-xs font-medium text-white/70 hover:bg-white/10 hover:text-white"
          >
            Log out
          </Link>
        </div>
      </aside>

      <div className="border-b border-black/10 bg-white/90 px-5 py-4 backdrop-blur lg:hidden">
        <Link href="/" className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold">RepairConnect</span>
        </Link>
        <nav className="flex gap-2 overflow-x-auto pb-1">
          {nav.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                  active ? "bg-ink text-white" : "bg-bg text-ink-soft"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <main className="lg:pl-72">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:py-10">{children}</div>
      </main>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="mono-tag inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/70">
      {children}
    </span>
  );
}
