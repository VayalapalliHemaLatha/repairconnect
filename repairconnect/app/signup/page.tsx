"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Field, Input } from "@/components/ui";
import { AuthLayout } from "@/components/AuthLayout";

export default function SignupPage() {
  const [role, setRole] = useState<"employer" | "technician">("employer");
  const dashboardHref = role === "employer" ? "/employer/dashboard" : "/tech/dashboard";

  return (
    <AuthLayout
      eyebrow="JOB-0000 · Create account"
      title="Join RepairConnect"
      subtitle="Tell us who you are so we can set up the right workspace."
    >
      <div className="mb-6 grid grid-cols-2 gap-2 rounded-2xl border border-black/10 bg-[#f7f8f5] p-1.5">
        <button
          type="button"
          onClick={() => setRole("employer")}
          className={`focus-ring rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
            role === "employer" ? "bg-[#16201b] text-white shadow-sm" : "text-ink-soft hover:text-ink"
          }`}
        >
          Employer
        </button>
        <button
          type="button"
          onClick={() => setRole("technician")}
          className={`focus-ring rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
            role === "technician" ? "bg-[#16201b] text-white shadow-sm" : "text-ink-soft hover:text-ink"
          }`}
        >
          Technician
        </button>
      </div>

      <div className="mb-6 rounded-2xl border border-black/10 bg-[#fbfcfb] p-4">
        <div className="mono-tag text-xs font-semibold text-brand-ink">
          {role === "employer" ? "SHOP SETUP" : "TECHNICIAN PROFILE"}
        </div>
        <p className="mt-2 text-sm leading-6 text-ink-soft">
          {role === "employer"
            ? "Create a workspace to post repair jobs and manage technician applicants."
            : "Create a visible profile so repair shops can review your skills and experience."}
        </p>
      </div>

      <form className="flex flex-col gap-5">
        {role === "employer" ? (
          <Field label="Repair shop name" htmlFor="shopName">
            <Input id="shopName" placeholder="QuickFix Mobile Repairs" className="py-3" />
          </Field>
        ) : (
          <Field label="Full name" htmlFor="fullName">
            <Input id="fullName" placeholder="Arjun Mehta" className="py-3" />
          </Field>
        )}

        <Field label="Email" htmlFor="email">
          <Input id="email" type="email" placeholder="you@example.com" className="py-3" />
        </Field>

        <Field label="Location" htmlFor="location">
          <Input id="location" placeholder="Hyderabad, TS" className="py-3" />
        </Field>

        <Field label="Password" htmlFor="password">
          <Input id="password" type="password" placeholder="••••••••" className="py-3" />
        </Field>

        <Link href={dashboardHref}>
          <Button type="button" className="mt-2 w-full py-3 text-base shadow-sm">
            Create {role === "employer" ? "employer" : "technician"} account
          </Button>
        </Link>
      </form>

      <p className="mt-6 text-center text-sm text-ink-soft">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-brand-ink">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}
