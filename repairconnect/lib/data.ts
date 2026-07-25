export type DeviceType = "iPhone" | "Android" | "Laptop" | "MacBook";
export type JobStatus = "Open" | "In Review" | "Filled";

export type Job = {
  id: string;
  title: string;
  device: DeviceType;
  issue: string;
  description: string;
  pay: number;
  payType: "Fixed" | "Hourly";
  location: string;
  remote: boolean;
  postedAt: string;
  status: JobStatus;
  employerId: string;
  applicantIds: string[];
};

export type Employer = {
  id: string;
  shopName: string;
  contactName: string;
  email: string;
  location: string;
  verified: boolean;
};

export type Technician = {
  id: string;
  name: string;
  email: string;
  location: string;
  skills: string[];
  experienceYears: number;
  rating: number;
  jobsCompleted: number;
  bio: string;
  portfolio: { title: string; note: string }[];
  appliedJobIds: string[];
};

export const employers: Employer[] = [
  {
    id: "emp-1",
    shopName: "QuickFix Mobile Repairs",
    contactName: "Ravi Kumar",
    email: "ravi@quickfixmobile.com",
    location: "Hyderabad, TS",
    verified: true,
  },
];

export const currentEmployerId = "emp-1";

export const technicians: Technician[] = [
  {
    id: "tech-1",
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    location: "Hyderabad, TS",
    skills: ["iPhone Screen Repair", "Battery Replacement", "Micro Soldering"],
    experienceYears: 4,
    rating: 4.8,
    jobsCompleted: 132,
    bio: "Apple-certified technician specializing in board-level iPhone repair and micro soldering. Fast turnaround, clean work.",
    portfolio: [
      { title: "iPhone 13 Pro logic board repair", note: "Fixed no-power fault caused by liquid damage." },
      { title: "MacBook Air keyboard replacement", note: "Full topcase swap, same-day turnaround." },
    ],
    appliedJobIds: ["job-1", "job-4"],
  },
  {
    id: "tech-2",
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    location: "Bengaluru, KA",
    skills: ["Android Repair", "Screen Replacement", "Charging Port Repair"],
    experienceYears: 2,
    rating: 4.5,
    jobsCompleted: 61,
    bio: "Android specialist covering Samsung, OnePlus, and Pixel devices. Comfortable with home visits.",
    portfolio: [
      { title: "Samsung S22 Ultra screen swap", note: "OEM panel replacement, calibrated digitizer." },
    ],
    appliedJobIds: ["job-2"],
  },
  {
    id: "tech-3",
    name: "Kabir Singh",
    email: "kabir.singh@example.com",
    location: "Pune, MH",
    skills: ["Laptop Repair", "MacBook Repair", "Data Recovery"],
    experienceYears: 6,
    rating: 4.9,
    jobsCompleted: 210,
    bio: "6 years fixing laptops and MacBooks — motherboard diagnostics, data recovery, and liquid damage restoration.",
    portfolio: [
      { title: "MacBook Pro 2019 liquid damage", note: "Full board cleaning and component-level repair." },
      { title: "Dell XPS 15 hinge & display repair", note: "Replaced hinge assembly and display cable." },
    ],
    appliedJobIds: ["job-3", "job-1"],
  },
  {
    id: "tech-4",
    name: "Divya Nair",
    email: "divya.nair@example.com",
    location: "Chennai, TN",
    skills: ["iPhone Screen Repair", "Water Damage Repair"],
    experienceYears: 3,
    rating: 4.6,
    jobsCompleted: 88,
    bio: "Focused on quick, reliable iPhone screen and water-damage repairs for busy repair shops.",
    portfolio: [{ title: "iPhone 12 water damage recovery", note: "Ultrasonic clean, full data recovery." }],
    appliedJobIds: ["job-4"],
  },
];

export const jobs: Job[] = [
  {
    id: "job-1",
    title: "iPhone 14 Screen Replacement",
    device: "iPhone",
    issue: "Cracked screen, digitizer unresponsive",
    description:
      "Customer dropped their iPhone 14 and the screen is cracked with a partially unresponsive digitizer. Need an experienced technician to replace the OEM screen assembly and confirm True Tone works after the swap.",
    pay: 1800,
    payType: "Fixed",
    location: "Hyderabad, TS",
    remote: false,
    postedAt: "2026-07-18",
    status: "Open",
    employerId: "emp-1",
    applicantIds: ["tech-1", "tech-3"],
  },
  {
    id: "job-2",
    title: "Samsung Galaxy S22 Charging Port Repair",
    device: "Android",
    issue: "Device won't charge, port feels loose",
    description:
      "Charging port on this Galaxy S22 is loose and the device intermittently fails to charge. Likely needs a full charging port module replacement and a check on the battery health.",
    pay: 900,
    payType: "Fixed",
    location: "Bengaluru, KA",
    remote: false,
    postedAt: "2026-07-19",
    status: "Open",
    employerId: "emp-1",
    applicantIds: ["tech-2"],
  },
  {
    id: "job-3",
    title: "MacBook Pro 2020 No Power Diagnosis",
    device: "MacBook",
    issue: "Won't turn on, no chime, no charging light",
    description:
      "MacBook Pro 2020 (13-inch) does not power on at all — no charging light, no chime. Needs board-level diagnosis to isolate whether it's a charging IC, battery, or logic board fault, with a written estimate before repair.",
    pay: 450,
    payType: "Hourly",
    location: "Pune, MH",
    remote: false,
    postedAt: "2026-07-20",
    status: "In Review",
    employerId: "emp-1",
    applicantIds: ["tech-3"],
  },
  {
    id: "job-4",
    title: "iPhone 12 Water Damage Recovery",
    device: "iPhone",
    issue: "Dropped in water, won't power on",
    description:
      "Phone was submerged for under a minute. Customer wants a full ultrasonic clean, corrosion check, and data recovery attempt before we quote a board repair. Please include your typical success rate for similar cases.",
    pay: 2200,
    payType: "Fixed",
    location: "Chennai, TN",
    remote: false,
    postedAt: "2026-07-21",
    status: "Open",
    employerId: "emp-1",
    applicantIds: ["tech-1", "tech-4"],
  },
  {
    id: "job-5",
    title: "Dell Laptop Keyboard & Trackpad Replacement",
    device: "Laptop",
    issue: "Several keys unresponsive, trackpad clicking randomly",
    description:
      "Dell Inspiron 15 has multiple unresponsive keys and a trackpad that clicks on its own. Needs full topcase/keyboard assembly replacement and trackpad recalibration.",
    pay: 1200,
    payType: "Fixed",
    location: "Remote / Any city",
    remote: true,
    postedAt: "2026-07-21",
    status: "Filled",
    employerId: "emp-1",
    applicantIds: [],
  },
];

export function getJobById(id: string) {
  return jobs.find((j) => j.id === id);
}

export function getTechnicianById(id: string) {
  return technicians.find((t) => t.id === id);
}

export function getEmployerById(id: string) {
  return employers.find((e) => e.id === id);
}

export function getApplicantsForJob(jobId: string) {
  const job = getJobById(jobId);
  if (!job) return [];
  return job.applicantIds
    .map((id) => getTechnicianById(id))
    .filter(Boolean) as Technician[];
}

export function getJobsForTechnician(techId: string) {
  const tech = getTechnicianById(techId);
  if (!tech) return [];
  return tech.appliedJobIds
    .map((id) => getJobById(id))
    .filter(Boolean) as Job[];
}

export const currentTechnicianId = "tech-1";
