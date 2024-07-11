import React, { useState } from "react";
import { useSelector } from "react-redux";

const TransactionsByCategory = () => {

  const selectStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#36454F',
    fontSize: '16px',
    color: 'white',
    outline: 'none',
    width: '79vw',
    boxSizing: 'border-box',
  };

  const transactions = useSelector((state) => state.transactions);
  const [selectedCategory, setSelectedCategory] = useState("");

  if (!transactions) {
    return <p>Loading transactions...</p>;
  }

  const filteredTransactions = selectedCategory
    ? transactions.filter((transaction) => transaction.category === selectedCategory)
    : transactions;

  return (
    <div>
      <h2 style={{ color: "#b342f5" }}>Filter Transactions by Category</h2>
      <select style={selectStyle} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Transportation">Transportation</option>
        <option value="Utilities">Utilities</option>
        <option value="Utilities">Other</option>
      </select>

      {filteredTransactions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Text</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.text}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions found for selected category.</p>
      )}
    </div>
  );
};

export default TransactionsByCategory;
