import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";

const Sales = ({ classes, history }) => {
  return (
    <Fragment>
      <Paper elevation={0} className={classes.nav}>
        <IconButton
          onClick={() => {
            history.push("/dashboard");
          }}
          style={{
            marginLeft: 10,
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <Typography
          className={classes.dark}
          style={{
            justifyContent: "center",
            marginLeft: "30vw",
            fontSize: 14,
          }}
        >
          SALES
        </Typography>
      </Paper>
      <Box></Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
  },
  nav: {
    width: "100%",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.primary.lightgray} `,
  },
  dark: {
    color: theme.palette.primary.gray,
    fontSize: 14,
  },
});

export default withRouter(withStyles(styles)(Sales));
