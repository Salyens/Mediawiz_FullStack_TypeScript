"use client";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { CircularProgress, Typography } from "@mui/material";
import formatTime from "@/utils/formatTime";
import ListHead from "./ListHead";
import ListBody from "./ListBody";
import axios from "axios";

const columns = [
  { id: "index", label: "#", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "phoneNumber", label: "Phone Number", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "sendTime", label: "Submission Time", minWidth: 170 },
];

const ClientList = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(data.length === 0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/feedback");

        setData(
          data.map((item) => ({
            ...item,
            sendTime: formatTime(item.sendTime),
          }))
        );
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = data.filter((row) => {
    return columns.some((column) => {
      if (column.id !== "index") {
        const value = row[column.id].toString().toLowerCase();
        return value.includes(searchText.toLowerCase());
      }
      return false;
    });
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Мои клиенты
      </Typography>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 400,
          }}
        >
          <CircularProgress size={80} />
        </Box>
      ) : (
        <Paper>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchText}
              onChange={handleSearchChange}
            />
          </Box>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <ListHead
                columns={columns}
                handleRequestSort={handleRequestSort}
                orderBy={orderBy}
                order={order}
              />

              <ListBody
                filteredData={filteredData}
                order={order}
                orderBy={orderBy}
                page={page}
                rowsPerPage={rowsPerPage}
                columns={columns}
              />
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Box>
  );
};
export default ClientList;
