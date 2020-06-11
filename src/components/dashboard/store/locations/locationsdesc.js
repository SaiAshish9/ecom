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
import CitiesDialog from "./citiesDialog";
import LocationDialog from "./locationDialog";

const LocationsDesc = ({ classes, history }) => {
  const [citiesDialog, showCitiesDialog] = useState(false);

  const [locationDialog, showLocationDialog] = useState(false);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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
          <IconButton
            onClick={() => history.push("/dashboard/store/locations")}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <Typography className={classes.logoTxt}>Burger King</Typography>
        </Grid>

        <Typography className={classes.label}>STORE NAME</Typography>

        <Paper
          elevation={0}
          className={classes.disabled}
          style={{ width: "40%" }}
        >
          Burger King
        </Paper>

        <Typography className={classes.label}>STORE LOCATION</Typography>

        <Paper
          elevation={0}
          className={classes.disabled1}
          style={{ width: "40%" }}
        >
          36 Balistreri Lakes
          <Button
            onClick={() => showLocationDialog(true)}
            className={classes.btn}
          >
            Edit Location
          </Button>
        </Paper>

        <Typography className={classes.label}>WORKING HOURS</Typography>

        <Grid style={{ display: "flex", flexWrap: "wrap" }}>
          {days.map((i, k) => (
            <Paper elevation={0} key={k} className={classes.card}>
              <Grid className={classes.up}>{i}</Grid>
              <Grid className={classes.down}>01:00 - 02:00 PM</Grid>
            </Paper>
          ))}
        </Grid>

        <Grid
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography className={classes.label}>
            Choose city to deliver
            <IconButton className={classes.info}>
              {/* i     */}
              <InfoOutlinedIcon />
            </IconButton>
          </Typography>

          <IconButton
            onClick={() => showCitiesDialog(true)}
            className={classes.plusbtn}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Grid>

        <Paper style={{ width: "40%" }}>
          {[...Array(3).keys()].map((i, k) => (
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                style={{ margin: "10px" }}
                component="div"
                className={classes.label}
              >
                Sharq
              </Typography>

              <Typography component="div" className={classes.pending}>
                Add Price
              </Typography>
            </Grid>
          ))}
        </Paper>

        <Btn>Save Changes</Btn>

        <LocationDialog
          open={locationDialog}
          close={() => showLocationDialog(false)}
        />

        <CitiesDialog
          open={citiesDialog}
          close={() => showCitiesDialog(false)}
        />
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  plusbtn: {
    "&:hover": {
      background: "#fff",
    },
  },

  info: {
    // background:theme.palette.primary.dashboardBackground,
    color: theme.palette.primary.gray,
    // padding:5,
    fontSize: 17,
    margin: "0 10px",
  },

  card: {
    height: "10vh",
    border: `1px solid ${theme.palette.primary.lightgray}`,
    width: "23%",
    margin: "7px",
  },
  up: {
    height: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#999",
    background: theme.palette.primary.dashboardBackground,
  },
  down: {
    height: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.gray,
  },

  paper: {
    width: "40%",
    height: "10vh",
    border: "1px solid #eee",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    // justifyContent:'center',
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
  disabled: {
    height: "7vh",
    // width:''
    background: "#f8f9fb",
    display: "flex",
    alignItems: "center",
    padding: 10,
    color: "#999",
  },

  disabled1: {
    height: "7vh",
    // width:''
    background: "#fff",
    display: "flex",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    border: `1px solid ${theme.palette.primary.lightgray}`,
    color: theme.palette.primary.gray,
  },
  btn: {
    fontSize: 12,
    background: theme.palette.primary.lightgray,
    textTransform: "none",
  },
  pending: {
    color: theme.palette.primary.orange,
    background: theme.palette.primary.lightOrange,
    width: "30%",
    justifyContent: "center",
    fontSize: 11,
    height: "2rem",
    padding: 5,
    margin: "10px",
    display: "flex",
    // alignSelf:'end',
    textAlign: "end",
  },
  label: {
    fontSize: 13,
    color: theme.palette.primary.gray,
    margin: "10px 0",
  },
});

export default withRouter(withStyles(styles)(LocationsDesc));
