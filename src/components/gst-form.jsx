import React, { useState } from "react";

const GSTForm = ({ onSubmit }) => {
  const [gst, setGst] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(gst);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="gst"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          GST Number
        </label>
        <input
          id="gst"
          type="text"
          value={gst}
          onChange={(e) => setGst(e.target.value)}
          placeholder="Enter your GST number"
          required
          className="mb-4 w-full px-3 py-2 border border-[#D1D1DB] rounded-md shadow-sm placeholder-[#6C6C89] focus:outline-none focus:ring-[#FF2358] focus:border-[#FF2358]"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF2358] hover:bg-[#FF2358]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF2358]"
      >
        Continue
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2"
        >
          <path
            d="M9.75 0.75L15.25 6L9.75 11.25M15 6H0.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
};

export default GSTForm;
