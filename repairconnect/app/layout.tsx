import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RepairConnect — Repair jobs, matched fast",
  description:
    "RepairConnect connects repair shops with technicians for mobile, laptop, and MacBook repair jobs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
