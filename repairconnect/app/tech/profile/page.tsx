import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Avatar, Button, Card, StatusTag, Stars, Tag } from "@/components/ui";
import { currentTechnicianId, getJobsForTechnician, getTechnicianById } from "@/lib/data";

export default function TechProfile() {
  const tech = getTechnicianById(currentTechnicianId)!;
  const appliedJobs = getJobsForTechnician(currentTechnicianId);

  return (
    <AppShell role="tech">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar name={tech.name} />
          <div>
            <h1 className="font-display text-3xl font-semibold text-ink">{tech.name}</h1>
            <p className="text-sm text-ink-soft">{tech.location}</p>
          </div>
        </div>
        <Button variant="secondary">Edit profile</Button>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-4">
        <Card className="text-center">
          <div className="font-display text-2xl font-semibold text-ink">
            <Stars rating={tech.rating} />
          </div>
          <div className="mt-1 text-xs text-ink-soft">Average rating</div>
        </Card>
        <Card className="text-center">
          <div className="font-display text-2xl font-semibold text-ink">{tech.jobsCompleted}</div>
          <div className="mt-1 text-xs text-ink-soft">Jobs completed</div>
        </Card>
        <Card className="text-center">
          <div className="font-display text-2xl font-semibold text-ink">{tech.experienceYears} yrs</div>
          <div className="mt-1 text-xs text-ink-soft">Experience</div>
        </Card>
      </div>

      <Card className="mb-6">
        <h2 className="font-display mb-3 text-lg font-semibold text-ink">About</h2>
        <p className="text-sm leading-relaxed text-ink-soft">{tech.bio}</p>
      </Card>

      <Card className="mb-6">
        <h2 className="font-display mb-3 text-lg font-semibold text-ink">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {tech.skills.map((skill) => (
            <Tag key={skill} tone="brand">
              {skill}
            </Tag>
          ))}
        </div>
      </Card>

      <Card className="mb-6">
        <h2 className="font-display mb-4 text-lg font-semibold text-ink">Portfolio</h2>
        <div className="flex flex-col divide-y divide-line">
          {tech.portfolio.map((item) => (
            <div key={item.title} className="py-3 first:pt-0 last:pb-0">
              <div className="font-medium text-ink">{item.title}</div>
              <div className="text-sm text-ink-soft">{item.note}</div>
            </div>
          ))}
        </div>
      </Card>

      <h2 className="font-display mb-4 text-lg font-semibold text-ink">
        Applied jobs ({appliedJobs.length})
      </h2>
      <div className="flex flex-col gap-3">
        {appliedJobs.map((job) => (
          <Link key={job.id} href={`/tech/job/${job.id}`} className="focus-ring block">
            <Card className="flex items-center justify-between transition-shadow hover:shadow-sm">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="mono-tag text-xs text-ink-soft">{job.id.toUpperCase()}</span>
                  <StatusTag status={job.status} />
                </div>
                <div className="font-medium text-ink">{job.title}</div>
                <div className="text-sm text-ink-soft">{job.location}</div>
              </div>
              <div className="font-display text-lg font-semibold text-ink">
                ₹{job.pay.toLocaleString("en-IN")}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
