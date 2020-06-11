import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withRouter } from "react-router-dom";

const Products = ({ classes, history }) => {
  return (
    <Grid lg={9} className={classes.grid}>
      <Paper
        style={{ textAlign: "center", justifyContent: "center" }}
        className={classes.form}
      >
        Products
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  form: {
    minHeight: "75vh",
    width: "55vw",
    marginLeft: "2vw",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default withRouter(withStyles(styles)(Products));
