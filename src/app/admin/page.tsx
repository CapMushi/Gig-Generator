// File: src/app/admin/page.tsx
"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AdminGigCard from "../../components/AdminGigCard";

type Gig = {
  id: number;
  title: string;
  description: string;
  deadline: string;
  uploadedFileUrl?: string;
  submittedBy: {
    name: string;
    email: string;
  };
  assignedTo?: string;
  status: "pending" | "approved";
};

const initialGigs: Gig[] = [
  {
    id: 1,
    title: "Build React App",
    description: "Create a responsive React app using Tailwind CSS.",
    deadline: "2025-05-10",
    uploadedFileUrl: "/files/sample-react-assignment.pdf",
    submittedBy: { name: "Ali Khan", email: "ali@example.com" },
    status: "pending",
  },
  {
    id: 2,
    title: "Math Homework",
    description: "Solve all questions in the attached calculus PDF.",
    deadline: "2025-05-06",
    uploadedFileUrl: "/files/calculus.pdf",
    submittedBy: { name: "Sara Ahmed", email: "sara@example.com" },
    assignedTo: "Bob",
    status: "approved",
  },
];

export default function AdminPage() {
  const [view, setView] = useState<"pending" | "approved">("pending");
  const [gigs, setGigs] = useState<Gig[]>(initialGigs);

  const handleApprove = (id: number) => {
    setGigs((prev) =>
      prev.map((gig) =>
        gig.id === id
          ? {
              ...gig,
              status: "approved",
              assignedTo: gig.assignedTo || "Unassigned",
            }
          : gig
      )
    );
  };

  const handleDelete = (id: number) => {
    setGigs((prev) => prev.filter((gig) => gig.id !== id));
  };

  const handleAssign = (id: number, value: string) => {
    setGigs((prev) =>
      prev.map((gig) => (gig.id === id ? { ...gig, assignedTo: value } : gig))
    );
  };

  const filteredGigs = gigs.filter((gig) => gig.status === view);

  return (
    <div className="flex flex-col min-h-screen bg-[#2F43A6] text-white">
      <Header />

      <main className="flex-1 py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setView("pending")}
              className={`px-4 py-2 rounded ${
                view === "pending"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              Show Pending
            </button>
            <button
              onClick={() => setView("approved")}
              className={`px-4 py-2 rounded ${
                view === "approved"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              Show Approved
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGigs.map((gig) => (
            <AdminGigCard
              key={gig.id}
              title={gig.title}
              description={gig.description}
              deadline={gig.deadline}
              uploadedFileUrl={gig.uploadedFileUrl}
              submittedBy={gig.submittedBy}
              assignedTo={gig.assignedTo}
              status={gig.status}
              onApprove={() => handleApprove(gig.id)}
              onDelete={() => handleDelete(gig.id)}
              onAssign={(value: string) => handleAssign(gig.id, value)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
