import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import MNavbar from "../../general/mnavbar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const links = [
  {
    name: "Search Engine",
  },
  {
    name: "Google Analytics",
  },
  {
    name: "Facebook Pixel",
    // path: "",
  }
];

const Preferences = ({ classes, history }) => {
  return (
    <Fragment>
      <MNavbar title="PREFERENCES" link="/dashboard/settings" />
      <Box style={{ padding: "1.5rem", marginBottom: "10vh" }}>
        {links.map((i, k) => (
          <Box key={k}>
            <Box
              display="flex"
              alignItems="center"
              style={{ height: "8vh" }}
              onClick={() => {
                history.push(i.path);
              }}
            >
              <Typography className={classes.dark}>{i.name}</Typography>
            </Box>
            {k !== links.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  dark: {
    color: theme.palette.primary.gray,
    fontSize: 16,
  },
});

export default withRouter(withStyles(styles)(Preferences));
