import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useState, useReducer } from "react";

export default function Table({ hrdata }) {
  console.log(hrdata);
  const defaultData = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: 40,
      visits: 40,
      status: "Single",
      progress: 80,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
  ];

  const columnHelper = createColumnHelper();

  const hrDataTest = [
    {
      firstName: "tanner",
      lastName: "linsley",
    },
    {
      city: "SAINT-JEAN-DE-LUZ (64)",
      "date-of-birth": "2025-05-29",
      department: "Marketing",
      "first-name": "Marina",
      "last-name": "NOYER",
      "start-date": "2025-06-05",
      state: "IA",
      street: "14 allée gorena",
      "zip-code": "64500",
    },
    {
      city: "",
      "first-name": "romain",
      "last-name": "noyer",
      street: "",
      "zip-code": "",
    },
  ];

  const hrDataTest2 = [
    {
      city: "SAINT-JEAN-DE-LUZ (64)",
      dateofbirth: "2025-05-29",
      department: "Marketing",
      firstname: "Marina",
      lastname: "NOYER",
      startdate: "2025-06-05",
      state: "IA",
      street: "14 allée gorena",
      zipcode: "64500",
    },
  ];

  const hrColumns = [
    columnHelper.accessor("city", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("firstname", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("lastname", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("startdate", {
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("department", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("dateofbirthh", {
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("street", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),

    columnHelper.accessor("state", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("zipcode", {
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
  ];

  const columns = [
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("age", {
      header: () => "Age",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("visits", {
      header: () => <span>Visits</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("progress", {
      header: "Profile Progress",
      footer: (info) => info.column.id,
    }),
  ];

  const [data, _setData] = useState(() => [...hrDataTest2]);
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    hrColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getHeaderGroups());
  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
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
