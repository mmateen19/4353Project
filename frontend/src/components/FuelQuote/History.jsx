import React, { useState, useEffect } from 'react';
import CustNav from "../NavBar/CustNav";
import "./History.css"
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';


  const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    table: {
      width: "100%",
    },
  });


export default function History(){
    const classes = useRowStyles();
    const [history, setHistory] = useState([])

    const columns =[
        { label: "Gallons", key: "gallons", align: "right" },
        { label: "Date & Time", key: "date", align: "right" },
        { label: "Price Per Gallon ($)", key: "quote", align: "right" },
        { label: "Total ($)", key: "total", align: "right" },
  ];

  const date = (t) =>{
        let d = new Date(parseInt(t));
        return d.toLocaleDateString();
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
        } else{
            setHistory(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
      getHistory()
  }, []);

  return(
      <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="collapsible table">
              <TableHead>
                  <TableRow>
                      {columns.map((column)=>(
                          <TableCell key={column.key} align={column.align}>
                              {column.label}
                          </TableCell>
                      ))}
                  </TableRow>
              </TableHead>
               <TableBody>
                {history.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell align="right">
                            {row.gallons}
                        </TableCell>
                        <TableCell align="right">
                            {row.address}
                        </TableCell>
                        <TableCell align="right">
                            {date(row.date)}
                        </TableCell>
                        <TableCell align="right">
                            {row.price}
                        </TableCell>
                        <TableCell align="right">
                            {parseFloat(row.total).toFixed(2)}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
  )
  };


