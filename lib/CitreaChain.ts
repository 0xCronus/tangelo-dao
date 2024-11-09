import { type Chain } from "viem";

export const Citrea: Chain = {
  id: 5115,
  name: "Citrea Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "cBTC",
    symbol: "cBTC",
  },
  rpcUrls: {
    default: { http: ["rpc.testnet.citrea.xyz"] },
  },
  blockExplorers: {
    default: { name: "explorer", url: "explorer.testnet.citrea.xyz" },
    snowtrace: { name: "explorer", url: "explorer.testnet.citrea.xyz" },
  },
  testnet: false,
};