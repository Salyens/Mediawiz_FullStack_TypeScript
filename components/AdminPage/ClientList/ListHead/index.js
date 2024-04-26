import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import React from "react";

const ListHead = ({ columns, handleRequestSort, orderBy, order }) => {
  return (
    <TableHead>
      <TableRow >
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{
              minWidth: column.minWidth,
              fontWeight: "bold",
            }}
          >
            {column.id !== "index" && (
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : "asc"}
                onClick={(event) => handleRequestSort(event, column.id)}
              >
                {column.label}
              </TableSortLabel>
            )}
            {column.id === "index" && column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ListHead;
