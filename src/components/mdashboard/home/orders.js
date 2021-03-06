import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chart from "../../general/chart";
import {IoIosTrendingUp} from "react-icons/io"
import Avatar from "@material-ui/core/Avatar";
import MNavbar from "../../general/mnavbar";

const Orders = ({ classes, history }) => {
  return (
    <Fragment>
      <MNavbar title="ORDERS" link="/dashboard/store"/>
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
              Total Orders
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
              Orders in january
            </Typography>
            <Typography style={{ fontSize: 12 }} className={classes.orange}>
              2,300 KWD
            </Typography>
          </Paper>

          <Paper elevation={0} className={classes.card}>
            <Typography style={{ fontSize: 11 }} className={classes.dark}>
              Orders this month
            </Typography>
            <Typography style={{ fontSize: 12 }} className={classes.orange}>
              1,400 KWD
            </Typography>
          </Paper>
        </Box>

        <Box style={{ padding: "0 1.5rem" }}>
          <Typography style={{ fontSize: 12 }} className={classes.light}>
            MOST SOLD ITEMS
          </Typography>

          <Box
            style={{ margin: "10px 0" }}
            justifyContent="space-between"
            display="flex"
            alignItems="center"
          >
            {[1, 2].map((_, k) => (
              <Box
                key={k}
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{ height: "10vh" }}
                className={classes.date}
              >
                <Typography style={{ fontSize: 10 }} className={classes.light}>
                  <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdQ4YVcPDZKQwChl8loPLB9ZJ_DzH-sfAmACfmT34gSpOCT101&usqp=CAU"
                    style={{
                      height: "8vh",
                      width: "3rem",
                    }}
                    variant="rounded"
                  />
                </Typography>
                <Typography
                  style={{ marginLeft: 5, fontSize: 10 }}
                  className={classes.dark}
                >
                  100- Wood Beads
                </Typography>
              </Box>
            ))}
          </Box>
          <Typography style={{ fontSize: 12 }} className={classes.light}>
            LEAST SOLD ITEMS
          </Typography>

          <Box
            style={{ marginTop: "10px", marginBottom: "15vh" }}
            justifyContent="space-between"
            display="flex"
            alignItems="center"
          >
            {[1, 2].map((_, k) => (
              <Box
                key={k}
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{ height: "10vh" }}
                className={classes.date}
              >
                <Typography style={{ fontSize: 10 }} className={classes.light}>
                  <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdQ4YVcPDZKQwChl8loPLB9ZJ_DzH-sfAmACfmT34gSpOCT101&usqp=CAU"
                    style={{
                      height: "8vh",
                      width: "3rem",
                    }}
                    variant="rounded"
                  />
                </Typography>
                <Typography
                  style={{ marginLeft: 5, fontSize: 10 }}
                  className={classes.dark}
                >
                  100- Wood Beads
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
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

export default withRouter(withStyles(styles)(Orders));
