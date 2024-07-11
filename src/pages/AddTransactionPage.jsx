import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTransactions from "../components/AddTransactions";
import { addTransaction, deleteTransaction } from "../redux/actions";


const AddTransactionPage = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);

  const handleAddTransaction = (transaction) => {
    dispatch(addTransaction(transaction));
  };

  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#b342f5" }}>Transaction Form</h1>
      <AddTransactions
        addTransaction={handleAddTransaction}
        id={transactions[0] ? transactions[0].id + 1 : 1}
      />
    </>
  );
};

export default AddTransactionPage;
