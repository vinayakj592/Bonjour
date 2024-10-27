import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  const steps = [
    {
      id: 1,
      name: 'Verify you Business',
      items: ['GST Certificate', 'Incorporation Details', 'CIN Verification']
    },
    { id: 2, name: 'KYC of Director' },
    { id: 3, name: 'Add Team' },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden"
          onClick={onClose}
        />
      )}
      <div 
        className={`fixed lg:static inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white w-80 py-7 pl-14 mt-8 z-30`}
      >
        <nav className="relative">
          <div className="absolute top-0 -left-1 bottom-0 w-8 bg-[#F7F7F8] rounded-full" />
          
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex">
                  <div className="w-8 relative">
                    <div
                      className={`w-6 h-6 rounded-full ${
                        step.id === 1 ? 'bg-[#FF2358]' : 'bg-[#8A8AA3]'
                      } text-white flex items-center justify-center absolute left-0`}
                    >
                      {step.id}
                    </div>
                  </div>
                  <span className="font-medium text-black ml-4">
                    {step.name}
                  </span>
                </div>

                {step.items && (
                  <div className="mt-4 space-y-4">
                    {step.items.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="w-8 relative">
                          <div
                            className={`w-2 h-2 rounded-full absolute left-2 top-2 ${
                              index === 0 ? 'bg-[#FF003D]' : 'bg-[#D1D1D8]'
                            }`}
                          />
                        </div>
                        <span
                          className={`ml-8 text-sm ${
                            index === 0 ? 'text-[#FF2358]' : 'text-[#6C6C89]'
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;