import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { Avatar, Button, Card, Stars, Tag } from "@/components/ui";
import { getTechnicianById } from "@/lib/data";

export default async function ApplicantProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tech = getTechnicianById(id);
  if (!tech) notFound();

  return (
    <AppShell role="employer">
      <Link href="/employer/dashboard" className="focus-ring mb-6 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink">
        ← Back to posted jobs
      </Link>

      <Card className="mb-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar name={tech.name} />
            <div>
              <h1 className="font-display text-2xl font-semibold text-ink">{tech.name}</h1>
              <p className="text-sm text-ink-soft">{tech.location}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary">Message</Button>
            <Button>Hire for this job</Button>
          </div>
        </div>

        <div className="my-5 flex flex-wrap items-center gap-3 border-t border-line pt-5">
          <Stars rating={tech.rating} />
          <span className="text-sm text-ink-soft">·</span>
          <span className="text-sm text-ink-soft">{tech.jobsCompleted} jobs completed</span>
          <span className="text-sm text-ink-soft">·</span>
          <span className="text-sm text-ink-soft">{tech.experienceYears} yrs experience</span>
        </div>

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

      <Card>
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
    </AppShell>
  );
}
