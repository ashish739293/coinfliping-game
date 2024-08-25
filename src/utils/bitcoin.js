export const connectBitcoin = async () => {
  const { unisat } = window;
  if (unisat) {
    try {
      const accounts = await unisat.requestAccounts();
      const address = accounts[0];
      const balance = await unisat.getBalance();
      const formattedBalance = (balance.confirmed / 1e8).toFixed(8); // Satoshi to BTC

      return {
        address,
        balance: formattedBalance,
        provider: unisat,
        network: 'BTC',
      };
    } catch (error) {
      console.error('Unisat connection error:', error);
      throw new Error('Unisat Wallet connection failed');
    }
  } else {
    throw new Error('Unisat Wallet is not installed');
  }
};

