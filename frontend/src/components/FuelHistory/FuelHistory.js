import React from 'react'
import { useHistory } from "react-router-dom";
import FuelHistoryTable from "./FuelHistoryTable";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    root: {
      background: "linear-gradient(45deg, #1493ce, #ff0057)",
      height: "100vh"
    },
    title: {
      flexGrow: 1,
      fontFamily: "Oleo Script",
      color: "#FA9232",
      textShadow: "10px 10px 10px #000000",
      textAlign: "center",
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
    },
    table: {
      display: "flex",
      marginBottom: theme.spacing(30)
    },
      navbar: {
      background: "transparent",
      color: "transparent",
      boxShadow: "none",
      top: "10px",
    },
      logIn: {
      flexGrow: 1,
      color: "#000000",
      background: "#FFB800",
      fontFamily: "Oleo Script",
      "&:hover, &.Mui-focusVisible": {
        transition: "0.3s",
        color: "#FFB800",
        backgroundColor: "#000000",
      },
      borderRadius: 10,
      width: 100,
      margin: theme.spacing(1),
      float: "right"
    },
      section: {
      position: "relative",
      width: "100%",
      height: "100%",
      background: "linear-gradient(45deg, #1493ce, #ff0057)",
      display: "flex",
      justifyContent: "center",
    },
  }));

  function FuelHistory() {
    const classes = useStyles();
    const history = useHistory();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.section}>
          <AppBar className={classes.navbar} position="absolute">
          <Toolbar>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button 
                className={classes.logIn}
                onClick={() => {
                  localStorage.clear();
                  history.push("/");
                }}
              >Logout</Button>
            </Link>
          </Toolbar>
        </AppBar>
          <Grid item xs={12}>
              <Typography className={classes.title} variant="h2">Your Fuel History</Typography>
          </Grid>
          <Grid item xs={12} className={classes.table}>
            <FuelHistoryTable />
          </Grid>
      </Grid>

    </div>
  )
}

export default FuelHistory