import React, { Fragment } from "react";
import MNavbar from "../../general/mnavbar";
import withStyles from "@material-ui/core/styles/withStyles";
import BellImg from "../../../assets/bell.png";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const MNotifications = ({ classes }) => {
  return (
    <Fragment>
      <MNavbar title="NOTIFICATIONS" />
      <Box
        style={{
          height: "80vh",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <img
          className="animate__animated animate__swing"
          src={BellImg}
          alt="bell"
          style={{
            width: "10rem",
            margin:20
          }}
        />
        <Typography className={classes.dark}>No Notifications Yet!</Typography>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  dark: {
    color: theme.palette.primary.gray,
  },
});

export default withStyles(styles)(MNotifications);
