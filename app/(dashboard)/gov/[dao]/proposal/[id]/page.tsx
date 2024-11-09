import React from "react";
import { XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const DaoProposalView = () => {
  const proposal = {
    status: "Failed",
    market: {
      pass: "$2,809.13",
      fail: "$2,750.06",
    },
    mcap: {
      pass: "$58.67M",
      fail: "$57.69M",
    },
    volume: "$446,190.43",
    passThreshold: "3%",
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-gray-950 border rounded-xl p-6 ">
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-pink-500" />
              <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2">
                <XCircle className="w-8 h-8 text-pink-500 bg-black rounded-full" />
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <h1 className="text-3xl font-bold">
                Swap 150,000 USDC into ISC?
              </h1>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-500 rounded-full" />
                <div>
                  <div className="text-sm text-gray-400">proP...SqB2</div>
                  <div className="text-sm text-gray-500">
                    October 31st, 2024
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-gray-400">Type</div>
                  <div>Operations Direct Action</div>
                </div>

                <div>
                  <div className="text-gray-400">Author(s)</div>
                  <div>@Richard_ISC</div>
                </div>

                <div>
                  <div className="text-gray-400">Overview</div>
                  <div className="space-y-4">
                    <p>
                      MetaDAO has approximately $2.2M in USDC in its treasury.
                    </p>
                    <p>
                      This poses a risk to the DAO given that the US Dollar has
                      been losing value at an increasing rate. The dollar has
                      lost 17.8% of its value since 2020. Due to the debt
                      situation, we don't expect this to be resolved soon, if
                      ever.
                    </p>
                    <p>
                      $ISC was built specifically to solve this issue. ISC is an
                      inflation-resistant stable currency built on Solana. It
                      was launched at the Solana Hacker House in HCMC on
                      2023-03-17 at a price of $1.545. It is now trading at
                      $1.81.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <button className="w-full bg-white text-black py-3 px-6 rounded-xl font-medium">
            Vote
          </button>

          <Card className="bg-gray-950 border rounded-xl p-6">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-400">Status</div>
                <span className="inline-block bg-pink-900 text-pink-500 px-3 py-1 rounded-full text-sm">
                  Failed
                </span>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-2">Market</div>
                <div className="flex justify-between">
                  <span className="text-green-500">{proposal.market.pass}</span>
                  <span className="text-pink-500">{proposal.market.fail}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Pass MCap</span>
                  <span>Fail MCap</span>
                </div>
                <div className="flex justify-between">
                  <span>{proposal.mcap.pass}</span>
                  <span>{proposal.mcap.fail}</span>
                </div>
                <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-gradient-to-r from-green-500 to-pink-500" />
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Volume</div>
                <div>{proposal.volume}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Pass Threshold</div>
                <div>{proposal.passThreshold}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DaoProposalView;
