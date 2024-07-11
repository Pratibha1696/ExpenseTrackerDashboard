import React from 'react'
import { GiExpense } from "react-icons/gi";
import { IoMdHome, IoIosAddCircleOutline } from "react-icons/io";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { BsFileBarGraphFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <GiExpense className='icon_header' /> Expense Tracker
        </div>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/Home"><IoMdHome className='icon' /> Home</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/AddTransactionPage">
            <IoIosAddCircleOutline className='icon' /> Add an Expense/Income
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/ViewCategories">
            <BsFileBarGraphFill className='icon' /> View Spending in Categories
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/ViewCategoryByGraph">
            <RiMoneyRupeeCircleLine className='icon' /> Graph View of categories
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/MonthlyExpenseSummary">
            <RiMoneyRupeeCircleLine className='icon' /> Monthly Expenses
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/DownloadExpenses">
            <RiMoneyRupeeCircleLine className='icon' /> Download/Share Expenses
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/CalculatorPage">
            <RiMoneyRupeeCircleLine className='icon' /> Calculator
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar