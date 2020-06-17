import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import Chart from "../../general/chart";
import { IoIosTrendingUp } from "react-icons/io";
import Avatar from "@material-ui/core/Avatar";

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
      <Box style={{ marginBottom: "10vh" }}>
        <Box justifyContent="space-between" display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.date}
          >
            <Typography style={{ fontSize: 10 }} className={classes.light}>
              From
            </Typography>
            <Typography
              style={{ marginLeft: 12, fontSize: 12 }}
              className={classes.dark}
            >
              21 {"  "} Jan,2019
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.date}
          >
            <Typography style={{ fontSize: 10 }} className={classes.light}>
              To
            </Typography>
            <Typography
              style={{ marginLeft: 12, fontSize: 12 }}
              className={classes.dark}
            >
              21 {"  "} Nov,2019
            </Typography>
          </Box>
        </Box>
        <Chart />

        <Box
          style={{ padding: "1.5rem" }}
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Paper elevation={0} className={classes.card}>
            <Typography style={{ fontSize: 11 }} className={classes.dark}>
              Total Sales
            </Typography>
            <Typography style={{ fontSize: 12 }} color="primary">
              800 KWD
            </Typography>
          </Paper>

          <Paper elevation={0} className={classes.card}>
            <Typography style={{ fontSize: 11 }} className={classes.dark}>
              Growth Rate
            </Typography>
            <Typography
              style={{ display: "flex", alignItems: "center", fontSize: 12 }}
              className={classes.green}
            >
              <IoIosTrendingUp style={{ fontSize: 18, marginRight: 3 }} />
              {"  "}
              75% Up
            </Typography>
          </Paper>

          <Paper elevation={0} className={classes.card}>
            <Typography style={{ fontSize: 11 }} className={classes.dark}>
              Sales in january
            </Typography>
            <Typography style={{ fontSize: 12 }} className={classes.orange}>
              2,300 KWD
            </Typography>
          </Paper>

          <Paper elevation={0} className={classes.card}>
            <Typography style={{ fontSize: 11 }} className={classes.dark}>
              Sales this month
            </Typography>
            <Typography style={{ fontSize: 12 }} className={classes.orange}>
              1,400 KWD
            </Typography>
          </Paper>
        </Box>
      </Box>
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
  date: {
    background: theme.palette.primary.dashboardBackground,
    height: "6vh",
    width: "49.7%",
    marginBottom: "2px",
  },
  orange: {
    color: theme.palette.primary.orange,
  },
  green: {
    color: theme.palette.primary.green,
  },
  card: {
    width: "49%",
    margin: "10px 0",
    height: "12vh",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: `2px solid ${theme.palette.primary.dashboardBackground} `,
  },
});

export default withRouter(withStyles(styles)(Sales));
