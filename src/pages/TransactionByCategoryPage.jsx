import React from "react";
import TransactionsByCategory from "../components/TransactionsByCategory";
import { connect } from "react-redux";

function TransactionsByCategoryPage({ transactions }) {
    return (
        <>
            <TransactionsByCategory transactions={transactions} />
        </>
    )
}
const mapStateToProps = (state) => ({ transactions: state.transactions });
export default connect(mapStateToProps)(TransactionsByCategoryPage)