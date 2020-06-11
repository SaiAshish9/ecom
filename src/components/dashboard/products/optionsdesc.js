import React from "react";
import Paper from "@material-ui/core/Paper";
import { GoPencil } from "react-icons/go";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

const OptionsDesc = ({ classes }) => {
  const sizeOptions = [
    "Black - S",
    "Black - M",
    "Black - L",
    "White - S",
    "White - M",
    "White - L",
    "Blue - S",
    "Blue - M",
    "Blue - L",
  ];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      style={{
        width: "100%",
        marginTop: "5vh",
      }}
    >
      <Paper
        style={{
          width: "48%",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          style={{
            height: "9vh",
            padding: "20px",
          }}
        >
          <Typography>Color-Size</Typography>

          <IconButton>
            <GoPencil className={classes.icon} />
          </IconButton>
        </Box>

        {sizeOptions.map((i, k) => (
          <Box key={k}>
            <Divider />

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              style={{
                height: "7vh",
                padding: "20px",
              }}
            >
              <Typography className={classes.dark}>{i}</Typography>
              <Box display="flex" alignItems="center">
                <Typography className={classes.graylb}>Qty</Typography>
                <Typography className={classes.orangelb}>Add Price</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Paper>

      <Paper
        style={{
          width: "48%",
          height: "32vh",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          style={{
            height: "9vh",
            padding: "20px",
          }}
        >
          <Typography>Country Style</Typography>

          <IconButton>
            <GoPencil className={classes.icon} />
          </IconButton>
        </Box>

        {["Leather", "Denim", "Cotton"].map((i, k) => (
          <Box key={k}>
            <Divider />

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              style={{
                height: "7vh",
                padding: "20px",
              }}
            >
              <Typography className={classes.dark}>{i}</Typography>
              <Box display="flex" alignItems="center">
                <Typography className={classes.graylb}>Qty</Typography>
                <Typography className={classes.orangelb}>Add Price</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

const styles = (theme) => ({
  icon: {
    fontSize: 16,
    color: theme.palette.primary.lightgray,
  },
  dark: {
    color: theme.palette.primary.gray,
    fontSize: 12,
  },
  graylb: {
    padding: 7,
    marginRight: 10,
    textAlign: "center",
    width: "3rem",
    cursor: "pointer",
    fontSize: 10,
    color: theme.palette.primary.lightgray,
    backgroundColor: theme.palette.primary.dashboardBackground,
  },
  orangelb: {
    padding: 7,
    marginRight: 10,
    textAlign: "center",
    cursor: "pointer",
    width: "5rem",
    fontSize: 10,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.lightOrange,
  },
});

export default withStyles(styles)(OptionsDesc);
