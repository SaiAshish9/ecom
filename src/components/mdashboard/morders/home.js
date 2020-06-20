import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Btn from "../../general/button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import withStyles from "@material-ui/core/styles/withStyles";

const Home = ({classes}) => {
  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Box display="flex" justifyContent="space-between">
          <Box style={{ width: "70%" }} display="flex" flexDirection="column">
            <Typography style={{ fontSize: 14 }} className={classes.dark}>
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
        <Box display="flex" justifyContent="space-between">
          <Btn
            style={{
              marginLeft: 0,
              borderRadius: 10,
              background: "#eee",
            }}
          >
            Reject
          </Btn>
          <Btn
            style={{
              marginLeft: 0,
              borderRadius: 10,
            }}
          >
            Accept
          </Btn>
        </Box>
      </Paper>
    </Fragment>
  );
};

const styles = (theme) => ({
  paper: {
    width: "100%",
    padding: "1rem",
  },
  dark: {
    color: theme.palette.primary.gray,
    fontSize: 12,
    padding: 0,
  },
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 14,
  },
});


export default withStyles(styles)(Home);
