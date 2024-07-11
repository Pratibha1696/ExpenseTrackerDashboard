import React, { Component } from "react";
import Balance from "../components/Balance";
import { addTransaction, deleteTransaction } from "../redux/actions";
import TransactionsList from "../components/TransactionsList";
import IncomeExpense from "../components/IncomeExpense";
import { connect } from "react-redux";
import AddChart from "../components/AddChart";
import AddNotification from "../components/AddNotification";
class Home extends Component {
  render() {
    const { transactions, deleteTransaction } = this.props;
    return (
      <>
        <div className='main-title'>
          <Balance transactions={transactions} />
        </div>
        <div className='main-cards'>
          <IncomeExpense transactions={transactions} />
          <AddNotification transactions={transactions} />
        </div><br /><br /><br />
        <div style={{ display: "flex", gap: 250 }}>
          <TransactionsList transactions={transactions} deleteTransaction={(id) => deleteTransaction(id)} />
          <AddChart transactions={transactions} />
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
