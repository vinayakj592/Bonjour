import React, { useState } from "react";

const OTPForm = ({ gstNumber, onVerify }) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify();
  };

  const isOtpComplete = otp.length === 6;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="mb-10 font-sans">
        Your GSTIN number <span className="font-medium">{gstNumber}</span> we
        have send OTP on your registered mobile number{" "}
        <span className="font-medium">+91 XXXXXXXX88</span>
      </p>
      <div>
        <label htmlFor="otp" className="block text-sm font-medium mb-1">
          Your 6-digit code
        </label>
        <input
          id="otp"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter 6 digit code"
          required
          maxLength={6}
          className="w-full px-3 py-2 border border-[#D1D1DB] rounded-md shadow-sm placeholder-[#6C6C89] focus:outline-none focus:ring-[#FF2358] focus:border-[#FF2358]"
        />
      </div>
      <p className="text-sm text-right">
        <a href="#" className="text-[#6C6C89] hover:text-gray-600 font-medium">
          Resend OTP
        </a>
      </p>
      <button
        type="submit"
        disabled={!isOtpComplete}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
        ${isOtpComplete 
          ? 'text-white bg-[#FF2358] hover:bg-[#FF2358]/90' 
          : 'text-white bg-[#FFE5EB] cursor-not-allowed'
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF2358]`}
      >
        Verify
      </button>
    </form>
  );
};

export default OTPForm;