import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNotification = ({ transactions }) => {

  useEffect(() => {
    const amounts = transactions.map(transaction => Number(transaction.amount));
    const income = amounts.filter(amount => amount > 0).reduce((acc, amount) => acc + amount, 0);
    const expenses = amounts.filter(amount => amount < 0).reduce((acc, amount) => acc + amount, 0);

    if (income + expenses < 0) {
      toast.error('Warning: Your expenses exceed your budget!');
    }
  }, [transactions]);

  return <ToastContainer />;
};

export default AddNotification;

