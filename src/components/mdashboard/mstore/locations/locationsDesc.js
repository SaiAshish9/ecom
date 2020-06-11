import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";

const LocationsDesc = ({ classes, history }) => {
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
        <Typography style={{ marginRight: "36vw" }} className={classes.dark}>
          STORE {' '}1
        </Typography>
      </Box>{" "}
      <Box style={{ marginBottom: "10vh", padding: "1.5rem" }}></Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  nav: {
    height: "10vh",
    padding: 20,
    borderBottom: `1px solid ${theme.palette.primary.lightgray} `,
  },
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  label: {
    color: theme.palette.primary.lightgray,
  },
  dark: {
    color: theme.palette.primary.gray,
  },
});

export default withRouter(withStyles(styles)(LocationsDesc));
