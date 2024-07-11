import React from "react";
import CategoryChart from "../components/CategoryChart";
import { connect } from "react-redux";
function TransactionsByCategoryGraphView({ transactions }) {
    return (
        <>
            <CategoryChart transactions={transactions} />
        </>
    )
}
const mapStateToProps = (state) => ({
    transactions: state.transactions,
});


export default connect(mapStateToProps)(TransactionsByCategoryGraphView)