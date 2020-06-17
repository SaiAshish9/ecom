import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import withStyles from "@material-ui/core/styles/withStyles";
import Btn from "../../../general/button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { LaunchContext } from "./index";

const Dialog1 = ({ open, classes, mobileView }) => {
  const { toggleDialog2, toggleDialog1 } = useContext(LaunchContext);

  return (
    <Dialog
      style={{
        width: mobileView && "100vw",
      }}
      open={open}
    >
      <Box className={classes.dialog}>
        <Typography style={{ fontSize: 18 }} className={classes.dark}>
          Do you want to view your website first ?
        </Typography>

        <Box>
          <Typography className={classes.dark}>No, Launch Store Now</Typography>
          <Btn
            onClick={() => {
              toggleDialog1();
              toggleDialog2();
            }}
            style={{ height: "2.7rem", margin: "20px 0" }}
          >
            YES
          </Btn>
        </Box>
      </Box>
    </Dialog>
  );
};

const styles = (theme) => ({
  dialog: {
    padding: "2rem",
    height: "50vh",
    right: "3vw",
    position: "relative",
    color: "white",
    width: "90vw",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
  },
  label: {
    color: theme.palette.primary.gray,
    fontSize: 13,
    margin: "7px 0",
  },
  dark: {
    color: theme.palette.primary.gray,
  },
});

export default withStyles(styles)(Dialog1);
