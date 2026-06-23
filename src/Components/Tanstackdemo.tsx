import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import React from "react";

const Tanstackdemo = () => {
  const data = [
    { id: 4, customer: "Sakthi" },
    { id: 2, customer: "John" },
  ];

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "customer",
      header: "Customer",
    },
  ];

  // useReactTable(...)
  // render table...
  const TanstackTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <div>Hello TanStack 🚀</div>;
      <table border={1} className="text-white">
        <thead>
          <tr>
            {TanstackTable.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.column.columnDef.header as string}
                </th>
              ))
            )}
          </tr>
        </thead>

        <tbody>
          {TanstackTable.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{cell.getValue() as React.ReactNode}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tanstackdemo;
