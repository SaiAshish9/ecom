import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { IoIosSpeedometer } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { FaStore } from "react-icons/fa";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ToggleButton from "@material-ui/lab/ToggleButton";

const options = [
  {
    name: "Dashboard",
    icon: <IoIosSpeedometer />,
    path: "/dashboard",
    paths: ["/dashboard"],
  },
  {
    name: "Orders",
    icon: <AiFillAppstore />,
    path: "/dashboard/orders",
    paths: ["/dashboard/orders"],
  },
  {
    name: "Products",
    icon: <LoyaltyIcon style={{ fontSize: 15 }} />,
    path: "/dashboard/products",
    paths: ["/dashboard/products"],
  },
  {
    name: "Notifications",
    icon: <NotificationsIcon style={{ fontSize: 15 }} />,
    path: "/dashboard/notifications",
    paths: ["/dashboard/notifications"],
  },
  {
    name: "Store",
    icon: <FaStore />,
    path: "/dashboard/store",
    paths: [
      "/dashboard/store",
      "/dashboard/store/settings",
      "/dashboard/store/details",
      "/dashboard/store/theme",
      "/dashboard/store/domain",
      "/dashboard/store/domain/edit",
      "/dashboard/store/shipping",
      "/dashboard/store/shipping/edit",
      "/dashboard/store/domain/edit/manage",
      "/dashboard/store/locations",
      "/dashboard/store/locations/edit",
    ],
  },
];

const SimpleBottomNavigation = ({ history, classes }) => {
  return (
    <React.Fragment>
      <Paper elevation={0} className={classes.paper}>
        {options.map((i, k) => (
          <Box
            key={k}
            display="flex"
            alignItems="center"
            flexDirection="column"
            onClick={() => {
              history.push(i.path);
            }}
            style={{
              fontSize: 10,
            }}
          >
            <ToggleButton
              color="primary"
              style={{
                border: "none",
                display: "block",
              }}
            >
              <Typography
                style={{
                  fontSize: 12,
                  position: "relative",
                  top: "1rem",
                }}
                className={
                  i.paths.includes(history.location.pathname)
                    ? classes.main
                    : classes.dark
                }
              >
                {i.icon}
              </Typography>
              <br />
              <Typography
                style={{
                  position: "relative",
                  bottom: "0.2rem",
                }}
                className={
                  i.paths.includes(history.location.pathname)
                    ? classes.main
                    : classes.dark
                }
              >
                {i.name}
              </Typography>
            </ToggleButton>
          </Box>
        ))}
      </Paper>
    </React.Fragment>
  );
};

const styles = (theme) => ({
  paper: {
    width: "100%",
    height: "10vh",
    position: "fixed",
    bottom: 0,
    paddingBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  dark: {
    color: theme.palette.primary.gray,
    fontSize: 10,
  },
  main: {
    color: theme.palette.primary.main,
    fontSize: 10,
  },
});

export default withRouter(withStyles(styles)(SimpleBottomNavigation));
