import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import { withRouter } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Paper from "@material-ui/core/Paper";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Btn from "../../general/button";

import { RiLogoutBoxRLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import {
  FaUserCircle,
  FaStore,
  FaUsers,
  FaAppStoreIos,
} from "react-icons/fa";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import { BsCreditCard } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";

const options = [
  {
    name: "Online Store Settings",
    icon: <FaStore />,
    path:"/dashboard/store/settings"
  },
  {
    name: "Customers",
    icon: <FaUsers />,
  },
  {
    name: "Coupons & Discounts",
    icon: <FaStore />,
  },
  {
    name: "Apps",
    icon: <FaAppStoreIos />,
  },
  {
    name: "Request Services",
    icon: <LaptopMacIcon style={{ fontSize: 16 }} />,
  },
  {
    name: "Users",
    icon: <FaUserCircle />,
  },
  {
    name: "Ecom Balance",
    icon: <IoIosDocument />,
  },
  {
    name: "Subscriptions",
    icon: <BsCreditCard />,
    path:"/dashboard/subscriptions"
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    path:"/dashboard/settings"
  },
  {
    name: "Logout",
    icon: <RiLogoutBoxRLine />,
    path:"/"
  },
];

const Store = ({ classes, history }) => {
  return (
    <Box style={{ marginBottom: "10vh" }}>
      <Box
        display="flex"
        className={classes.nav}
        alignItems="center"
        justifyContent="center"
      >
        <Typography className={classes.dark}>STORES</Typography>
        <Box
          style={{
            position: "absolute",
            right: "10vw",
            top: "1.2rem",
          }}
        >
          {/* <Avatar */}
          {/* > */}
          <AccountCircleIcon
            style={{
              fontSize: "2rem",
            }}
            className={classes.dark}
          />
          {/* </Avatar> */}
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        style={{
          padding: "1.5rem",
        }}
      >
        <Paper elevation={0} className={classes.paper}>
          <Typography>Salim Store</Typography>

          <Btn
            style={{
              width: "9rem",
              height: "2.2rem",
              fontSize: 12,
            }}
          >
            <VisibilityIcon style={{ marginRight: 10, fontSize: 16 }} />
            View Website
          </Btn>
        </Paper>

        {options.map((i, k) => (
          <Box
            onClick={() => {
              history.push(i.path);
            }}
            key={k}
            display="flex"
            alignItems="center"
            className={classes.box}
            style={{
              border: k === options.length - 1 && "none",
            }}
          >
            <Box
              style={{
                fontSize: 18,
              }}
            >
              {i.icon}
            </Box>

            <Typography style={{ fontSize: 14, marginLeft: 15 }}>
              {i.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const styles = (theme) => ({
  nav: {
    height: "10vh",
    width: "100vw",
    borderBottom: `1px solid ${theme.palette.primary.lightgray}`,
  },
  dark: {
    color: theme.palette.primary.gray,
    textAlign: "center",
  },
  paper: {
    height: "12vh",
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fef4da",
  },
  box: {
    padding: 10,
    height: "9vh",
    borderBottom: `2px solid ${theme.palette.primary.dashboardBackground}`,
    color: theme.palette.primary.gray,
  },
});

export default withRouter(withStyles(styles)(Store));
