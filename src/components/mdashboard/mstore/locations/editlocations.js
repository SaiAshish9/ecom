import React, { Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Btn from "../../../general/button";
import MNavbar from "../../../general/mnavbar";


const options = [
  {
    label: "city",
    placeholder: "Kuwait City",
  },
  {
    label: "block street",
    placeholder: "45",
  },
  {
    label: "avenue",
    placeholder: "Divone",
  },
  {
    label: "building",
    placeholder: "White",
  },
  {
    label: "phone number",
    placeholder: "1234",
  },
  {
    label: "additional details",
    placeholder: "NA",
  },
];


const LocationsDesc = ({ classes, history }) => {
  return (
    <Fragment>
     
     <MNavbar
     skip
     title="STORE ADDRESS"
     link="/dashboard/store/locations/edit"
     />

      <Box style={{ padding: "1.5rem", marginBottom: "10vh" }}>
        <Grid
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ color: "#000" }} component="h6" variant="h6">
            Add An Address
          </Typography>
        </Grid>

        <Grid>
          <Typography className={classes.label}>Map</Typography>

          <img
            src="https://i.stack.imgur.com/mPsIw.png"
            style={{ width: "100%", height: "25vh" }}
            alt="map"
          />
        </Grid>

        {options.map((i, k) => (
          <Grid key={i}>
            <Typography className={classes.label}>{i.label}</Typography>
            <input
              type="text"
              placeholder={i.placeholder}
              className={classes.txtInput}
            />
          </Grid>
        ))}

        <Btn
          style={{
            width: "100%",
            margin:"20px 0"
          }}
        >
          SAVE ADDRESS
        </Btn>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  dark: {
    color: theme.palette.primary.gray,
  },
  logoTxt: {
    color: theme.palette.primary.gray,
  },
  label: {
    color: theme.palette.primary.lightgray,
    fontSize: 13,
    margin: "10px 0",
    textTransform: "uppercase",
  },
  txtInput: {
    border: `1px solid ${theme.palette.primary.main} `,
    height: "2.5rem",
    width: "100%",
    color: theme.palette.primary.gray,
    padding: 10,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main} `,
    },
    "&::placeholder": {
      color: theme.palette.primary.gray,
      fontWeight: "bold",
    },
  },
});

export default withRouter(withStyles(styles)(LocationsDesc));
