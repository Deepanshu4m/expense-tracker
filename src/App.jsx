import { useState, useEffect } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { saveToLocalStorage, getFromLocalStorage } from './utils/localStorage';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage when app starts
  useEffect(() => {
    const savedTransactions = getFromLocalStorage('transactions');
    if (savedTransactions) {
      setTransactions(savedTransactions);
    }
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    saveToLocalStorage('transactions', transactions);
  }, [transactions]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      id: Date.now(),
      ...transaction
    };
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <ExpenseForm addTransaction={addTransaction} />
        <ExpenseList transactions={transactions} />
      </main>
    </div>
  )
}

export default App;