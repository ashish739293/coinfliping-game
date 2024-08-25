import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { SidebarContainer, CloseButton, TransactionList, TransactionItem } from './styled';
import './sidebar.css'
const Sidebar = ({ isOpen, onClose, transactions }) => {
  return (
    <SidebarContainer className={isOpen ? 'open' : ''}>
      <CloseButton onClick={onClose}>
        <FaTimes />
      </CloseButton>
      <h2>Transaction History</h2>
      <TransactionList>
        {transactions.length ? (
          transactions.map((transaction) => (
            <TransactionItem key={transaction.hash}>
              <div className="transaction-amount">{transaction.amount}</div>
              <div>Status: <span className={`transaction-${transaction.status}`} >{transaction.status}</span></div>
              <div className="transaction-date">{transaction.timestamp}</div>
            </TransactionItem>
          ))
        ) : (
          <p>No transactions yet</p>
        )}
      </TransactionList>
    </SidebarContainer>
  );
};

export default Sidebar;
