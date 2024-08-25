import { ethers } from 'ethers';

export const connectEthereum = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      const formattedBalance = ethers.formatEther(balance).slice(0, 6);

      return {
        address,
        balance: formattedBalance,
        provider,
        signer,
        network: 'ETH',
      };
    } catch (error) {
      console.error('MetaMask connection error:', error);
      throw new Error('MetaMask connection failed');
    }
  } else {
    throw new Error('MetaMask is not installed');
  }
};
