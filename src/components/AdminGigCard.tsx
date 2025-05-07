// File: src/components/AdminGigCard.tsx
import React from "react";

interface AdminGigCardProps {
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
  onApprove?: () => void;
  onDelete?: () => void;
  onAssign?: (value: string) => void;
}

const AdminGigCard: React.FC<AdminGigCardProps> = ({
  title,
  description,
  deadline,
  uploadedFileUrl,
  submittedBy,
  assignedTo,
  status,
  onApprove,
  onDelete,
  onAssign,
}) => {
  return (
    <div className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col gap-4 w-full">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-sm">
        Submitted by: <span className="font-medium">{submittedBy.name}</span> (
        <a
          href={`mailto:${submittedBy.email}`}
          className="underline text-blue-600"
        >
          {submittedBy.email}
        </a>
        )
      </p>

      <p className="text-sm">Description: {description}</p>

      {uploadedFileUrl && (
        <a
          href={uploadedFileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline text-sm"
        >
          View Uploaded File
        </a>
      )}

      <p className="text-sm">
        Deadline: <span className="font-medium">{deadline}</span>
      </p>

      {status === "pending" && (
        <>
          <label className="text-sm font-medium">
            Assign to:
            <select
              className="ml-2 p-1 border rounded"
              defaultValue=""
              onChange={(e) => onAssign?.(e.target.value)}
            >
              <option value="" disabled>
                Select a team member
              </option>
              <option value="Ali">Ali</option>
              <option value="Sara">Sara</option>
              <option value="John">John</option>
            </select>
          </label>
          <div className="flex gap-3 mt-2">
            <button
              onClick={onApprove}
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
            >
              Approve
            </button>
            <button
              onClick={onDelete}
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </>
      )}

      {status === "approved" && (
        <>
          <p className="text-sm">
            Assigned to:{" "}
            <span className="font-semibold text-green-700">{assignedTo}</span>
          </p>
          <p className="text-sm text-gray-700">Time Remaining: 2 days</p>
        </>
      )}
    </div>
  );
};

export default AdminGigCard;
