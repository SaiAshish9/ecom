import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/general/button";

import Logo from "../../assets/bag.png";

const Verification = ({ classes, history }) => {

  return (
    <Grid className={classes.grid}>
      <IconButton
        onClick={() => {
          history.push("/");
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <Grid>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            style={{
              width: "30vw",
            }}
          />

          <Typography className={classes.dark}>e-com</Typography>
        </Grid>

        <Typography component="h5" variant="h5">
          Verification
        </Typography>

        <Typography style={{ fontSize: 14, marginTop: "10vh" }}>
          We sent you a code to verify your number
        </Typography>

        <Typography style={{ fontSize: 14, margin: "10px 0" }}>
          Code sent to
          <span
            style={{ fontSize: 16, paddingLeft: 10 }}
            className={classes.primary}
          >
            +91 0987654321
          </span>
        </Typography>
      </Grid>

      <Grid
        style={{
          display: "flex",
          margin: "7vh 10px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {[...Array(4).keys()].map((i, k) => (
          <TextField
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: "center",
              },
            }}
            style={{
              margin: 5,
            }}
            key={k}
          />
        ))}
      </Grid>

      <Typography
        className={classes.label}
        style={{ fontSize: 14, margin: "5px 0 10px", marginBottom: "20px" }}
      >
        Didn't receive the code yet?
        <span
          style={{ cursor: "pointer", fontSize: 16, paddingLeft: 10 }}
          className={classes.primary}
        >
          RESEND OTP
        </span>
      </Typography>

      <Button
        onClick={() => {
          history.push("/dashboard");
        }}
        style={{
          width: "80vw",
          height: "3rem",
        }}
      >
        CONTINUE
      </Button>
    </Grid>
  );
};

const styles = (theme) => ({
  primary: {
    color: theme.palette.primary.main,
  },

  label: {
    color: theme.palette.primary.lightgray,
  },
  dark: {
    color: theme.palette.primary.gray,
  },
  grid: {
    width: "100vw",
    // height:'85vh',
    padding: "8vw",
    alignItems: "flex-start",
    display: "flex",
    // justifyContent:'space-between',
    flexDirection: "column",
  },
});

export default withRouter(withStyles(styles)(Verification));
