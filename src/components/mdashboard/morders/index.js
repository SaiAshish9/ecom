import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Switch, Route,withRouter } from "react-router-dom";
import Home from './home'
import Pending from "./pending";
import Completed from "./completed"
import Cancelled from "./cancelled"
import Products from "./products"
import ClientDetails from "./clientDetails"

const Orders = ({ classes,history }) => {
  const [status, setStatus] = useState(0);

  const tabbarOptions = [
    {
      name: "New",
      path: "/dashboard/orders",
    },
    {
      name: "Pending",
      path: "/dashboard/orders/pending",
    },
    {
      name: "Completed",
      path: "/dashboard/orders/completed",
    },
    {
      name: "Cancelled",
      path: "/dashboard/orders/cancelled",
    },
  ];

  return (
    <Fragment>
      {![
        "/dashboard/orders/products",
        "/dashboard/orders/clientDetails",
      ].includes(history.location.pathname) && (
        <Box>
          <Box
            style={{ height: "10vh", padding: "1.5rem" }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography style={{ fontSize: 20 }} className={classes.dark}>
              Orders
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography className={classes.light}>Store</Typography>

              <Select
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                className={classes.select}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                  },
                }}
              >
                <MenuItem value={0}>
                  <Typography className={classes.dark}>Busy</Typography>
                </MenuItem>
                <MenuItem value={1}>
                  <Typography className={classes.dark}>Active</Typography>
                </MenuItem>
              </Select>

              <Avatar variant="rounded" outlined className={classes.btn}>
                <Button>
                  <SearchIcon />
                </Button>
              </Avatar>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between">
            {tabbarOptions.map((i, k) => (
              <Box
                onClick={() => {
                  history.push(i.path);
                }}
                style={{ width: "25%", padding: "10px" }}
                display="flex"
                className={
                  history.location.pathname === i.path
                    ? classes.activeTab
                    : classes.tab
                }
                alignItems="center"
                key={k}
                justifyContent="center"
              >
                <Typography
                  className={
                    history.location.pathname === i.path
                      ? classes.dark
                      : classes.light
                  }
                  style={{ fontSize: 14 }}
                >
                  {i.name}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            onClick={() => history.push("/dashboard/orders/products")}
            style={{
              position: "fixed",
              right: "7vw",
              bottom: "15vh",
              zIndex: 2,
            }}
          >
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Box>
        </Box>
      )}

      <Box
        style={{
          padding: ![
        "/dashboard/orders/products",
        "/dashboard/orders/clientDetails",
      ].includes(history.location.pathname)
      && "1.5rem",
          marginBottom: "10vh",
        }}
      >
        <Switch>
          <Route exact path="/dashboard/orders" component={Home} />
          <Route path="/dashboard/orders/pending" component={Pending} />
          <Route
            path="/dashboard/orders/completed"
            component={Completed}
          />{" "}
          <Route path="/dashboard/orders/cancelled" component={Cancelled} />
          <Route path="/dashboard/orders/products" component={Products} />
          <Route
            path="/dashboard/orders/clientDetails"
            component={ClientDetails}
          />
        </Switch>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  dark: {
    color: theme.palette.primary.gray,
    fontSize: 12,
    padding: 0,
  },
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 14,
  },
  btn: {
    background: "#fff",
    border: `1px solid ${theme.palette.primary.lightgray}`,
    width: "2.2rem",
    height: "2rem",
    margin: " 0 5px",
    color: theme.palette.primary.gray,
  },
  select: {
    "&:before": {
      border: "none",
    },
    "&:after": {
      border: "none",
    },
    margin: "0 10px",
    border: `1px solid ${theme.palette.primary.lightgray}`,
    padding: "0 5px",
    borderRadius: 5,
  },
  tab: {
    borderBottom: `1px solid ${theme.palette.primary.lightgray}`,
  },
  activeTab: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
});

export default withRouter(withStyles(styles)(Orders))
