"use client";

import { currentEmployerId, jobs as seedJobs, type DeviceType, type Job } from "@/lib/data";

const storageKey = "repairconnect:jobs";

type NewJobInput = {
  title: string;
  device: DeviceType;
  issue: string;
  description: string;
  pay: number;
  payType: Job["payType"];
  location: string;
  remote: boolean;
};

function isBrowser() {
  return typeof window !== "undefined";
}

export function getStoredJobs(): Job[] {
  if (!isBrowser()) return seedJobs;

  try {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return seedJobs;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : seedJobs;
  } catch {
    return seedJobs;
  }
}

export function saveStoredJobs(nextJobs: Job[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(storageKey, JSON.stringify(nextJobs));
}

export function createJob(input: NewJobInput) {
  const currentJobs = getStoredJobs();
  const job: Job = {
    id: `job-${Date.now()}`,
    ...input,
    postedAt: new Date().toISOString().slice(0, 10),
    status: "Open",
    employerId: currentEmployerId,
    applicantIds: [],
  };

  saveStoredJobs([job, ...currentJobs]);
  return job;
}

export function getStoredJobById(id: string) {
  return getStoredJobs().find((job) => job.id === id);
}
