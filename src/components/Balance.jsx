import React from "react";

export default function Balance({ transactions }) {
  const amount = transactions.map((transaction) => Number(transaction.amount));
  const total = amount.reduce((acc, item) => acc + item, 0);
  return (
    <>
      <div>
        <h1 style={{ color: "#b342f5" }}>YOUR BALANCE IS: Rs {total}</h1>
      </div>
    </>
  );
}