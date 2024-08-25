import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 96%;
  text-align:center;
  height: auto;
  background-color: rgba(30, 30, 30, 0.8); /* Adjust the alpha value (0.8) for transparency */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0% 2% 0% 2%;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.h1`
  color: #d4af37;
  font-family: 'Garamond', serif;
  font-size: 30px;
  text:bold;
  margin-bottom: 25px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-top: 1%;
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const BalanceInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: #ffffff;
  font-size: 16px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  margin-left: 15px;
  display: flex;
  align-items: center;

  &:hover {
    color: #f39c12;
  }
`;

export const ModalContent = styled.div`
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  color: #ffffff;
  position: relative;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    color: #e74c3c;
  }
`;

export const WalletButton = styled.button`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  background-color: #1e1e1e;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #333333;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export const CoinFlipContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  // background-color: #222;
  background-color: rgba(30, 30, 30, 0.8); /* Adjust the alpha value (0.8) for transparency */
  color: white;
  padding: 20px;
  width: 250px; /* Fixed width for desktop */
  height: 100vh;
  border-radius: 0 10px 10px 0;
  overflow-y: auto;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  &.open {
    transform: translateX(0);
  } 
    margin-top:7.5%;
`;

export const TransactionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const TransactionItem = styled.li`
  background-color: #333;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;