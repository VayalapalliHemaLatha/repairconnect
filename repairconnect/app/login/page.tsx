import Link from "next/link";
import { Field, Input } from "@/components/ui";
import { AuthLayout } from "@/components/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout
      eyebrow="JOB-0000 · Welcome back"
      title="Log in to RepairConnect"
      subtitle="Pick up where you left off — new jobs and applicants since your last visit."
    >
      <form className="flex flex-col gap-5">
        <Field label="Email" htmlFor="email">
          <Input id="email" type="email" placeholder="you@example.com" defaultValue="ravi@quickfixmobile.com" className="py-3" />
        </Field>
        <Field label="Password" htmlFor="password">
          <Input id="password" type="password" placeholder="••••••••" defaultValue="password123" className="py-3" />
        </Field>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-ink-soft">
            <input type="checkbox" className="focus-ring h-4 w-4 rounded border-line" defaultChecked />
            Remember me
          </label>
          <span className="font-medium text-brand-ink">Forgot password?</span>
        </div>

        <div className="grid gap-3 pt-2">
          <Link href="/employer/dashboard" className="focus-ring group rounded-2xl border border-black/10 bg-[#16201b] p-4 text-white shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-display text-lg font-semibold">Employer workspace</div>
                <div className="mt-1 text-xs leading-5 text-white/60">Post jobs and review applicants.</div>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#16201b] transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </div>
          </Link>
          <Link href="/tech/dashboard" className="focus-ring group rounded-2xl border border-black/10 bg-[#fbfcfb] p-4 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-display text-lg font-semibold text-ink">Technician board</div>
                <div className="mt-1 text-xs leading-5 text-ink-soft">Browse repair work and apply.</div>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </div>
          </Link>
        </div>

      </form>

      <p className="mt-6 text-center text-sm text-ink-soft">
        New to RepairConnect?{" "}
        <Link href="/signup" className="font-medium text-brand-ink">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
