function Summary({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.category === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.category === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Total Income Card */}
      <div className="bg-green-100 rounded-lg shadow-md p-6">
        <p className="text-green-600 text-sm font-semibold mb-2">Total Income</p>
        <p className="text-3xl font-bold text-green-700">₹{totalIncome.toFixed(2)}</p>
      </div>

      {/* Total Expense Card */}
      <div className="bg-red-100 rounded-lg shadow-md p-6">
        <p className="text-red-600 text-sm font-semibold mb-2">Total Expenses</p>
        <p className="text-3xl font-bold text-red-700">₹{totalExpense.toFixed(2)}</p>
      </div>

      {/* Balance Card */}
      <div className="bg-blue-100 rounded-lg shadow-md p-6">
        <p className="text-blue-600 text-sm font-semibold mb-2">Balance</p>
        <p className={`text-3xl font-bold ${balance >= 0 ? 'text-blue-700' : 'text-red-700'}`}>
          ₹{balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Summary;