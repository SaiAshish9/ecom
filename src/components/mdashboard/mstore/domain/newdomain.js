import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import Search from "../../../general/search"
import Btn from "../../../general/button";
import Divider from "@material-ui/core/Divider";

const Locations = ({ classes, history }) => {
  return (
    <Fragment>
      <Box
        display="flex"
        className={classes.nav}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          style={{
            position: "absolute",
            left: "5vw",
          }}
          onClick={() => {
            history.push("/dashboard/store/settings");
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography className={classes.dark}>BUY NEW DOMAINS</Typography>
      </Box>

      <Box style={{ padding: "2rem", marginBottom: "10vh" }}>
        <Typography style={{ fontSize: 12 }} className={classes.dark}>
          DOMAIN NAME
        </Typography>
        <Box style={{ position: "relative", right: "1rem" }}>
          <Search gray />
        </Box>
        <Typography
          style={{ fontSize: 12, marginTop: 20 }}
          className={classes.light}
        >
          Enter the domain you want to buy.
        </Typography>
        <Typography
          style={{ fontSize: 18, margin: "3rem 0" }}
          className={classes.dark}
        >
          Domains Result
        </Typography>

        {[...Array(3).keys()].map((i, k) => (
          <Box key={k}>
            <Box
              style={{ height: "10vh" }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                style={{ height: "8vh" }}
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Typography style={{ fontSize: 12 }} className={classes.dark}>
                  salimstore.com
                </Typography>
                <Typography style={{ fontSize: 12 }} className={classes.light}>
                  $17 USD/year
                </Typography>
              </Box>
              <Btn style={{ fontSize: 12, width: "5rem" }}>Buy</Btn>
            </Box>
            {k !== 2 && <Divider />}
          </Box>
        ))}
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  nav: {
    height: "10vh",
    padding: 20,
    borderBottom: `1px solid ${theme.palette.primary.lightgray} `,
  },
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  dark: {
    color: theme.palette.primary.gray,
  },

  paper: {
    width: "100%",
    height: "12vh",
    border: "1px solid #eee",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 20,
    color: theme.palette.primary.gray,
  },
});

export default withRouter(withStyles(styles)(Locations));
