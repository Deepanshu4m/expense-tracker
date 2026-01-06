function ExpenseList({ transactions }) {
  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500 text-center">No transactions yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
      
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div>
              <p className="font-semibold text-gray-800">{transaction.description}</p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            
            <div className="text-right">
              <p className={`text-lg font-bold ${
                transaction.category === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.category === 'income' ? '+' : '-'}₹{transaction.amount}
              </p>
              <p className="text-xs text-gray-500 capitalize">{transaction.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;