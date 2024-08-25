import { PublicKey } from '@solana/web3.js';

export const connectSolana = async () => {
  if (!window.solana || !window.solana.isPhantom) {
    alert('Phantom Wallet is not installed. Please install it from https://phantom.app');
    throw new Error('Phantom Wallet is not installed or not detected');
  }

  try {
    const { solana } = window;
    console.log('Phantom Wallet detected');

    const response = await solana.connect({ onlyIfTrusted: false });
    const address = response.publicKey.toString();

    // Hardcoded dummy balance
    const formattedBalance = '100.00'; // Dummy balance in SOL

    return {
      address,
      balance: formattedBalance,
      connection: null, // No actual connection needed since we're using a dummy balance
      network: 'SOL',
    };
  } catch (error) {
    console.error('Error connecting to Phantom Wallet:', error);
    throw new Error('Failed to connect to Phantom Wallet');
  }
};
