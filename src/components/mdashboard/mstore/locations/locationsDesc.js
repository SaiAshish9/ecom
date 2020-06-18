import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Btn from "../../../general/button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CitiesDialog from "../../../dashboard/store/locations/citiesDialog";
import MNavbar from "../../../general/mnavbar";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const LocationsDesc = ({ classes, history }) => {
  const [citiesDialog, showCitiesDialog] = useState(false);

  return (
    <Fragment>
      <MNavbar title="STORE 1" link="/dashboard/store/locations" />
      <Box style={{ marginBottom: "10vh", padding: "1.5rem" }}>
        <Typography className={classes.label}>STORE NAME</Typography>

        <Paper
          elevation={0}
          className={classes.disabled}
          style={{ width: "100%", margin: "10px 0" }}
        >
          Burger King
        </Paper>

        <Typography className={classes.label}>STORE LOCATION</Typography>

        <Paper
          elevation={0}
          className={classes.disabled1}
          style={{ width: "100%", margin: "10px 0" }}
        >
          36 Balistreri Lakes
          <Button
            onClick={() => {
              history.push("/dashboard/store/locations/edit/location");
            }}
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
            width: "100%",
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

        <Paper style={{ width: "100%" }}>
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

        <Btn style={{ width: "100%", margin: "20px 0", height: "3rem" }}>
          Save Changes
        </Btn>
      </Box>
      <CitiesDialog
        mobileView={true}
        open={citiesDialog}
        close={() => showCitiesDialog(false)}
      />
    </Fragment>
  );
};

const styles = (theme) => ({
  btn: {
    fontSize: 12,
    background: theme.palette.primary.lightgray,
    textTransform: "none",
  },
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  label: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  dark: {
    color: theme.palette.primary.gray,
  },
  disabled: {
    height: "7vh",
    background: "#f8f9fb",
    display: "flex",
    alignItems: "center",
    padding: 10,
    color: "#999",
  },
  disabled1: {
    height: "7vh",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    border: `1px solid ${theme.palette.primary.lightgray}`,
    color: theme.palette.primary.gray,
  },
  card: {
    height: "10vh",
    border: `1px solid ${theme.palette.primary.lightgray}`,
    width: "45%",
    margin: "10px ",
    marginLeft: "0px",
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
  plusbtn: {
    "&:hover": {
      background: "#fff",
    },
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
  info: {
    // background:theme.palette.primary.dashboardBackground,
    color: theme.palette.primary.gray,
    // padding:5,
    fontSize: 17,
    margin: "0 10px",
  },
});

export default withRouter(withStyles(styles)(LocationsDesc));
