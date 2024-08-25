import React, { useState } from 'react';
import { CoinFlipContainer } from './styled';
import { toast } from 'react-toastify';
import coinHeads from '../assets/output-onlinepngtools.png';
import coinTails from '../assets/output-onlinepngtools (1).png';
import coinSound from '../assets/coin-sound.mp3';
import './CoinFlipGame.css'; // Import CSS for styling and animation

const CoinFlipGame = ({ walletData, addTransaction , openWalletModal}) => {
  const [betAmount, setBetAmount] = useState('');
  const [guess, setGuess] = useState('heads');
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState(null);

  const handleFlip = async () => {
    if (!walletData) {
      toast.error('Please connect your wallet first.');
      openWalletModal(); // Open the wallet modal if no wallet is connected
      return;
    }
    if (!betAmount || isNaN(betAmount) || betAmount <= 0) {
      toast.error('Please enter a valid bet amount.');
      return;
    }
    if (parseFloat(betAmount) > parseFloat(walletData.balance)) {
      toast.error('Insufficient balance.');
      return;
    }

    setFlipping(true);
    setResult(null);

    // Play coin flip sound
    const audio = new Audio(coinSound);
    audio.play();

    // Simulate coin flip
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
      const win = outcome === guess;

      // Update balance
      const newBalance = win
        ? (parseFloat(walletData.balance) + parseFloat(betAmount)).toFixed(4)
        : (parseFloat(walletData.balance) - parseFloat(betAmount)).toFixed(4);

      walletData.balance = newBalance;

      // Add transaction
      addTransaction({
        hash: Math.random().toString(36).substr(2, 9),
        amount: `${betAmount} ${walletData.network}`,
        status: win ? 'Win' : 'Lose',
      });

      // Stop flipping and sound
      setFlipping(false);
      audio.pause(); // Stop the sound when flipping stops
      audio.currentTime = 0; // Reset the sound for the next flip
      
      setResult({ outcome, win });
      // setTimeout(() => {

      //   setResult(null);

      // }, 10000);

    }, 2000);
  };

  return (
    <CoinFlipContainer className="coin-flip-container">
      <h2 className="game-title">Royal Coin Flip Game</h2>
      <div className="coin-display">
        <img
          src={result ? (result.outcome === 'heads' ? coinHeads : coinTails) : coinHeads}
          alt={result ? result.outcome : 'heads'}
          className={`coin-img ${flipping ? 'flipping' : ''}`}
        />
      </div>
      {result && (
        <div className="result-section">
          <h3 className={`result-message ${result.win ? 'win' : 'lose'}`}>
            You {result.win ? 'Win!' : 'Lose!'}
          </h3>
        </div>
      )}
      {/* <h2 className="game-title">Royal Coin Flip Game</h2> */}
      <div className="bet-input-container">
        <input
          type="number"
          placeholder="Bet Amount"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          className="bet-input"
        />
      </div>
      <div className="guess-section">
        <label className="guess-label">
          <input
            type="radio"
            value="heads"
            checked={guess === 'heads'}
            onChange={() => setGuess('heads')}
            className="guess-input"
          />
          <img src={coinHeads} alt="Heads" className="guess-image" />
        </label>
        <label className="guess-label">
          <input
            type="radio"
            value="tails"
            checked={guess === 'tails'}
            onChange={() => setGuess('tails')}
            className="guess-input"
          />
          <img src={coinTails} alt="Tails" className="guess-image" />
        </label>
      </div>
      <button
        onClick={handleFlip}
        disabled={flipping}
        className={`flip-button ${flipping ? 'flipping' : ''}`}
      >
        {flipping ? 'Flipping...' : 'Flip Coin'}
      </button>
      
    </CoinFlipContainer>
  );
};

export default CoinFlipGame;
