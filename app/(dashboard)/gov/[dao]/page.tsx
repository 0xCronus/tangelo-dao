"use client";
import React from "react";
import DaoProposalsDashboard from "./Proposals";
import DAOProfile from "./Profile";

const Page = () => {
  return (
    <div className="px-32">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <DAOProfile />
        </div>
        <div className="col-span-2">
          <DaoProposalsDashboard />
        </div>
      </div>
    </div>
  );
};

export default Page;
