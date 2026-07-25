import Link from "next/link";
import { Button } from "@/components/ui";

const repairJobs = [
  { id: "JOB-1842", title: "iPhone 14 screen assembly", pay: "₹1,800", status: "3 applicants" },
  { id: "JOB-1875", title: "MacBook no-power diagnosis", pay: "₹450/hr", status: "Verified tech" },
  { id: "JOB-1901", title: "Galaxy charging port repair", pay: "₹900", status: "Same day" },
];

const metrics = [
  ["2.4k+", "repair jobs matched"],
  ["18 min", "median first response"],
  ["4.8/5", "technician average"],
];

const steps = [
  ["Post", "Add device, fault, location, and payout in under a minute."],
  ["Match", "Technicians see the right work by skill, distance, and availability."],
  ["Hire", "Review applicants, ratings, and repair history before assigning."],
];

function LogoMark() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white shadow-sm">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-ink">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f7f8f5]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark />
            <div>
              <div className="font-display text-lg font-semibold">RepairConnect</div>
              <div className="hidden text-xs text-ink-soft sm:block">Premium repair talent network</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
            <a href="#workflow" className="hover:text-ink">Workflow</a>
            <a href="#marketplace" className="hover:text-ink">Marketplace</a>
            <a href="#roles" className="hover:text-ink">For teams</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/login" className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:text-ink">
              Log in
            </Link>
            <Link href="/signup">
              <Button className="shadow-sm">Get started</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-x-0 top-0 h-28 bg-white/55" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <div>
            <span className="mono-tag inline-flex items-center rounded-full border border-[#d7c58b] bg-[#fff8df] px-3 py-1 text-xs font-semibold text-[#8a6500]">
              TRUSTED BY HIGH-VOLUME REPAIR SHOPS
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              Repair jobs matched with technician-grade precision.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              A polished job board for mobile, laptop, and MacBook repairs. Post work, compare vetted technicians, and fill urgent repairs without messy calls or group chats.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/signup">
                <Button className="w-full px-6 py-3 text-base shadow-sm sm:w-auto">
                  Post a repair job
                </Button>
              </Link>
              <Link href="/tech/dashboard">
                <Button variant="secondary" className="w-full border-ink/10 bg-white/80 px-6 py-3 text-base shadow-sm sm:w-auto">
                  Browse technician jobs
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {metrics.map(([value, label]) => (
                <div key={label} className="border-l border-black/10 pl-4">
                  <div className="font-display text-2xl font-semibold text-ink">{value}</div>
                  <div className="mt-1 text-xs leading-5 text-ink-soft">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-[600px]">
            <div className="absolute inset-0 rounded-[2rem] border border-black/10 bg-[#e9ece7] shadow-[0_30px_90px_rgba(16,21,28,0.12)]" />
            <div className="absolute left-6 right-6 top-7 rounded-2xl border border-white/70 bg-white p-5 shadow-sm sm:left-10 sm:right-10">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="mono-tag text-xs text-ink-soft">LIVE REPAIR BOARD</div>
                  <div className="mt-1 font-display text-xl font-semibold">Open jobs near you</div>
                </div>
                <span className="rounded-full bg-green-soft px-3 py-1 text-xs font-semibold text-green">Live</span>
              </div>
              <div className="space-y-3">
                {repairJobs.map((job) => (
                  <div key={job.id} className="rounded-xl border border-line bg-[#fbfcfb] p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mono-tag text-[11px] text-ink-soft">{job.id}</div>
                        <div className="mt-1 font-medium text-ink">{job.title}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-display font-semibold">{job.pay}</div>
                        <div className="mt-1 text-[11px] text-ink-soft">{job.status}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 left-8 h-64 w-36 rounded-[2rem] border-[10px] border-[#111827] bg-[#fdfdfb] shadow-2xl sm:left-14">
              <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-[#111827]" />
              <div className="mx-3 mt-8 rounded-xl bg-brand-soft p-3">
                <div className="h-2 w-16 rounded bg-brand" />
                <div className="mt-3 h-2 w-20 rounded bg-brand/50" />
                <div className="mt-3 h-12 rounded-lg bg-white" />
              </div>
              <div className="mx-3 mt-4 grid grid-cols-2 gap-2">
                <div className="h-10 rounded-lg bg-[#e7efe9]" />
                <div className="h-10 rounded-lg bg-[#fff2ce]" />
              </div>
            </div>

            <div className="absolute bottom-16 right-5 hidden w-64 rounded-2xl border border-black/10 bg-[#16201b] p-5 text-white shadow-2xl sm:block">
              <div className="mono-tag text-xs text-white/55">TECHNICIAN MATCH</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3c75f] font-display font-semibold text-ink">KM</div>
                <div>
                  <div className="font-medium">Kabir Mehta</div>
                  <div className="text-xs text-white/60">MacBook diagnostics · 4.9</div>
                </div>
              </div>
              <div className="mt-5 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[86%] rounded-full bg-[#f3c75f]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="mono-tag text-xs font-semibold text-brand-ink">WORKFLOW</span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight sm:text-4xl">
              From broken device to booked technician, without the back-and-forth.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map(([title, text], index) => (
              <div key={title} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <div className="mono-tag mb-8 text-xs text-ink-soft">0{index + 1}</div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="marketplace" className="bg-[#16201b] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mono-tag text-xs font-semibold text-[#f3c75f]">MARKETPLACE QUALITY</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Built for shops that care about speed and repair quality.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/70">
              Give every job the context technicians need: symptoms, device type, payout, location, and applicant history. The result feels less like a notice board and more like an operating system for repair work.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Verified technician profiles", "Clear payout and job status", "Employer and technician workspaces", "Responsive mobile-first job flow"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <div className="mb-5 h-9 w-9 rounded-full bg-[#f3c75f]" />
                <div className="font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
          <div className="mono-tag text-xs font-semibold text-brand-ink">FOR EMPLOYERS</div>
          <h2 className="mt-4 font-display text-3xl font-semibold">Fill urgent repair work faster.</h2>
          <p className="mt-4 leading-7 text-ink-soft">
            Post jobs, see applicants, compare experience, and keep your repair queue moving.
          </p>
          <Link href="/employer/dashboard" className="mt-7 inline-flex">
            <Button>Open employer workspace</Button>
          </Link>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
          <div className="mono-tag text-xs font-semibold text-[#8a6500]">FOR TECHNICIANS</div>
          <h2 className="mt-4 font-display text-3xl font-semibold">Find serious jobs with clear pay.</h2>
          <p className="mt-4 leading-7 text-ink-soft">
            Browse real repair requests, apply in one tap, and build a visible work profile.
          </p>
          <Link href="/tech/dashboard" className="mt-7 inline-flex">
            <Button variant="secondary">Open technician board</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
