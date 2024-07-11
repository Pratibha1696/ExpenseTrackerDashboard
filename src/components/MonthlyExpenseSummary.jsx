import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateMonthlyExpenses } from '../redux/actions';

const MonthlyExpenseSummary = () => {
  const dispatch = useDispatch();
  const monthlyExpenses = useSelector(state => state.monthlyExpenses);

  useEffect(() => {
    dispatch(calculateMonthlyExpenses());
  }, [dispatch]);

  return (
    <>
    <h1 style={{ color: "#b342f5" }}>Monthly Expense Summary</h1>
    <div className='card'>
      <h2>Total Expenses for this Month:</h2>
      <h2 style={{ color: "#cc3300" }}> Rs. {monthlyExpenses}</h2>
    </div>
    </>
  );
};

export default MonthlyExpenseSummary;