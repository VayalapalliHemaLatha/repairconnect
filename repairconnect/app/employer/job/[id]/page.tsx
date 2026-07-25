"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Avatar, Button, Card, StatusTag, Stars, Tag } from "@/components/ui";
import { getJobById, getTechnicianById, type Job, type Technician } from "@/lib/data";
import { getStoredJobById } from "@/lib/jobStore";

export default function EmployerJobDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [job, setJob] = useState<Job | undefined>(() => getJobById(id));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setJob(getStoredJobById(id));
    setHydrated(true);
  }, [id]);

  if (!job) {
    return (
      <AppShell role="employer">
        {!hydrated ? (
          <Card className="text-sm text-ink-soft">Loading job...</Card>
        ) : (
          <>
            <Link
              href="/employer/dashboard"
              className="focus-ring mb-6 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink"
            >
              ← Back to posted jobs
            </Link>
            <Card className="text-sm text-ink-soft">This job could not be found.</Card>
          </>
        )}
      </AppShell>
    );
  }

  const applicants = job.applicantIds
    .map((applicantId) => getTechnicianById(applicantId))
    .filter((applicant): applicant is Technician => Boolean(applicant));

  return (
    <AppShell role="employer">
      <Link href="/employer/dashboard" className="focus-ring mb-6 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink">
        ← Back to posted jobs
      </Link>

      <Card className="mb-8">
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
              {job.payType === "Hourly" && <span className="text-base font-normal text-ink-soft">/hr</span>}
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
      </Card>

      <h2 className="font-display mb-4 text-xl font-semibold text-ink">
        Applicants ({applicants.length})
      </h2>

      {applicants.length === 0 ? (
        <Card className="text-center text-sm text-ink-soft">
          No applicants yet — check back soon.
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {applicants.map((tech) => (
            <Link key={tech.id} href={`/employer/applicant/${tech.id}`} className="focus-ring block">
              <Card className="flex items-center justify-between gap-4 transition-shadow hover:shadow-sm">
                <div className="flex items-center gap-4">
                  <Avatar name={tech.name} />
                  <div>
                    <div className="font-medium text-ink">{tech.name}</div>
                    <div className="text-sm text-ink-soft">
                      {tech.location} · {tech.experienceYears} yrs experience
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Stars rating={tech.rating} />
                  <Button variant="secondary">View profile</Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </AppShell>
  );
}
