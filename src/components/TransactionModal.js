import React from 'react';
import styled from 'styled-components';

const TransactionHistoryContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  margin: 20px auto;
  color: #fff;
  font-family: 'Garamond', serif;
`;

const TransactionItem = styled.div`
  background-color: ${(props) => (props.status === 'Win' ? '#28a745' : '#dc3545')};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
`;

const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransactionAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const TransactionStatus = styled.span`
  font-size: 14px;
  opacity: 0.8;
`;

const TransactionTime = styled.span`
  font-size: 12px;
  color: #ddd;
  margin-top: 5px;
`;

const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryContainer>
      <h2>Transaction History</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        transactions.map((transaction, index) => (
          <TransactionItem key={index} status={transaction.status}>
            <TransactionDetails>
              <TransactionAmount>{transaction.amount}</TransactionAmount>
              <TransactionStatus>{transaction.status}</TransactionStatus>
              <TransactionTime>{new Date().toLocaleTimeString()}</TransactionTime>
            </TransactionDetails>
            <div>{transaction.hash}</div>
          </TransactionItem>
        ))
      )}
    </TransactionHistoryContainer>
  );
};

export default TransactionHistory;
