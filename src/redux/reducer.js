import { ADD_TRANSACTION, DELETE_TRANSACTION, CALCULATE_MONTHLY_EXPENSES } from './actions';

const initialState = {
  transactions: [],
  monthlyExpenses: 0
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
      };
    case CALCULATE_MONTHLY_EXPENSES:
      const currentMonth = new Date().getMonth() + 1; 
      const monthlyTransactions = state.transactions.filter(transaction => {
        const transactionMonth = new Date(transaction.date).getMonth() + 1;
        return transactionMonth === currentMonth;
      });
      const totalMonthlyExpenses = monthlyTransactions.reduce((total, transaction) => total + transaction.amount, 0);
      return {
        ...state,
        monthlyExpenses: totalMonthlyExpenses,
      };
    default:
      return state;
  }
};

export default transactionReducer;