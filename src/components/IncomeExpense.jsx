import React from "react";
import '../App.css'
export default function IncomeExpense({ transactions }) {
  const amount = transactions.map((transaction) => Number(transaction.amount));
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);
  const expenses = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);
  return (
    <>
      <div className='card'>
        <h1>Income/Budget</h1>
        <h2 style={{ color: "#40bf40" }}>+Rs.{income}</h2>
      </div>
      <div className='card'>
        <h1>Expenses</h1>
        <h2 style={{ color: "#cc3300" }}>Rs.{expenses}</h2>
      </div>
    </>
  );
}