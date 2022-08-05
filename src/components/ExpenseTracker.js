import React, { useState, useEffect } from "react";
import Expense from "./Expense";
import TransactionForm from "./TransactionForm";
import TransactionHistory from "./TransactionHistory";

import { uniqueId } from "../utils";

//Aggregator component/container component

const transactionData = [
  { id: uniqueId(), name: 'Salary', amount: 5000,type: 'income'},
  { id: uniqueId(), name: 'Grocery', amount: 100,type: 'expense'}
]


const ExpenseTracker = () => {
  const [income, setIcome] = useState(0);
  const [expense, setExpense] = useState(0);
  // eslint-disable-next-line no-use-before-define
  const [transactions, setTransactions] = useState(transactions);

  const saveState = () => {
    localStorage.setItem('expenseTrackerState', JSON.stringify(transactions));
  };

  const calculateExpenses = () => {
    let income = 0, expense = 0;

    transactions.forEach((data) => {
      if (data.type === 'income') {
        income += data.amount;
      } else if (data.type === 'expense') {
        expense += data.amount;
      }
    });

    saveState();


    setIcome(income);
    setExpense(expense);
  };

  const handleAddNewTransaction = item => {
    let newTransactions = [...transactions, item];
    setTransactions(newTransactions);
  };

  const handleDeleteTransaction = id => {
    const newTransactions = transactions.filter((item) => item.id !== id);
    setTransactions(newTransactions);
  };

  useEffect(() => {
    let localState = JSON.parse(localStorage.getItem('expenseTrackerState'));
    if (localState) {
      setTransactions(localState);
    } else {
      calculateExpenses();
    }
  }, []);

  useEffect(() => {
  }, [transactions]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <Expense income={income} expense={expense} />
      <TransactionHistory
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
      <TransactionForm onNewTransaction={handleAddNewTransaction} />
    </div>
  );
};

export default ExpenseTracker;
