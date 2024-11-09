import React from "react";
import { ArrowUpRight, Github, Globe, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccount } from "wagmi";
import Link from "next/link";
import { useParams } from "next/navigation";

interface MetaDAOProfile {
  price: number;
  description: string;
  proposals: number;
  passThreshold: number;
  totalVolume: number;
  traders: number;
  trades: number;
}

const DAOProfile: React.FC<MetaDAOProfile> = ({
  name = "Citrea",
  description = "Today's organizations are captured by politics. They act according to what's good for those in power, not according to what's good for the organization. MetaDAO escapes this issue by using futarchy, a system where markets make decisions.",
  proposals = 23,
  twitter = "https://x.com/citrea_xyz",
  github = "https://github.com/chainwayxyz/citrea",
  website = "https://origins.citrea.xyz/",
}) => {
  const { isConnected } = useAccount();
  const params = useParams();
  const dao = Array.isArray(params.dao) ? params.dao[0] : params.dao;
  return (
    <div className="max-w-md bg-black text-white p-6 rounded-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-black border-2 border-neutral-800">
            <div className="w-10 h-10 rounded-full bg-red-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ArrowUpRight className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {name}
            <span className="text-neutral-500">⬡</span>
          </h1>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-200 mb-8">{description}</p>

      {/* Stats Grid */}
      <div className="grid gap-6 mb-8">
        {[{ label: "Proposals", value: proposals }].map((stat) => (
          <div key={stat.label}>
            <h3 className="text-neutral-500 mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
        {isConnected && (
          <Link href={`/gov/${dao}/new`}>
            <Button>Create New Proposal</Button>
          </Link>
        )}
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-4">
        <a
          href="https://x.com/MetaDAOProject"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <Twitter size={20} />
          {twitter}
        </a>
        <a
          href="https://github.com/metaDAOproject"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <Github size={20} />
          {github}
        </a>
        <a
          href="https://metadao.fi"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <Globe size={20} />
          {website}
        </a>
      </div>
    </div>
  );
};

export default DAOProfile;
