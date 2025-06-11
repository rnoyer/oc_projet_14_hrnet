import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useState, useReducer } from "react";

export default function Table({ hrdata }) {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
      header: () => <span>First Name</span>,
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => info.getValue(),
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor("startDate", {
      cell: (info) => info.getValue(),
      header: () => <span>Start Date</span>,
    }),
    columnHelper.accessor("department", {
      cell: (info) => info.getValue(),
      header: () => <span>Department</span>,
    }),
    columnHelper.accessor("dateofbirth", {
      cell: (info) => info.getValue(),
      header: () => <span>Date of Birth</span>,
    }),
    columnHelper.accessor("street", {
      cell: (info) => info.getValue(),
      header: () => <span>Street</span>,
    }),
    columnHelper.accessor("city", {
      cell: (info) => info.getValue(),
      header: () => <span>City</span>,
    }),
    columnHelper.accessor("state", {
      cell: (info) => info.getValue(),
      header: () => <span>State</span>,
    }),
    columnHelper.accessor("zipcode", {
      cell: (info) => info.getValue(),
      header: () => <span>Zipcode</span>,
    }),
  ];

  const [data, _setData] = useState(() => [...hrdata]);
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table className="table table-zebra">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="hover:bg-base-300">
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  );
}
