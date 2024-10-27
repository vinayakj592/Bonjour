import React, { useState } from "react";
import GSTForm from "./gst-form";
import OTPForm from "./otp-form";
import BusinessConfirmation from "./business-confirmation";
import IncorporationForm from "./incorporation-form";

const KYCVerification = () => {
  const [step, setStep] = useState(1);
  const [gstNumber, setGstNumber] = useState("");
  const [businessDetails, setBusinessDetails] = useState(null);

  const handleGSTSubmit = (gst) => {
    setGstNumber(gst);
    setStep(2);
  };

  const handleOTPVerify = () => {
    setStep(3);
  };

  const handleBusinessConfirm = (details) => {
    setBusinessDetails(details);
    setStep(4);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-8 mt-8">
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Enter KYC Details</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 text-left sm:text-left">
            This information to verify your identity and keep your account safe.
          </p>
          {step === 1 && <GSTForm onSubmit={handleGSTSubmit} />}
          {step === 2 && (
            <OTPForm gstNumber={gstNumber} onVerify={handleOTPVerify} />
          )}
          {step === 3 && (
            <BusinessConfirmation onConfirm={handleBusinessConfirm} />
          )}
          {step === 4 && <IncorporationForm />}
        </div>
      </div>
    </div>
  );
};

export default KYCVerification;
