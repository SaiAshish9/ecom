import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../../general/button";

const Manage = ({ classes }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{ padding: "1.5rem", marginBottom: "10vh" }}
    >
      <Typography
        style={{ fontSize: 14, textTransform: "uppercase" }}
        className={classes.light}
      >
        Name
      </Typography>

      <Typography
        style={{ fontSize: 14, marginBottom: "2rem" }}
        className={classes.dark}
      >
        John Doe
      </Typography>

      <Typography
        style={{ fontSize: 14, textTransform: "uppercase" }}
        className={classes.light}
      >
        address
      </Typography>

      <Typography
        style={{ fontSize: 14, marginBottom: "2rem" }}
        className={classes.dark}
      >
        19 Koss Landing
      </Typography>

      <Typography
        style={{ fontSize: 14, textTransform: "uppercase" }}
        className={classes.light}
      >
        contact number
      </Typography>

      <Typography
        style={{ fontSize: 14, marginBottom: "2rem" }}
        className={classes.dark}
      >
        +965 8785844
      </Typography>

      <Typography
        style={{ fontSize: 14, textTransform: "uppercase" }}
        className={classes.light}
      >
        Email
      </Typography>

      <Typography
        style={{ fontSize: 14, marginBottom: "2rem" }}
        className={classes.dark}
      >
        johndoe@gmail.com
      </Typography>

      <Button
        style={{
          margin: 0,
          width: "100%",
          height: "3rem",
          margin: "20px 0",
        }}
      >
        EDIT DETAILS
      </Button>
    </Box>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  label: {
    color: theme.palette.primary.lightgray,
  },
  dark: {
    color: theme.palette.primary.gray,
  },
});

export default withStyles(styles)(Manage);
