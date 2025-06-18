import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useState } from "react";

export default function Table({ hrdata }) {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
      header: () => <span>First Name</span>,
      sortingFn: "basic",
      sortUndefined: "last",
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => info.getValue(),
      header: () => <span>Last Name</span>,
      sortingFn: "basic",
      sortUndefined: "last",
    }),
    columnHelper.accessor("startDate", {
      cell: (info) => info.getValue(),
      header: () => <span>Start Date</span>,
      sortingFn: "basic",
      sortUndefined: "last",
    }),
    columnHelper.accessor("department", {
      cell: (info) => info.getValue(),
      header: () => <span>Department</span>,
      sortingFn: "basic",
      sortUndefined: "last",
    }),
    columnHelper.accessor("dateofbirth", {
      cell: (info) => info.getValue(),
      header: () => <span>Date of Birth</span>,
      sortingFn: "basic",
      sortUndefined: "last",
    }),
    columnHelper.accessor("street", {
      cell: (info) => info.getValue(),
      header: () => <span>Street</span>,
      sortingFn: "basic",
      sortUndefined: "last",
    }),
    columnHelper.accessor("city", {
      cell: (info) => info.getValue(),
      header: () => <span>City</span>,
      sortingFn: "basic",
      sortUndefined: "last",
    }),
    columnHelper.accessor("state", {
      cell: (info) => info.getValue(),
      header: () => <span>State</span>,
      sortingFn: "basic",
      sortUndefined: "last",
    }),
    columnHelper.accessor("zipcode", {
      cell: (info) => info.getValue(),
      header: () => <span>Zipcode</span>,
      sortingFn: "basic",
      sortUndefined: "last",
    }),
  ];

  const [data, _setData] = useState(() => [...hrdata]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), //provide a sorting row model
    getPaginationRowModel: getPaginationRowModel(), //load client-side pagination code
    getFilteredRowModel: getFilteredRowModel(), // needed for client-side global filtering
    globalFilterFn: "includesString",
  });

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <div className="flex justify-start items-center gap-2">
          <span>Show </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="select w-20"
          >
            {[5, 10, 25, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => table.setGlobalFilter(String(e.target.value))}
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>

      <table className="table table-zebra">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="hover:bg-base-300">
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : ""
                        }
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === "asc"
                              ? "Sort ascending"
                              : header.column.getNextSortingOrder() === "desc"
                              ? "Sort descending"
                              : "Clear sort"
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
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
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
          className="btn"
        >
          {"<<"}
        </button>

        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="btn"
        >
          {"<"}
        </button>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="btn"
        >
          {">"}
        </button>

        <button
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
          className="btn"
        >
          {">>"}
        </button>
      </div>
      {/* <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button> */}
    </div>
  );
}
