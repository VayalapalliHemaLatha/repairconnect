# RepairConnect — Job Portal Prototype

Next.js (App Router) + Tailwind CSS front-end prototype. No database — all
data is hardcoded in `lib/data.ts`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Routes

- `/login`, `/signup` (with Employer/Technician role toggle)
- `/employer/dashboard`, `/employer/post-job`, `/employer/job/[id]`, `/employer/applicant/[id]`
- `/tech/dashboard`, `/tech/job/[id]`, `/tech/profile`

## Design choices

RepairConnect's identity comes from the repair ticket, not a generic SaaS
dashboard: job cards use a perforated left edge and monospace job IDs
(JOB-0001) so the board reads like a stack of service tickets rather than
a spreadsheet. The palette pairs an ink-navy/signal-blue for trust and
action with an amber accent for status and price, evoking the tags and
warranty stickers of an actual repair counter, kept on a cool light-gray
background so the tickets stay the focal point. Sidebar navigation with a
role badge keeps the Employer and Technician workspaces visually distinct
while sharing one component system (buttons, tags, cards, inputs).
