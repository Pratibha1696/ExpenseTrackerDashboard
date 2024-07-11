import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home"
import { Routes, Route } from "react-router-dom";
import AddTransactionPage from "../pages/AddTransactionPage";
import TransactionsByCategoryPage from "../pages/TransactionByCategoryPage";
import TransactionsByCategoryGraphView from "../pages/TransactionByCategoryGraphView";
import MonthlyExpenseSummary from "../components/MonthlyExpenseSummary";
import CalculatorPage from "../pages/CalculatorPage";
import DownloadExpenses from "../pages/DownloadExpenses"


function Main() {
  return (
    <>
      <div className='grid-container'>
        <Header />
        <Sidebar />
        <main className='main-container'>
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="AddTransactionPage" element={<AddTransactionPage />} />
            <Route path="ViewCategories" element={<TransactionsByCategoryPage />} />
            <Route path="ViewCategoryByGraph" element={<TransactionsByCategoryGraphView />} />
            <Route path="MonthlyExpenseSummary" element={<MonthlyExpenseSummary />} />
            <Route path="DownloadExpenses" element={<DownloadExpenses />} />
            <Route path="CalculatorPage" element={<CalculatorPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
export default Main;