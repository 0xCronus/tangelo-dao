"use client";
import { ConnectKitButton } from "connectkit";
import React from "react";

function Navbar() {
  return (
    <div className="p-4">
      <nav className="bg-black w-full border border-gray-800 rounded-2xl">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3">
            {/* for future use */}
            {/* <Logo className="w-10 h-10 fill-white" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Tangelo
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0">
            {/* <a
              href=""
              type="button"
              className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Connect
            </a> */}
            <ConnectKitButton />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
