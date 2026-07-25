"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { Button, Card, Field, Input, Select, Textarea } from "@/components/ui";
import { createJob } from "@/lib/jobStore";
import type { DeviceType, Job } from "@/lib/data";

export default function PostJobPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    const formData = new FormData(e.currentTarget);

    createJob({
      title: String(formData.get("title") ?? ""),
      device: String(formData.get("device") ?? "iPhone") as DeviceType,
      issue: String(formData.get("issue") ?? ""),
      description: String(formData.get("description") ?? ""),
      pay: Number(formData.get("pay") ?? 0),
      payType: String(formData.get("payType") ?? "Fixed") as Job["payType"],
      location: String(formData.get("location") ?? ""),
      remote: formData.get("remote") === "on",
    });

    setTimeout(() => router.push("/employer/dashboard"), 300);
  }

  return (
    <AppShell role="employer">
      <section className="mb-8 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1fr_340px]">
          <div className="p-6 sm:p-8">
            <span className="mono-tag inline-flex rounded-full border border-[#d7c58b] bg-[#fff8df] px-3 py-1 text-xs font-semibold text-[#8a6500]">
              JOB-NEW · DRAFT
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Post a new repair job
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft sm:text-base">
              Create a clear repair brief so qualified technicians can price, apply, and arrive prepared.
            </p>
          </div>
          <div className="border-t border-black/10 bg-[#16201b] p-6 text-white lg:border-l lg:border-t-0 sm:p-8">
            <div className="mono-tag text-xs text-white/50">BRIEF QUALITY</div>
            <div className="mt-4 font-display text-3xl font-semibold">92%</div>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Jobs with device, symptoms, payout, and location get faster technician responses.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <Card className="shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <section>
              <div className="mb-5">
                <div className="mono-tag text-xs font-semibold text-brand-ink">DEVICE & ISSUE</div>
                <h2 className="mt-2 font-display text-2xl font-semibold">Repair brief</h2>
              </div>

              <div className="grid gap-5">
                <Field label="Job title" htmlFor="title">
                  <Input id="title" name="title" placeholder="e.g. iPhone 14 Screen Replacement" required />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Device type" htmlFor="device">
                    <Select id="device" name="device" defaultValue="iPhone">
                      <option>iPhone</option>
                      <option>Android</option>
                      <option>Laptop</option>
                      <option>MacBook</option>
                    </Select>
                  </Field>
                  <Field label="Pay type" htmlFor="payType">
                    <Select id="payType" name="payType" defaultValue="Fixed">
                      <option>Fixed</option>
                      <option>Hourly</option>
                    </Select>
                  </Field>
                </div>

                <Field label="Issue summary" htmlFor="issue" hint="One line describing the visible fault or customer complaint.">
                  <Input id="issue" name="issue" placeholder="e.g. Cracked screen, digitizer unresponsive" required />
                </Field>

                <Field label="Full description" htmlFor="description">
                  <Textarea
                    id="description"
                    name="description"
                    rows={6}
                    placeholder="Add symptoms, prior repair attempts, parts needed, customer expectations, and any timing constraints."
                    required
                  />
                </Field>
              </div>
            </section>

            <section className="border-t border-line pt-6">
              <div className="mb-5">
                <div className="mono-tag text-xs font-semibold text-brand-ink">PAYMENT & LOCATION</div>
                <h2 className="mt-2 font-display text-2xl font-semibold">Job terms</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Pay amount (₹)" htmlFor="pay">
                  <Input id="pay" name="pay" type="number" min="1" placeholder="1800" required />
                </Field>
                <Field label="Location" htmlFor="location">
                  <Input id="location" name="location" placeholder="Hyderabad, TS" required />
                </Field>
              </div>

              <label className="mt-5 flex items-start gap-3 rounded-2xl border border-line bg-[#fbfcfb] p-4 text-sm text-ink-soft">
                <input type="checkbox" name="remote" className="focus-ring mt-0.5 h-4 w-4 rounded border-line" />
                <span>
                  <span className="block font-medium text-ink">Remote or mail-in repair accepted</span>
                  <span className="mt-1 block text-xs leading-5">Technicians outside your city can apply if the device can be shipped.</span>
                </span>
              </label>
            </section>

            <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
              <Button type="submit" disabled={submitted} className="px-6 py-3 text-base shadow-sm">
                {submitted ? "Posting..." : "Post job"}
              </Button>
              <span className="text-xs leading-5 text-ink-soft">
                Job will appear on the technician board immediately.
              </span>
            </div>
          </form>
        </Card>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <div className="mono-tag text-xs font-semibold text-brand-ink">PREVIEW</div>
            <div className="mt-5 rounded-2xl border border-line bg-[#fbfcfb] p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="mono-tag rounded-full bg-amber-soft px-2.5 py-1 text-xs text-amber">JOB-NEW</span>
                <span className="mono-tag rounded-full bg-green-soft px-2.5 py-1 text-xs text-green">OPEN</span>
              </div>
              <div className="font-display text-xl font-semibold">Repair job title</div>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                Your issue summary and technician-facing context will appear here.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="mono-tag rounded-full border border-line bg-white px-2.5 py-1 text-xs text-ink-soft">DEVICE</span>
                <span className="mono-tag rounded-full border border-line bg-white px-2.5 py-1 text-xs text-ink-soft">LOCATION</span>
                <span className="mono-tag rounded-full bg-amber-soft px-2.5 py-1 text-xs text-amber">₹ PAY</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-[#16201b] p-5 text-white shadow-sm">
            <div className="mono-tag text-xs text-[#f3c75f]">PRO TIPS</div>
            <ul className="mt-4 space-y-4 text-sm leading-6 text-white/70">
              <li>Include model number and visible symptoms.</li>
              <li>Mention urgency if the customer needs same-day turnaround.</li>
              <li>Set pay clearly so technicians can apply confidently.</li>
            </ul>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
