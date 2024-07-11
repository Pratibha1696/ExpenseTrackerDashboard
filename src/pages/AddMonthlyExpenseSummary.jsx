import React from 'react';
import { connect } from 'react-redux';
import { calculateMonthlyExpenses } from '../redux/actions';

const MonthlyExpenseSummary = ({ monthlyExpenses }) => {
  return (
    <div>
      <h2>Monthly Expense Summary</h2>
      <p>Total Monthly Expenses: Rs.{monthlyExpenses}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactions,
  monthlyExpenses: state.monthlyExpenses,
});

export default connect(mapStateToProps, { calculateMonthlyExpenses })(MonthlyExpenseSummary);
