import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MonthlyExpenseSummary from './components/MonthlyExpenseSummary';

const MonthlyExpenseSummaryPage = () => {
    return (
        <Provider store={store}>
            <div>
                <MonthlyExpenseSummary />
            </div>
        </Provider>
    );
};

export default MonthlyExpenseSummaryPage;