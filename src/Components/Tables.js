import React, { useRef } from "react";
import { salesData, salesDataColumns } from "../data";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const Tables = () => {
    const exportColumns = salesDataColumns.map((col) => ({ title: col, dataKey: col }));
    const dt = useRef(null);

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, salesData);
                doc.save('sales.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(salesData);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'sales');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    const header = (
        <div className="flex flex-col md:flex-row md:justify-start md:items-center gap-10">
            <Button label="CSV" rounded onClick={() => exportCSV(false)} className="bg-blue-500 text-white py-3 px-7" />
            <Button label="Excel" rounded onClick={exportExcel} className="bg-green-500 text-white py-3 px-7" />
            <Button label="PDF" rounded onClick={exportPdf} className="bg-red-500 text-white py-3 px-7" />
        </div>
    );

  return (
      <div className="bg-white rounded-lg p-5">
        <DataTable
          value={salesData}
          ref={dt}
          header={header}
          removableSort
          stripedRows
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          style={{ borderRadius: "13px" }}
        >
          {salesDataColumns.map((col, index) => (
            <Column sortable key={index} field={col} header={col} />
          ))}
        </DataTable>
    </div>
  );
};

export default Tables;
