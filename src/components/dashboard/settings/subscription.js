import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "../../general/button";
import { withRouter } from "react-router-dom";
import Switch from "@material-ui/core/Switch";

const Domain = ({ classes, history }) => {
  const [left, setLeft] = useState(true);

  return (
    <Grid lg={9} className={classes.grid}>
      <Paper className={classes.form}>
        <Grid style={{ display: "flex", alignItems: "center" }}>
          <Grid
            style={{ marginLeft: 15, display: "flex", alignItems: "center" }}
          >
            <Typography
              className={left ? classes.dark : classes.light}
              style={{ margin: 0 }}
            >
              Pay monthly
            </Typography>

            <Switch
              checked={!left}
              onClick={() => setLeft(!left)}
              color="primary"
            />

            <Typography
              className={!left ? classes.dark : classes.light}
              style={{ margin: 0 }}
            >
              Pay Annually
            </Typography>
          </Grid>
        </Grid>

        <Grid
          style={{ display: "flex", flexWrap: "wrap", marginBottom: "5vh" }}
        >
          <Paper className={classes.paper}>
            <Grid className={classes.grid1}>
              <Typography className={classes.light}>1 user</Typography>
              <Typography className={classes.light}>1 store</Typography>
              <Typography className={classes.dark}>9 KD/Month</Typography>
              <Typography className={classes.light} style={{ fontSize: 12 }}>
                All prices are excl. VAT.
              </Typography>
              <Button
                style={{
                  borderRadius: "0px",
                  width: "90%",
                  height: "2.5rem",
                  position: "relative",
                  top: "6vh",
                }}
              >
                Select
              </Button>
            </Grid>
          </Paper>

          <Paper className={classes.paper}>
            <Grid className={classes.grid1}>
              <Typography className={classes.light}>5 users</Typography>
              <Typography className={classes.light}>5 stores</Typography>
              <Typography className={classes.dark}>19 KD/Month</Typography>
              <Typography className={classes.light} style={{ fontSize: 12 }}>
                All prices are excl. VAT.
              </Typography>
              <Button
                style={{
                  borderRadius: "0px",
                  width: "90%",
                  height: "2.5rem",
                  position: "relative",
                  top: "6vh",
                }}
              >
                Select
              </Button>
            </Grid>
          </Paper>

          <Paper className={classes.paper}>
            <Grid className={classes.grid1}>
              <Typography className={classes.light}>15 users</Typography>
              <Typography className={classes.light}>15 stores</Typography>
              <Typography className={classes.dark}>19 KD/Month</Typography>
              <Typography className={classes.light} style={{ fontSize: 12 }}>
                All prices are excl. VAT.
              </Typography>
              <Button
                style={{
                  borderRadius: "0px",
                  width: "90%",
                  height: "2.5rem",
                  position: "relative",
                  top: "6vh",
                }}
              >
                Select
              </Button>
            </Grid>
          </Paper>
        </Grid>

        <Button>Save Changes</Button>
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 17,
    marginTop: 10,
  },
  dark: {
    color: "#000",
    fontSize: 17,
    marginTop: 5,
  },

  paper: {
    width: "24%",
    height: "30vh",
    border: "1px solid #eee",
    padding: 20,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 20,
    position: "relative",
    bottom: "5vh",
  },
  grid1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
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
});

export default withRouter(withStyles(styles)(Domain));
