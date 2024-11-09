"use client";
import React from "react";
import { Clock } from "lucide-react";
import { useParams } from "next/navigation";

interface ProposalCardProps {
  status: string;
  timeAgo: string;
  title: string;
  dao: string;
  index: number;
}

const ProposalCard: React.FC<ProposalCardProps> = ({
  status,
  timeAgo,
  title,
  dao,
  index,
}) => (
  <div className="bg-gray-950 border rounded-xl p-6 mb-4">
    <a href={`/gov/${dao}/proposal/${index}`}>
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center
        ${status === "ended" ? "bg-pink-400" : "bg-green-400"}`}
        >
          {status === "ended" ? "✕" : "✓"}
        </div>
        <div className="flex items-center text-gray-400">
          <Clock className="w-4 h-4 mr-2" />
          <span>Ended {timeAgo}</span>
        </div>
        {/* {tags.map((tag, index) => (
        <span
          key={index}
          className={`px-3 py-1 rounded-full text-sm
            ${
              tag === "Treasury"
                ? "bg-green-900 text-green-400"
                : tag === "Dao"
                ? "bg-pink-900 text-pink-400"
                : tag === "Governance"
                ? "bg-yellow-900 text-yellow-400"
                : ""
            }`}
        >
          {tag}
        </span>
      ))} */}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <div className="flex gap-2 text-gray-400">
          <span>Read proposal</span>
          {/* <span>•</span>
        <span>View Market</span> */}
        </div>
      </div>

      {/* <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex -space-x-2">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-gray-900
                ${
                  i % 3 === 0
                    ? "bg-pink-400"
                    : i % 3 === 1
                    ? "bg-blue-400"
                    : "bg-orange-400"
                }`}
              />
            ))}
          {votes > 0 && (
            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-900 flex items-center justify-center text-white text-sm">
              +{votes}
            </div>
          )}
        </div>
        <div className="flex items-center ml-4 gap-4">
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4" />
            <span>{fires}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-green-400">${greenAmount}</span>
        <span className="text-pink-400">${pinkAmount}</span>
      </div>
    </div> */}
    </a>
  </div>
);

const DaoProposalsDashboard = () => {
  const params = useParams();
  const dao = Array.isArray(params.dao) ? params.dao[0] : params.dao;
  const proposals = [
    {
      status: "ended",
      timeAgo: "4 days ago",
      title: "Swap 150,000 USDC into ISC?",
      tags: ["Treasury"],
      votes: 46,
      likes: 6,
      fires: 0,
      greenAmount: "2,809.13",
      pinkAmount: "2,750.06",
    },
    {
      status: "active",
      timeAgo: "12 days ago",
      title: "Hire Advaith Sekharan as Founding Engineer?",
      tags: ["Dao", "Treasury"],
      votes: 15,
      likes: 1,
      fires: 1,
      greenAmount: "3,459.84",
      pinkAmount: "2,898.86",
    },
    {
      status: "ended",
      timeAgo: "4 days ago",
      title: "Swap 150,000 USDC into ISC?",
      tags: ["Treasury"],
      votes: 46,
      likes: 6,
      fires: 0,
      greenAmount: "2,809.13",
      pinkAmount: "2,750.06",
    },
    {
      status: "ended",
      timeAgo: "12 days ago",
      title: "Hire Advaith Sekharan as Founding Engineer?",
      tags: ["Dao", "Treasury"],
      votes: 15,
      likes: 1,
      fires: 1,
      greenAmount: "3,459.84",
      pinkAmount: "2,898.86",
    },
    {
      status: "ended",
      timeAgo: "4 days ago",
      title: "Swap 150,000 USDC into ISC?",
      tags: ["Treasury"],
      votes: 46,
      likes: 6,
      fires: 0,
      greenAmount: "2,809.13",
      pinkAmount: "2,750.06",
    },
    {
      status: "ended",
      timeAgo: "12 days ago",
      title: "Hire Advaith Sekharan as Founding Engineer?",
      tags: ["Dao", "Treasury"],
      votes: 15,
      likes: 1,
      fires: 1,
      greenAmount: "3,459.84",
      pinkAmount: "2,898.86",
    },
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Proposals</h1>
        </div>

        <div className="space-y-4">
          {proposals.map((proposal, index) => (
            <ProposalCard key={index} {...proposal} index={index} dao={dao} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaoProposalsDashboard;
