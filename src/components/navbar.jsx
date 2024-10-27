import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="px-4 flex flex-col">
        <div className="flex items-center justify-between h-16 ml-4">
          <div className="flex items-center">
            <button className="text-[#8A8AA3] hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="mx-4 w-px h-6 bg-[#EBEBEF]"></div>
            <div className="flex items-center flex-grow">
              <h1 className="text-lg font-semibold text-gray-900 mr-4">
                Brand Page Information
              </h1>
              <button className="bg-[#FFF9EB] text-[#8A6100] px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#FFF0D1]">
                Verify KYC
              </button>
            </div>
          </div>
        </div>
        <div className="h-px bg-[#EBEBEF] w-full"></div>
      </div>
    </nav>
  );
};

export default Navbar;
