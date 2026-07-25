"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Button, StatusTag, Tag } from "@/components/ui";
import { currentEmployerId, jobs as seedJobs } from "@/lib/data";
import { getStoredJobs } from "@/lib/jobStore";

export default function EmployerDashboard() {
  const [allJobs, setAllJobs] = useState(seedJobs);
  const myJobs = allJobs.filter((j) => j.employerId === currentEmployerId);
  const openCount = myJobs.filter((j) => j.status === "Open").length;
  const applicantCount = myJobs.reduce((total, job) => total + job.applicantIds.length, 0);
  const filledCount = myJobs.filter((j) => j.status === "Filled").length;

  useEffect(() => {
    setAllJobs(getStoredJobs());
  }, []);

  return (
    <AppShell role="employer">
      <section className="mb-8 overflow-hidden rounded-3xl border border-black/10 bg-[#16201b] text-white shadow-[0_24px_70px_rgba(16,21,28,0.14)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_300px]">
          <div>
            <span className="mono-tag inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-[#f3c75f]">
              EMPLOYER COMMAND CENTER
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Posted jobs
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
              Track active repair work, applicant flow, and payouts from one focused workspace.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <div className="mono-tag text-xs text-white/50">QUEUE HEALTH</div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="font-display text-3xl font-semibold">{myJobs.length}</div>
                <div className="mt-1 text-[11px] text-white/50">Total</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-[#f3c75f]">{openCount}</div>
                <div className="mt-1 text-[11px] text-white/50">Open</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold">{applicantCount}</div>
                <div className="mt-1 text-[11px] text-white/50">Applicants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm text-ink-soft">Open repair jobs</div>
          <div className="mt-2 font-display text-3xl font-semibold">{openCount}</div>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm text-ink-soft">Filled this cycle</div>
          <div className="mt-2 font-display text-3xl font-semibold">{filledCount}</div>
        </div>
        <Link href="/employer/post-job" className="focus-ring rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5">
          <div className="text-sm text-ink-soft">Need coverage?</div>
          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="font-display text-xl font-semibold">Post new job</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">+</span>
          </div>
        </Link>
      </div>

      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-2xl font-semibold">Live job board</h2>
          <p className="mt-1 text-sm text-ink-soft">Click a job to review details and applicants.</p>
        </div>
        <Link href="/employer/post-job" className="hidden sm:block">
          <Button className="shadow-sm">+ Post new job</Button>
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {myJobs.map((job) => (
          <Link href={`/employer/job/${job.id}`} key={job.id} className="focus-ring block">
            <div className="fade-in overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="grid gap-0 lg:grid-cols-[1fr_210px]">
                <div className="p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="mono-tag rounded-full bg-bg px-2.5 py-1 text-xs text-ink-soft">{job.id.toUpperCase()}</span>
                    <StatusTag status={job.status} />
                    {job.remote && <Tag tone="green">Remote OK</Tag>}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">{job.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">{job.issue}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Tag tone="neutral">{job.device}</Tag>
                    <Tag tone="neutral">{job.location}</Tag>
                    <Tag tone="amber">
                      ₹{job.pay.toLocaleString("en-IN")}{job.payType === "Hourly" ? "/hr" : ""}
                    </Tag>
                    <Tag tone="neutral">Posted {job.postedAt}</Tag>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-black/10 bg-[#fbfcfb] p-5 sm:p-6 lg:flex-col lg:items-start lg:justify-center lg:border-l lg:border-t-0">
                  <div>
                    <div className="font-display text-4xl font-semibold text-ink">
                      {job.applicantIds.length}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wide text-ink-soft">Applicants</div>
                  </div>
                  <div className="mt-0 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white lg:mt-5">
                    Review
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
