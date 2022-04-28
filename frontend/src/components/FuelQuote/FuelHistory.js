import React from 'react'
import History from "./History";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";

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