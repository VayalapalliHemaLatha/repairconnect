"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Input, Select, StatusTag, Tag } from "@/components/ui";
import { jobs as seedJobs } from "@/lib/data";
import { getStoredJobs } from "@/lib/jobStore";

export default function TechDashboard() {
  const [query, setQuery] = useState("");
  const [device, setDevice] = useState("All devices");
  const [sort, setSort] = useState("Newest");
  const [jobs, setJobs] = useState(seedJobs);

  useEffect(() => {
    setJobs(getStoredJobs());
  }, []);

  const filtered = useMemo(() => {
    let result = jobs.filter((j) => j.status !== "Filled" || sort === "All");
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.issue.toLowerCase().includes(q)
      );
    }
    if (device !== "All devices") {
      result = result.filter((j) => j.device === device);
    }
    if (sort === "Pay: High to Low") {
      result = [...result].sort((a, b) => b.pay - a.pay);
    } else if (sort === "Newest") {
      result = [...result].sort((a, b) => (a.postedAt < b.postedAt ? 1 : -1));
    }
    return result;
  }, [query, device, sort]);

  return (
    <AppShell role="tech">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-ink">Browse jobs</h1>
        <p className="mt-1 text-sm text-ink-soft">{filtered.length} jobs match your filters</p>
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <Input
          placeholder="Search by title, issue, or location…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="sm:flex-1"
        />
        <Select value={device} onChange={(e) => setDevice(e.target.value)} className="sm:w-48">
          <option>All devices</option>
          <option>iPhone</option>
          <option>Android</option>
          <option>Laptop</option>
          <option>MacBook</option>
        </Select>
        <Select value={sort} onChange={(e) => setSort(e.target.value)} className="sm:w-56">
          <option>Newest</option>
          <option>Pay: High to Low</option>
          <option>All (incl. filled)</option>
        </Select>
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((job) => (
          <Link href={`/tech/job/${job.id}`} key={job.id} className="focus-ring block">
            <div className="ticket fade-in flex items-center justify-between gap-6 p-6 transition-shadow hover:shadow-sm">
              <div className="flex flex-1 flex-col gap-2 pl-3">
                <div className="flex items-center gap-2">
                  <span className="mono-tag text-xs text-ink-soft">{job.id.toUpperCase()}</span>
                  <StatusTag status={job.status} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{job.title}</h3>
                <p className="text-sm text-ink-soft">{job.issue}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <Tag tone="neutral">{job.device}</Tag>
                  <Tag tone="neutral">{job.location}</Tag>
                  {job.remote && <Tag tone="green">Remote OK</Tag>}
                </div>
              </div>
              <div className="text-right">
                <div className="font-display text-xl font-semibold text-ink">
                  ₹{job.pay.toLocaleString("en-IN")}
                </div>
                <div className="text-xs text-ink-soft">{job.payType === "Hourly" ? "per hour" : "fixed"}</div>
              </div>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-line p-10 text-center text-sm text-ink-soft">
            No jobs match those filters — try widening your search.
          </div>
        )}
      </div>
    </AppShell>
  );
}
