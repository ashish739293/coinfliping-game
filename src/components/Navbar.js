import React, { useState } from 'react';
import { NavbarContainer, Logo, NavIcons, BalanceInfo, IconButton } from './styled';
import { FaWallet, FaHistory, FaSignOutAlt, FaBars } from 'react-icons/fa';
import WalletModal from './WalletModal';
import Sidebar from './Sidebar';  // Import Sidebar component
import { toast } from 'react-toastify';

const Navbar = ({ walletData, setWalletData, transactions}) => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // State for sidebar

  const handleDisconnect = () => {
    setWalletData(null);
    // setTransactions([]);
    toast.info('Wallet disconnected');  
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 

  return (
    <>
      <NavbarContainer>
        <Logo>Flip Coin</Logo>
        <NavIcons>
          {walletData && (
            <BalanceInfo>
              {walletData.balance} {walletData.network}
            </BalanceInfo>
          )}
          <IconButton onClick={toggleSidebar}>
            <FaHistory />
          </IconButton>
          
          <IconButton onClick={() => setIsWalletModalOpen(true)}>
            <FaWallet color='aqua' />
          </IconButton>
          {walletData && (
            <IconButton onClick={handleDisconnect}>
              <FaSignOutAlt size={24} color='red' />
            </IconButton>
          )}
        </NavIcons>
      </NavbarContainer>

      {isWalletModalOpen && (
        <WalletModal
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
          setWalletData={setWalletData}

        />
      )}

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        transactions={transactions}
      />
    </>
  );
};

export default Navbar;
