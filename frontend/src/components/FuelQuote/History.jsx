import React, { useState, useEffect } from 'react';
import CustNav from "../NavBar/CustNav";
import "./History.css"
import axios from "axios";
//import { makeStyles } from '@material-ui/core/styles';
// import TableContainer from '@material-ui/core/TableContainer';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
// import TableBody from '@material-ui/core/TableBody';

import { DataGrid } from '@mui/x-data-grid';


  // const useRowStyles = makeStyles({
  //   root: {
  //     '& > *': {
  //       borderBottom: 'unset',
  //     },
  //   },
  //   table: {
  //     width: "100%",
  //   },
  // });


const History = ({userLogin, setUserLogin}) => {
    //const classes = useRowStyles();
    const [history, setHistory] = useState({});

    const columns =[
        { field: 'gallons', headerName: "Gallons", type: 'number',  width: 70  },
        { field: "date", headerName: "Date & Time", width: 130  },
        { field: "price", headerName: "Price Per Gallon ($)", type: 'number', width: 130  },
        { field: "quote", headerName: "Total ($)", type: 'number', width: 130  },
  ];

  const date = (t) =>{
        let d = new Date(parseInt(t));
        return d.toLocaleDateString();
   };

  
    //console.log(userLogin)
      const options ={
        method: "POST",
        url: "/api/user/fuelhistory",
        data:{id: userLogin.id}
      };

      axios.request(options).then((response)=>{

        if (response.data.history)
        {
          //console.log(response.data.result)
          //Datarows = response.data.result;
          setHistory(response.data.result);

        }
      }, (error)=>{   
        console.log(error);
      }
      )
  
  //console.log(history)
  const Datarows = history;

  const renderHistory = () => {
    return (
      <div style={{ height: 400, width: '50%' }}>
      <DataGrid
        throttleRowsMs={10000}
        rows={Datarows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.date} 
      />
    </div>)
    }

  return (
      <div className = "App">
        <div className="navbar">
          <CustNav />
        </div>
      <div style={{ height: 400, width: '100%' }}>
          <div className="display-container">
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        throttleRowsMs={10000}
        rows={Datarows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.date} 
      />
    </div>
          </div>
        </div>
      </div>
      
  )
};

      // <TableContainer component={Paper} className={classes.table}>
      //     <Table aria-label="collapsible table">
      //         <TableHead>
      //             <TableRow>
      //                 {columns.map((column)=>(
      //                     <TableCell key={column.key} align={column.align}>
      //                         {column.label}
      //                     </TableCell>
      //                 ))}
      //             </TableRow>
      //         </TableHead>
      //          <TableBody>
      //           {history.map((row, index) => (
      //               <TableRow key={index}>
      //                   <TableCell align="right">
      //                       {row.gallons}
      //                   </TableCell>
      //                   <TableCell align="right">
      //                       {row.address}
      //                   </TableCell>
      //                   <TableCell align="right">
      //                       {date(row.date)}
      //                   </TableCell>
      //                   <TableCell align="right">
      //                       {row.price}
      //                   </TableCell>
      //                   <TableCell align="right">
      //                       {parseFloat(row.total).toFixed(2)}
      //                   </TableCell>
      //               </TableRow>
      //           ))}
      //           </TableBody>
      //       </Table>
      //   </TableContainer>
  
export default History;

