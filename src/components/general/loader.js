import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";

const Loader = ({ classes }) => (
  <Backdrop className={classes.backdrop} open={true}>
    <CircularProgress color="inherit" />
  </Backdrop>
);

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.gray,
    background: theme.palette.primary.dashboardBackground,
  },
});

export default withStyles(styles)(Loader);
