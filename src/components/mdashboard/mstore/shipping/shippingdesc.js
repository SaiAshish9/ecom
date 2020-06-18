import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import Button from "../../../general/button";
import { withRouter } from "react-router-dom";
import Search from "../../../general/search";
import Divider from "@material-ui/core/Divider";
import MNavbar from "../../../general/mnavbar";

const Shippingdesc = ({ classes, history }) => {
  return (
    <Fragment>
      <MNavbar title="BUY NEW DOMAINS" link="/dashboard/store/shipping" />
      <Box style={{ padding: "1.5rem", marginBottom: "10vh" }}>
        <Typography style={{ fontSize: 12 }} className={classes.dark}>
          DOMAIN NAME
        </Typography>
        <Box style={{ position: "relative", right: "1rem", width: "100%" }}>
          <Search />
        </Box>
        <Typography style={{ fontSize: 12 }} className={classes.light}>
          Enter the domain you want to buy
        </Typography>
        <Typography style={{ marginTop: "5vh" }} className={classes.dark}>
          Domains Result
        </Typography>

        <Box style={{ marginTop: "2vh" }}>
          {[...Array(3).keys()].map((i, k) => (
            <Box key={k}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                style={{ height: "12vh" }}
              >
                <Box>
                  <Typography style={{ fontSize: 14 }} className={classes.dark}>
                    salimstore.com
                  </Typography>
                  <Typography
                    style={{ fontSize: 14 }}
                    className={classes.light}
                  >
                    $17 USD/year
                  </Typography>
                </Box>
                <Button
                  style={{
                    fontSize: 12,
                    width: "25%",
                  }}
                >
                  Buy
                </Button>
              </Box>
              {k !== 2 && <Divider />}
            </Box>
          ))}
        </Box>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  dark:{
    color: theme.palette.primary.gray,
    fontSize: 12,
  },
});

export default withRouter(withStyles(styles)(Shippingdesc));
