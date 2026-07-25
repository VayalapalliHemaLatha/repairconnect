"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Button, Card, StatusTag, Tag } from "@/components/ui";
import { getJobById, type Job } from "@/lib/data";
import { getStoredJobById } from "@/lib/jobStore";

export default function TechJobDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [job, setJob] = useState<Job | undefined>(() => getJobById(id));
  const [hydrated, setHydrated] = useState(false);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    setJob(getStoredJobById(id));
    setHydrated(true);
  }, [id]);

  if (!job) {
    return (
      <AppShell role="tech">
        {!hydrated ? (
          <Card className="text-sm text-ink-soft">Loading job...</Card>
        ) : (
          <>
            <Link
              href="/tech/dashboard"
              className="focus-ring mb-6 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink"
            >
              ← Back to browse jobs
            </Link>
            <Card className="text-sm text-ink-soft">This job could not be found.</Card>
          </>
        )}
      </AppShell>
    );
  }

  return (
    <AppShell role="tech">
      <Link
        href="/tech/dashboard"
        className="focus-ring mb-6 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink"
      >
        ← Back to browse jobs
      </Link>

      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="mono-tag text-xs text-ink-soft">{job.id.toUpperCase()}</span>
              <StatusTag status={job.status} />
            </div>
            <h1 className="font-display text-2xl font-semibold text-ink">{job.title}</h1>
            <p className="mt-1 text-sm text-ink-soft">{job.issue}</p>
          </div>
          <div className="text-right">
            <div className="font-display text-2xl font-semibold text-ink">
              ₹{job.pay.toLocaleString("en-IN")}
              {job.payType === "Hourly" && (
                <span className="text-base font-normal text-ink-soft">/hr</span>
              )}
            </div>
            <div className="text-xs text-ink-soft">{job.payType} pay</div>
          </div>
        </div>

        <div className="my-5 flex flex-wrap gap-2">
          <Tag tone="neutral">{job.device}</Tag>
          <Tag tone="neutral">{job.location}</Tag>
          {job.remote && <Tag tone="green">Remote OK</Tag>}
          <Tag tone="neutral">Posted {job.postedAt}</Tag>
        </div>

        <p className="border-t border-line pt-5 text-sm leading-relaxed text-ink-soft">
          {job.description}
        </p>

        <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
          {job.status === "Filled" ? (
            <Tag tone="neutral">This job has already been filled</Tag>
          ) : applied ? (
            <Tag tone="green">✓ Application sent</Tag>
          ) : (
            <Button onClick={() => setApplied(true)}>Apply for this job</Button>
          )}
          <span className="text-xs text-ink-soft">
            {job.applicantIds.length} technician{job.applicantIds.length === 1 ? "" : "s"} applied so far
          </span>
        </div>
      </Card>
    </AppShell>
  );
}
