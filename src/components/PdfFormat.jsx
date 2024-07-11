// pdfUtils.js

import jsPDF from 'jspdf';

export const generatePDF = (expenses) => {
  const doc = new jsPDF();

  doc.text('Expense Report', 20, 20);

  let yOffset = 30;

  expenses.forEach((expense, index) => {
    doc.text(`Expense ${index + 1}`, 20, yOffset);
    doc.text(`Description: ${expense.text}`, 20, yOffset + 10);
    doc.text(`Amount: Rs. ${expense.amount}`, 20, yOffset + 20);
    doc.text(`Date: ${expense.date}`, 20, yOffset + 30);
    yOffset += 40;
  });

  doc.save('expenses.pdf');
};
