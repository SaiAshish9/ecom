import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Btn from "../../general/button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";

const Options = [
  {
    name: "Bill Stewart",
  },
  {
    name: "Edwin Pearson",
  },
  {
    name: "Jeffery Baker",
  },
  {
    name: "Max Rice",
  },
  {
    name: "Devin Wilkins",
  },
  {
    name: "Kyle Lopez",
  },
  {
    name: "Mark Hill",
  },
];

const Customers = ({ classes, history }) => {
  return (
    <React.Fragment>
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
            marginLeft: "26vw",
            fontSize: 14,
          }}
        >
          Customers
        </Typography>
      </Paper>

      <Box
        display="flex"
        flexDirection="column"
        style={{
          padding: "1.5rem 0",
          marginBottom: "10vh",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          style={{
            margin: "10px 1.5rem",
          }}
        >
          <Paper elevation={0} className={classes.pink}>
            <Typography
              style={{
                fontSize: 12,
                margin: "2px 0",
              }}
              className={classes.light}
            >
              New Customers
            </Typography>
            <Typography style={{ fontSize: 20 }} className={classes.dark}>
              324
            </Typography>
          </Paper>

          <Paper elevation={0} className={classes.pink}>
            <Typography
              style={{
                fontSize: 12,
                margin: "2px 0",
              }}
              className={classes.light}
            >
              Total Customers
            </Typography>
            <Typography style={{ fontSize: 20 }} className={classes.dark}>
              2344
            </Typography>
          </Paper>
        </Box>

        <Typography
          style={{
            fontSize: 12,
            margin: "10px 1.5rem",
          }}
          className={classes.light}
        >
          All Customers
        </Typography>

        {Options.map((i, k) => (
          <Box>
            <Box key={k} className={classes.paper}>
              <Box display="flex" alignItems="center">
                <Typography className={classes.dark}>{i.name}</Typography>
              </Box>
              <Typography className={classes.orange}>
                <MoreVertIcon className={classes.light} />
              </Typography>
            </Box>
            {k !== Options.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </React.Fragment>
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
  orange: {
    color: theme.palette.primary.orange,
    fontSize: 12,
  },
  paper: {
    padding: "10px 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "9vh",
    margin: "5px 0",
  },
  pink: {
    height: "13vh",
    width: "47%",
    background: theme.palette.primary.lightOrange,
    padding: "20px",
  },
});

export default withRouter(withStyles(styles)(Customers));
