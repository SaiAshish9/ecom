import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Btn from "../../../general/button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const LocationsDesc = ({ classes, history }) => {
  return (
    <Grid lg={9} className={classes.grid}>
      <Paper className={classes.form}>
        <Grid
          style={{
            margin: "7vh -10px",
            marginTop: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => history.push("/dashboard/settings")}>
            <ArrowBackIosIcon />
          </IconButton>

          <Typography style={{ color: "#000" }} className={classes.logoTxt}>
            Change Password
          </Typography>
        </Grid>

        <label className={classes.label}>OLD PASSWORD</label>

        <input type="password" className={classes.txtInput} />

        <label className={classes.label}>NEW PASSWORD</label>

        <input type="password" className={classes.txtInput} />

        <label className={classes.label}>RE-TYPE PASSWORD</label>

        <input type="password" className={classes.txtInput} />

        <Btn>Save Changes</Btn>
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  paper: {
    width: "40%",
    height: "10vh",
    border: "1px solid #eee",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    marginRight: 20,
    color: theme.palette.primary.gray,
  },

  logoTxt: {
    color: theme.palette.primary.gray,
  },

  form: {
    minHeight: "75vh",
    width: "55vw",
    marginLeft: "2vw",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    // justifyContent:'space-between'
  },
  txtInput: {
    border: `1px solid ${theme.palette.primary.main} `,
    height: "2.5rem",
    color: theme.palette.primary.gray,
    marginBottom: 15,
    width: "40%",
    padding: 10,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main} `,
    },
    "&::placeholder": {
      color: theme.palette.primary.gray,
      fontWeight: "bold",
    },
  },

  label: {
    fontSize: 13,
    color: theme.palette.primary.lightgray,
    margin: "10px 0",
  },
});

export default withRouter(withStyles(styles)(LocationsDesc));
