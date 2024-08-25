import React from 'react';
import Modal from 'react-modal';
import { CloseButton, ModalContent, WalletButton } from './styled';
import { FaTimes } from 'react-icons/fa';
import EthereumLogo from '../assets/metamask.png';
import SolanaLogo from '../assets/phantom.png';
import bitcoinLogo from '../assets/bitc.png';
import dummy from '../assets/pngwing.com.png';
import { connectEthereum } from '../utils/ethereum';
import { connectSolana } from '../utils/solana';
import { connectBitcoin } from '../utils/bitcoin';
import { connectDummyWallet } from '../utils/dummy';
import { toast } from 'react-toastify';

// Set the root element for accessibility
Modal.setAppElement('#root');

const WalletModal = ({ isOpen, onClose, setWalletData }) => {
  const handleConnect = async (walletType) => {
    try {
      let walletData;
      switch (walletType) {
        case 'Ethereum':
          walletData = await connectEthereum();
          break;
        case 'Solana':
          walletData = await connectSolana();
          break;
        case 'Bitcoin':
          walletData = await connectBitcoin();
          break;
          case 'Dummy':
            walletData = await connectDummyWallet();
            break;  
        default:
          throw new Error('Unsupported wallet type');
      }
      setWalletData(walletData);
      // clearTransactions();  // Clear transactions on successful wallet connection
      toast.success(`${walletType} connected successfully!`);
      onClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Connect Wallet"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 200,
        },
        content: {
          position: 'relative',
          inset: 'auto',
          margin: 'auto',
          padding: '20px',
          border: 'none',
          background: 'none',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%',
          overflow: 'visible',
        },
      }}
    >
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <h2>Connect Wallet</h2>
        <WalletButton onClick={() => handleConnect('Dummy')}>
          <img src={dummy} alt="Dummy" height={'80px'} width={'80px'} />
          Dummy coin
        </WalletButton>
        <WalletButton onClick={() => handleConnect('Ethereum')}>
          <img src={EthereumLogo} alt="Ethereum" height={'60px'} width={'60px'} />
          Ethereum
        </WalletButton>
        <WalletButton onClick={() => handleConnect('Solana')}>
          <img src={SolanaLogo} alt="Solana" height={'60px'} width={'60px'}/>
          Solana
        </WalletButton>
        <WalletButton onClick={() => handleConnect('Bitcoin')}>
          <img src={bitcoinLogo} alt="Bitcoin" height={'60px'} width={'60px'} />
          Bitcoin
        </WalletButton>
      </ModalContent>
    </Modal>
  );
};

export default WalletModal;
