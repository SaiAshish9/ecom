import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Button from "../../../general/button";
import MNavbar from "../../../general/mnavbar";

const Domain = ({ classes, history }) => {
  return (
    <Fragment>
      <MNavbar title="DOMAINS" skip link="/dashboard/store/settings"/>
      <Box style={{ padding: "1.5rem", marginBottom: "10vh" }}>
        <Paper
          onClick={() => history.push("/dashboard/store/domain/edit")}
          className={classes.paper}
        >
          <Grid className={classes.grid1}>
            <Typography style={{ fontSize: 20 }} className={classes.logoTxt}>
              Primary Domain
            </Typography>
            <Chip className={classes.chip} color="primary" label="Connected" />
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
              <Typography className={classes.dark}>Januray 7, 2020</Typography>
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

        <Button
          onClick={() => {
            history.push("/dashboard/store/domain/new");
          }}
          style={{
            width: "100%",
            height: "3rem",
            margin: "20px 0",
          }}
        >
          BUY NEW DOMAIN
        </Button>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  chip: {
    color: theme.palette.primary.green,
    background: theme.palette.primary.lightgreen,
  },
  grid3: {
    display: "flex",
    justifyContent: "space-between",
  },
  grid1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  paper: {
    width: "100%",
    height: "28vh",
    marginTop: "1.5rem",
    border: "1px solid #eee",
    padding: 20,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default withRouter(withStyles(styles)(Domain));
