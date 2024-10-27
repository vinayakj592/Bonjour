import React, { useState } from 'react';
import KYCVerification from './components/kyc-verification';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar onMenuClick={toggleSidebar} />
      <div className="flex flex-1 relative">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <main className="flex-1 w-full">
          <KYCVerification />
        </main>
      </div>
    </div>
  );
}

export default App;