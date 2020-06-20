import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import withStyles from "@material-ui/core/styles/withStyles";

const Pending = ({ classes }) => {
  return (
    <Fragment>
      {[...Array(3).keys()].map((i, k) => (
        <Paper
          elevation={0}
          className={
            k === 0
              ? 
               [classes.paper, classes.paper1]
              : k === 1
              ? [classes.paper, classes.paper2]
              : [classes.paper, classes.paper3]
          }
        >
          <Box display="flex" justifyContent="space-between">
            <Box style={{ width: "70%" }} display="flex" flexDirection="column">
              <Typography
                style={{ fontSize: 14 }}
                className={
                  k === 0 ? classes.dark : k === 1 ? classes.main : classes.red
                }
              >
                # 10352
              </Typography>
              <Typography
                style={{ fontSize: 12, margin: "10px 0" }}
                className={classes.dark}
              >
                99- Beads
              </Typography>
              <Typography
                style={{ fontSize: 12, margin: "10px 0" }}
                className={classes.light}
              >
                Ahmed Salem - Jun 04, 2019
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                style={{ margin: "5px 0" }}
              >
                <Typography style={{ fontSize: 12 }} className={classes.dark}>
                  Remaining
                </Typography>
                <Typography
                  style={{ fontSize: 14, margin: "5px" }}
                  className={
                    k === 0
                      ? classes.green
                      : k === 1
                      ? classes.main
                      : classes.red
                  }
                >
                  5 days
                </Typography>
              </Box>
              <Typography
                style={{ fontSize: 16, margin: "10px 0" }}
                className={classes.dark}
              >
                125 KWD
              </Typography>
            </Box>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdQ4YVcPDZKQwChl8loPLB9ZJ_DzH-sfAmACfmT34gSpOCT101&usqp=CAU"
              style={{
                height: "20vh",
                width: "35%",
              }}
              variant="rounded"
            />{" "}
          </Box>
        </Paper>
      ))}
    </Fragment>
  );
};

const styles = (theme) => ({
  paper: {
    width: "100%",
    padding: "1rem",
    margin: "20px 0"
    },
  paper1: {
    border: `1px solid ${theme.palette.primary.lightgray}`,
  },
  paper2: {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  paper3: {
    border: `1px solid red`,
  },
  dark: {
    color: theme.palette.primary.gray,
    fontSize: 12,
    padding: 0,
  },
  main: {
    color: theme.palette.primary.main,
    fontSize: 12,
    padding: 0,
  },
  red: {
    color: "red",
    fontSize: 12,
    padding: 0,
  },
  green: {
    color: theme.palette.primary.green,
    fontSize: 12,
    padding: 0,
  },
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 14,
  },
});

export default withStyles(styles)(Pending);
