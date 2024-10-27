import React, { useState } from "react";

const IncorporationForm = () => {
  const [incorporationNumber, setIncorporationNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="incorporation"
          className="block text-sm font-medium mb-2"
        >
          Incorporation Certificate Number
        </label>
        <input
          id="incorporation"
          type="text"
          value={incorporationNumber}
          onChange={(e) => setIncorporationNumber(e.target.value)}
          placeholder="enter incorporation certificate number"
          required
          className="mb-5 w-full px-3 py-2 border border-[#D1D1DB] rounded-md shadow-sm placeholder-[#6C6C89] focus:outline-none "
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">
          Upload Incorporation Certificate
        </h4>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <div className="w-10 h-10 bg-[#F7F7F8] rounded-full flex items-center justify-center mx-auto mb-2">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 10.75V12.25C1.25 13.9069 2.59315 15.25 4.25 15.25H12.75C14.4069 15.25 15.75 13.9069 15.75 12.25V10.75M8.5 10.25V1M5.25 4.25L8.5 0.75L11.75 4.25"
                stroke="#8A8AA3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm ">
            Drop your file here, or{" "}
            <span className="text-[#FF2358] cursor-pointer">
              Click to Upload
            </span>
          </p>
          <p className="text-xs text-[#6C6C89] mt-1">
            recommended, max size 5MB each.
          </p>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Upload business PAN</h4>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <div className="w-10 h-10 bg-[#F7F7F8] rounded-full flex items-center justify-center mx-auto mb-2">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 10.75V12.25C1.25 13.9069 2.59315 15.25 4.25 15.25H12.75C14.4069 15.25 15.75 13.9069 15.75 12.25V10.75M8.5 10.25V1M5.25 4.25L8.5 0.75L11.75 4.25"
                stroke="#8A8AA3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm ">
            Drop your file here, or{" "}
            <span className="text-[#FF2358] cursor-pointer underline">
              Click to Upload
            </span>
          </p>
          <p className="text-xs text-[#6C6C89] mt-1">
            recommended, max size 5MB each.
          </p>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Upload GST Certificate</h4>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <div className="w-10 h-10 bg-[#F7F7F8] rounded-full flex items-center justify-center mx-auto mb-2">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 10.75V12.25C1.25 13.9069 2.59315 15.25 4.25 15.25H12.75C14.4069 15.25 15.75 13.9069 15.75 12.25V10.75M8.5 10.25V1M5.25 4.25L8.5 0.75L11.75 4.25"
                stroke="#8A8AA3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm">
            Drop your file here, or{" "}
            <span className="text-[#FF2358] cursor-pointer underline">
              Click to Upload
            </span>
          </p>
          <p className="text-xs text-[#6C6C89] mt-1">
            recommended, max size 5MB each.
          </p>
        </div>
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
      <p className="text-sm text-center text-[#A9A9BC] pb-10">Skip for now</p>
    </form>
  );
};

export default IncorporationForm;
