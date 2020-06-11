import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../../general/button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const Dns = ({ classes }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{ padding: "1.5rem", marginBottom: "10vh" }}
    >
      <Typography style={{ fontSize: 14 }} className={classes.dark}>
        Name Servers
      </Typography>

      <Paper className={classes.paper}>
        <Grid className={classes.grid1} style={{ marginBottom: 5 }}>
          <Typography style={{ fontSize: 14 }} className={classes.logoTxt}>
            Using Custom Name Server
          </Typography>
          <Chip className={classes.chip} color="primary" label="Change" />
        </Grid>
        <Grid className={classes.grid2}>
          <Grid className={classes.grid2}>
            <Typography className={classes.light}>NAME SERVERS</Typography>
            <Typography className={classes.dark}>ed5.ecom.456</Typography>
            <Typography className={classes.dark}>ed5.ecom.345</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Typography style={{ fontSize: 14 }} className={classes.dark}>
        Records
      </Typography>

      <Paper style={{ height: "15vh" }} className={classes.paper}>
        <Grid className={classes.grid2}>
          <Grid className={classes.grid2}>
            <Typography className={classes.light}>NAME SERVERS</Typography>
            <Typography className={classes.dark}>ed5.ecom.456</Typography>
            <Typography className={classes.dark}>ed5.ecom.345</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Button
        style={{
          margin: 0,
          width: "100%",
          height: "3rem",
          margin: "20px 0",
        }}
      >
        EDIT DNS
      </Button>
    </Box>
  );
};

const styles = (theme) => ({
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
  chip: {
    color: theme.palette.primary.main,
    background: theme.palette.primary.lightOrange,
  },
  grid3: {
    display: "flex",
    justifyContent: "space-between",
  },
  grid1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.primary.gray,
  },
  paper: {
    width: "100%",
    height: "22vh",
    margin: "1rem 0",
    border: "1px solid #eee",
    padding: 20,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default withStyles(styles)(Dns);
