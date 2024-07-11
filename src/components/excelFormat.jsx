import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const generateExcel = (expenses) => {
    if (!Array.isArray(expenses) || expenses.length === 0) return;

    const ws = XLSX.utils.json_to_sheet(expenses);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Expenses');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    saveAs(blob, 'expenses.xlsx');
};
