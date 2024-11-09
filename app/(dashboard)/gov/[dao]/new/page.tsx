"use client";
import React, { useState } from "react";
import { ChevronDown, Clock, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import { useWriteContract } from "wagmi";
import { ABI } from "@/lib/GovernorABI";
import { DAO_Addresses } from "@/lib/metadata";
import { useParams } from "next/navigation";

const NewProposalForm = () => {
  const params = useParams();
  const dao = Array.isArray(params.dao) ? params.dao[0] : params.dao;
  const [activeTab, setActiveTab] = useState("write");
  const [markdownContent, setMarkdownContent] = useState("");
  const { data: hash, writeContract } = useWriteContract();

  const createProposal = async () => {
    console.log("Creating proposal");
    await writeContract({
      address: "0x527Cfde7Aad99949642CaFBD9B324FFf7D2612c4",
      abi: ABI,
      functionName: "propose",
      args: [
        ["0xc01ae45F187080B9bb5AC2DDBBa256B9E5D80Cd7"],
        [0],
        [
          "0x6cb16189000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000001000000000000000000000000b7859f08d656c6e25d9ea0470860b28f7609e44100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
        ],
        "Proposal Title",
      ],
    });
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8">New Proposal</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Section */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Title Section */}
              <div>
                <label className="block text-sm text-gray-400 uppercase mb-2">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full bg-gray-950 border rounded-xl p-3 focus:outline-none focus:border-gray-600"
                />
              </div>

              {/* Content Section */}
              <div>
                <label className="block text-sm text-gray-400 uppercase mb-2">
                  Content
                </label>
                <div className="border-b mb-4">
                  <div className="flex space-x-8 mb-2">
                    <button
                      onClick={() => setActiveTab("write")}
                      className={`pb-2 ${
                        activeTab === "write"
                          ? "text-white border-b-2 border-white"
                          : "text-gray-500"
                      }`}
                    >
                      Write
                    </button>
                    <button
                      onClick={() => setActiveTab("preview")}
                      className={`pb-2 ${
                        activeTab === "preview"
                          ? "text-white border-b-2 border-white"
                          : "text-gray-500"
                      }`}
                    >
                      Preview
                    </button>
                  </div>

                  {activeTab === "write" ? (
                    <textarea
                      value={markdownContent}
                      onChange={(e) => setMarkdownContent(e.target.value)}
                      placeholder="Use markdown to format your proposal content"
                      className="w-full h-48 bg-gray-950 border border-gray-800 rounded-xl p-3 focus:outline-none focus:border-gray-600"
                    />
                  ) : (
                    <Markdown className="mt-4 min-h-48 border rounded-xl p-3 bg-gray-950">
                      {markdownContent}
                    </Markdown>
                  )}
                </div>
              </div>
              <Button onClick={createProposal} className="rounded-xl">Create Proposal</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Constraints Card */}
            <div className="bg-gray-950 border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Constraints</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Timer className="w-5 h-5 text-gray-400" />
                    <span>Pass Threshold</span>
                  </div>
                  <span>4.00%</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span>Proposal Duration</span>
                  </div>
                  <span>~ 1 week</span>
                </div>
              </div>
            </div>

            {/* Instruction Card */}
            <div className="bg-gray-950 border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Instruction</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-950 border rounded-xl">
                  <span>Execution</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 uppercase mb-2">
                    Target address
                  </label>
                  <input className="w-full  bg-gray-950 border rounded-xl p-3 focus:outline-none focus:border-gray-600" />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 uppercase mb-2">
                    Calldata
                  </label>
                  <textarea className="w-full h-24 bg-gray-950 border rounded-xl p-3 focus:outline-none focus:border-gray-600" />
                </div>

                <label className="block text-sm text-gray-400 uppercase mb-2">
                  Get the calldata from https://abi.hashex.org/
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProposalForm;
