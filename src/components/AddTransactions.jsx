import React, { useState } from 'react';
import './FormStyles.css';

const AddTransactions = ({ id, addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: id,
      text: text,
      amount: parseFloat(amount),
      date: date,
      category: category
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setDate("");
    setCategory("");
  };

  return (
    <form onSubmit={onSubmit} className="styled-form">
      <div className="form-group">
        <label>Text</label>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter Text..."
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="Enter Amount..."
          type="number"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          value={date}
          onChange={(event) => setDate(event.target.value)}
          placeholder="Enter Date..."
          type="date"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="form-control"
        >
          <option value="">Select Category...</option>
          <option value="Groceries">Groceries</option>
          <option value="Transportation">Transportation</option>
          <option value="Utilities">Utilities</option>
          <option value="Utilities">Other</option>
        </select>
      </div>
      <button className="btn btn-primary">Add Transaction</button>
    </form>
  );
};

export default AddTransactions;
