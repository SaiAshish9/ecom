import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Button from "../../../general/button";

import { withRouter } from "react-router-dom";

const Domain = ({ classes, history }) => {
  return (
    <Grid lg={9} className={classes.grid}>
      <Paper className={classes.form}>
        <Grid style={{ display: "flex", alignItems: "center" }}>
          <Grid style={{ marginLeft: 15 }}>
            <Typography className={classes.logoTxt}>Domains</Typography>
          </Grid>
        </Grid>

        <Grid
          style={{ display: "flex", flexWrap: "wrap", marginBottom: "5vh" }}
        >
          <Paper
            onClick={() => history.push("/dashboard/store/domain/edit")}
            className={classes.paper}
          >
            <Grid className={classes.grid1}>
              <Typography style={{ fontSize: 20 }} className={classes.logoTxt}>
                Primary Domain
              </Typography>
              <Chip
                className={classes.chip}
                color="primary"
                label="Connected"
              />
            </Grid>
            <Grid className={classes.grid2}>
              <Grid className={classes.grid2}>
                <Typography className={classes.light}>DOMAIN NAME</Typography>
                <Typography className={classes.dark}>
                  salim-store.ecom.com
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.grid3}>
              <Grid>
                <Typography className={classes.light}>RENEWED ON</Typography>
                <Typography className={classes.dark}>
                  Januray 7, 2020
                </Typography>
              </Grid>
              <Grid>
                <Typography className={classes.light}>PROVIDER</Typography>
                <Typography className={classes.dark}>Ecom</Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            onClick={() => history.push("/dashboard/store/domain/edit")}
            className={classes.paper}
          >
            <Grid className={classes.grid1}>
              <Typography style={{ fontSize: 20 }} className={classes.logoTxt}>
                Primary Domain
              </Typography>
              <Chip color="primary" label="Connect" />
            </Grid>

            <Grid className={classes.grid2}>
              <Typography className={classes.light}>DOMAIN NAME</Typography>

              <Typography className={classes.dark}>
                salim-store.ecom.com
              </Typography>
            </Grid>

            <Grid className={classes.grid3}>
              <Grid>
                <Typography className={classes.light}>RENEWED ON</Typography>

                <Typography className={classes.dark}>Never Expires</Typography>
              </Grid>

              <Grid>
                <Typography className={classes.light}>PROVIDER</Typography>

                <Typography className={classes.dark}>Ecom</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Button>BUY NEW DOMAIN</Button>
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  dark: {
    color: theme.palette.primary.gray,
  },

  chip: {
    color: theme.palette.primary.green,
    background: theme.palette.primary.lightgreen,
  },

  grid3: {
    display: "flex",
    justifyContent: "space-between",
  },

  paper: {
    width: "45%",
    height: "28vh",
    border: "1px solid #eee",
    padding: 20,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 20,
    position: "relative",
    bottom: "5vh",
  },

  left: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    color: theme.palette.primary.lightgray,
    fontSize: 18,
  },
  grid1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  logoTxt: {
    color: theme.palette.primary.gray,
  },
  preferred: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  form: {
    minHeight: "75vh",
    width: "55vw",
    marginLeft: "2vw",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  plus: {
    height: 25,
    padding: 5,
    width: 25,
    borderRadius: "50%",
    fontSize: 10,
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.paper}`,
  },
  plus1: {
    position: "absolute",
    left: "35%",
    top: "25%",
    height: 100,
    padding: 25,
    width: 100,
    color: "white",
    borderRadius: "50%",
    fontSize: 30,
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.paper}`,
  },
  iconBtn: {},
});

export default withRouter(withStyles(styles)(Domain));
