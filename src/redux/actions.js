export const ADD_TRANSACTION = "ADD_TRANSACTION"
export const DELETE_TRANSACTION = "DELETE_TRANSACTION"
export const CALCULATE_MONTHLY_EXPENSES = 'CALCULATE_MONTHLY_EXPENSES';


export const addTransaction = (transaction) => ({
    type: ADD_TRANSACTION,
    payload: transaction
})

export const deleteTransaction = (transactionId) => ({
    type: DELETE_TRANSACTION,
    payload: transactionId
})

export const calculateMonthlyExpenses = () => ({
    type: CALCULATE_MONTHLY_EXPENSES,
});