import getComparator from "@/utils/getComparator";
import stableSort from "@/utils/stableSort";

import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";

const ListBody = ({
  filteredData,
  order,
  orderBy,
  page,
  rowsPerPage,
  columns,
}) => {
  return (
    <TableBody >
      {stableSort(filteredData, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          return (
            <TableRow  hover role="checkbox" tabIndex={-1} key={row._id}>
              <TableCell>{page * rowsPerPage + index + 1}</TableCell>
              {columns.slice(1).map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default ListBody;
