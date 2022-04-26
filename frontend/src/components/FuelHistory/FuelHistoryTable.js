import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const rowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  table: {
    width: "100%",
  },
});

export default function FuelHistory({ userLogin, setUserLogin }) {
  const classes = rowStyles();
  const [history, setHistory] = useState([]);

  const columns = [
    { label: "Gallons", key: "gallons", align: "right" },
    { label: "State", key: "location", align: "right" },
    { label: "Date & Time", key: "date", align: "right" },
    { label: "Price Per Gallon ($)", key: "quote", align: "right" },
    { label: "Total ($)", key: "total", align: "right" },
  ];

  const formatData = (t) => {
    let d = new DataTransfer(parseInt(t));
    return d.toLocaleString();
  };

  const getHistory = () => {
    axios
      .post(process.env.REACT_APP_SERVER_URL + "fuel-history", {
        userid: localStorage.getItem("userid"),
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.error) {
          console.log(res.data.error);
        } else {
          setHistory(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
