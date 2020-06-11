import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "../../../general/button";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";

const Shipping = ({ classes, history }) => {
  return (
    <Fragment>
      <Box
        display="flex"
        className={classes.nav}
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton
          onClick={() => {
            history.push("/dashboard/store/settings");
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography className={classes.dark}>SHIPPING</Typography>
        <IconButton color="primary" style={{ fontSize: 16 }}>
          Skip
        </IconButton>
      </Box>

      <Box style={{ padding: "1.5rem", marginBottom: "10vh" }}>
        <Typography className={classes.label}>AVG PREPARING ORDER</Typography>

        <Paper elevation={0} className={classes.disabled}>
          7 days
        </Paper>
        <Paper elevation={0} className={classes.first}>
          <label
            className={classes.label}
            style={{ fontSize: 13, maxWidth: "50%" }}
          >
            Enable Order Tracking For Customers
          </label>

          <Switch checked={true} color="primary" />
        </Paper>

        <Paper
          elevation={0}
          className={classes.first}
          style={{ flexDirection: "column" }}
        >
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <label
              className={classes.label}
              style={{ fontSize: 13, maxWidth: "50%" }}
            >
              Enable Own Delivery
            </label>

            <Switch checked={true} color="primary" />
          </Grid>

          <label
            className={classes.labellt}
            style={{ fontSize: 15, maxWidth: "50%" }}
          >
            COST OF DELIVERY
          </label>

          <input type="text" placeholder="KD1" className={classes.txtInput} />

          <label className={classes.labellt} style={{ fontSize: 12 }}>
            Cash on delivery only available for your own delivery
          </label>

          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "10px 0",
            }}
          >
            <label className={classes.label} style={{ fontSize: 13 }}>
              Enable Own Delivery
            </label>

            <Switch checked={!true} color="primary" />
          </Grid>
        </Paper>

        <Paper
          elevation={0}
          className={classes.first}
          style={{
            flexDirection: "column",
            marginTop: "2vh",
            opacity: 0.3,
            background: "#f4f4f4",
          }}
        >
          <label className={classes.labellt} style={{ fontSize: 15 }}>
            Local Shipping Companies
          </label>
          <Divider style={{ margin: 10 }} />
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              minWidth: "20vw",
            }}
          >
            <label
              className={classes.label}
              style={{ fontSize: 20, maxWidth: "50%" }}
            >
              Aramex
            </label>
            <Switch checked={true} disabled color="primary" />
          </Grid>
          <Divider style={{ margin: 10 }} />
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "10px 0",
            }}
          >
            <label className={classes.label} style={{ fontSize: 20 }}>
              bees
            </label>
            <Switch disabled checked={!true} color="primary" />
          </Grid>
        </Paper>

        <Paper
          elevation={0}
          className={classes.first}
          style={{ flexDirection: "column", marginTop: "2vh" }}
        >
          <label className={classes.labellt} style={{ fontSize: 15 }}>
            International Shipping Companies
          </label>
          <Divider style={{ margin: 7 }} />
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              minWidth: "20vw",
            }}
          >
            <label
              className={classes.label}
              style={{ fontSize: 20, maxWidth: "50%" }}
            >
              Aramex
            </label>
            <Switch checked={true} color="primary" />
          </Grid>
          <Divider style={{ margin: 7 }} />
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "10px 0",
            }}
          >
            <label className={classes.label} style={{ fontSize: 20 }}>
              bees
            </label>
            <Switch checked={!true} color="primary" />
          </Grid>
        </Paper>

        <Button
          onClick={() => {
            history.push("/dashboard/store/shipping/edit");
          }}
          style={{
            width: "100%",
            height: "2.8rem",
          }}
        >
          PROCEED TO NEXT STEP
        </Button>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  first: {
    border: `1px solid ${theme.palette.primary.lightgray} `,
    minHeight: "10vh",
    display: "flex",
    flexWrap: "wrap",
    padding: 10,
    margin: "10px 0",
    justifyContent: "space-between",
  },
  txtInput: {
    border: `2px solid ${theme.palette.primary.main} `,
    height: "2.5rem",
    margin: "20px 0",
    color: theme.palette.primary.gray,
    padding: 10,
    "&:focus": {
      border: `2px solid ${theme.palette.primary.main} `,
    },
    "&::placeholder": {
      color: theme.palette.primary.gray,
      fontWeight: "bold",
    },
  },
  label: {
    fontSize: 13,
    color: theme.palette.primary.gray,
  },
  disabled: {
    height: "7vh",
    margin: "10px 0",
    background: "#f8f9fb",
    display: "flex",
    alignItems: "center",
    padding: 10,
    color: "#999",
  },
  nav: {
    height: "10vh",
    padding: 20,
    borderBottom: `1px solid ${theme.palette.primary.lightgray} `,
  },
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  dark: {
    color: theme.palette.primary.gray,
  },
});

export default withRouter(withStyles(styles)(Shipping));
