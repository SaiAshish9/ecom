import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Locations = ({ classes, history }) => {
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
        <Typography className={classes.dark}>STORE LOCATIONS</Typography>
        <IconButton color="primary" style={{ fontSize: 16 }}>
          Skip
        </IconButton>
      </Box>

      <Box style={{ padding: "1.5rem", marginBottom: "10vh" }}>
        <Paper
          elevation={0}
          className={classes.paper}
          style={{ cursor: "pointer" }}
        >
          <Grid className={classes.grid1}>
            <Typography style={{ fontSize: 20 }} className={classes.logoTxt}>
              Burger King
            </Typography>
          </Grid>
        </Paper>

        <Box
          onClick={() => history.push("/dashboard/store/locations/edit")}
          style={{ position: "fixed", right: "7vw", bottom: "15vh" }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
      </Box>
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
  dark: {
    color: theme.palette.primary.gray,
  },

  paper: {
    width: "100%",
    height: "12vh",
    border: "1px solid #eee",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 20,
    color: theme.palette.primary.gray,
  },
});

export default withRouter(withStyles(styles)(Locations));
