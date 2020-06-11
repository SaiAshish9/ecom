import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const ProductsDesc = ({ classes, history }) => {
  return (
    <Grid style={{ margin: "auto", display: "flex" }}>
      <IconButton
        onClick={() => {
          history.push("back");
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      add new product
    </Grid>
  );
};

const styles = (theme) => ({});

export default withRouter(withStyles(styles)(ProductsDesc));
