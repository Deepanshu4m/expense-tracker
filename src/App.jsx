import { useState, useEffect } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import { saveToLocalStorage, getFromLocalStorage } from './utils/localStorage';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions = getFromLocalStorage('transactions');
    if (savedTransactions) {
      setTransactions(savedTransactions);
    }
  }, []);

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
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Summary transactions={transactions} />
        <ExpenseForm addTransaction={addTransaction} />
        <ExpenseList transactions={transactions} />
      </main>
    </div>
  )
}

export default App;