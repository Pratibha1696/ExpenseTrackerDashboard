import React from 'react';
import { useSelector } from 'react-redux';
import { generatePDF } from '../components/PdfFormat';
import { generateExcel } from '../components/excelFormat';
import ShareButton from '../components/ShareButton';
import '../components/DownloadExpenses.css';  
import { FaFilePdf } from "react-icons/fa6";
import { FaFileExcel } from "react-icons/fa";

const DownloadExpenses = () => {
  const expenses = useSelector((state) => state.transactions || []);

  const handleDownloadPDF = () => {
    if (expenses.length > 0) {
      generatePDF(expenses);
    } else {
      alert('No expenses to download.');
    }
  };

  const handleDownloadExcel = () => {
    if (expenses.length > 0) {
      generateExcel(expenses);
    } else {
      alert('No expenses to download.');
    }
  };

  return (
    <div className="container">
      <div className="card" onClick={handleDownloadPDF}>
        <h1><FaFilePdf className='icon' />Download as PDF</h1>
      </div>
      <div className="card" onClick={handleDownloadExcel}>
        <h1><FaFileExcel className='icon' />Download as Excel</h1>
      </div>
      {expenses.length > 0 && (
        <>
          <div className="card">
            <ShareButton platform="facebook" transactions={expenses} />
          </div>
          <div className="card">
            <ShareButton platform="whatsapp" transactions={expenses} />
          </div>
        </>
      )}
    </div>
  );
};

export default DownloadExpenses;
