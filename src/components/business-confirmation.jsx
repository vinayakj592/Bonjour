import React from "react";

const BusinessConfirmation = ({ onConfirm }) => {
  const businessDetails = {
    gstin: "07ACZPK9220B1ZG",
    dateOfRegistration: "01/01/2017",
    businessLegalName: "XYZ Company pvt ltd",
    status: "Active",
    location: "Alambag, Lucknow, 203809",
  };

  return (
    <div className="space-y-4">
      <h4 className="font-semibold mb-1">GST Number</h4>
      <div className="border border-[#D1D1DB] p-2 rounded-lg shadow-sm">
        <p className="">{businessDetails.gstin}</p>
      </div>
      <div className="p-4 grid grid-cols-2 gap-4 bg-[#F7F7F8] rounded-xl mb-7">
        <div>
          <h4 className="font-semibold mb-1 text-[#6C6C89]">GSTIN</h4>
          <p className="font-semibold">{businessDetails.gstin}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#6C6C89]">
            DATE OF REGISTRATION
          </h4>
          <p className="font-semibold">{businessDetails.dateOfRegistration}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#6C6C89]">
            BUSINESS LEGAL NAME
          </h4>
          <p className="font-semibold">{businessDetails.businessLegalName}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#6C6C89]">STATUS</h4>
          <p className="font-semibold">{businessDetails.status}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#6C6C89]">LOCATION</h4>
          <p className="font-semibold">{businessDetails.location}</p>
        </div>
      </div>
      <button
        onClick={() => onConfirm(businessDetails)}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF2358] hover:bg-[#FF2358]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF2358]"
      >
        Confirm your business
      </button>
      <p className="text-sm text-center">
        <a href="#" className="text-[#A9A9BC] hover:text-gray-500">
          It's not your business ?
        </a>
      </p>
    </div>
  );
};

export default BusinessConfirmation;
