import React from "react";

import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

import Switch from "@material-ui/core/Switch";

import { withRouter } from "react-router-dom";

import Btn from "../../general/button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const Details = ({ classes, history }) => {
  return (
    <Grid
      lg={9}
      className={classes.form}
      style={{ position: "relative", left: "2vw" }}
    >
      <Paper className={classes.form}>
        <Grid className={classes.inputsCont}>
          <label className={classes.label}>ABOUT US</label>

          <textarea className={classes.input} rows={7} />

          <label className={classes.label}>STORE POLICIES</label>

          <textarea className={classes.input} rows={7} />

          <label className={classes.label}>AVG PREPARATION OF ORDER</label>

          <ButtonGroup variant="contained" style={{ width: "11rem" }}>
            <Button className={classes.btnGrp}>Days</Button>
            <Button className={classes.btnGrp}>Hours</Button>
            <Button className={classes.btnGrp}>Mins</Button>
          </ButtonGroup>

          <Btn>Save Changes</Btn>
        </Grid>

        <Grid
          className={classes.inputsCont}
          style={{ justifyContent: "space-between" }}
        >
          <label className={classes.label}>INSTAGRAM</label>

          <input type="text" className={classes.txtInput} />

          <label className={classes.label}>TWITTER</label>

          <input type="tel" className={classes.txtInput} />

          <label className={classes.label}>WHATSAPP</label>

          <input
            type="tel"
            placeholder="+91 123456789"
            className={classes.txtInput}
          />

          <label className={classes.label}>SNAPCHAT</label>

          <input
            type="text"
            placeholder="+91 123456789"
            className={classes.txtInput}
            rows={7}
          />

          <Grid
            style={{
              margin: "2px 0",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label
              className={classes.label}
              style={{ fontSize: 12, color: "#9c9ea3" }}
            >
              Pickup Order[Optional]
            </label>
            <Switch checked={true} color="primary" />
          </Grid>

          <Grid
            style={{
              margin: "2px 0",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label
              className={classes.label}
              style={{ fontSize: 12, color: "#9c9ea3" }}
            >
              Minimum Order Amount[Optional]
            </label>
            <Switch checked={false} color="primary" />
          </Grid>

          <input
            type="text"
            placeholder="Enter Amount"
            className={classes.txtInput}
            rows={7}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  btnGrp: {
    background: "#fff",
    textTransform: "none",
    border: `0.08rem solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.gray,
    "&:hover": {
      background: "white",
    },
  },
  input: {
    border: `1px solid ${theme.palette.primary.main} `,
    borderRadius: 7,
    color: theme.palette.primary.gray,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main} `,
    },
  },
  txtInput: {
    border: `1px solid ${theme.palette.primary.main} `,
    height: "2.5rem",
    color: theme.palette.primary.gray,
    padding: 10,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main} `,
    },
    "&::placeholder": {
      color: theme.palette.primary.lightgray,
      fontWeight: "bold",
    },
  },
  inputsCont: {
    display: "flex",
    height: "77vh",
    width: "50%",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "3rem",
  },
  label: {
    color: theme.palette.primary.lightgray,
  },
  main: {
    display: "flex",
    // justifyContent:'space-between'
  },

  typo: {
    color: theme.palette.primary.gray,
    fontSize: "1.2rem",
  },
  container: {
    padding: "3rem",
  },
  grid: {
    height: "77vh",
    // width:'100vw',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  settingsCard: {
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
    color: theme.palette.primary.gray,
    cursor: "pointer",
  },
  activeCard: {
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
    color: theme.palette.primary.gray,
    border: `0.1rem solid ${theme.palette.primary.main}`,
    cursor: "pointer",
  },
  pending: {
    color: theme.palette.primary.orange,
    background: theme.palette.primary.lightOrange,
    fontSize: 11,
    padding: 5,
    display: "flex",
    // alignSelf:'end',
    textAlign: "end",
  },
  form: {
    height: "75vh",
    width: "55vw",
    // marginLeft:'2vw',
    display: "flex",
  },
});

export default withRouter(withStyles(styles)(Details));
