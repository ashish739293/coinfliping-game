import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CoinFlipGame from './components/CoinFlipGame';
import WalletModal from './components/WalletModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [walletData, setWalletData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const addTransaction = (transaction) => {
    const timestamp = new Date().toLocaleString();
    setTransactions([{ ...transaction, timestamp }, ...transactions]);
  };

  const openWalletModal = () => {
    setIsWalletModalOpen(true);
  };

  return (
    <div>
      <Navbar
        walletData={walletData}
        setWalletData={setWalletData}
        transactions={transactions}
      />
      <CoinFlipGame walletData={walletData} addTransaction={addTransaction} openWalletModal={openWalletModal} />
      {isWalletModalOpen && (
        <WalletModal
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
          setWalletData={setWalletData}
        />
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
