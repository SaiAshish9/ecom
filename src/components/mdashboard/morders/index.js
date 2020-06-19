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
import Paper from "@material-ui/core/Paper";
import Btn from "../../general/button";

const Orders = ({ classes }) => {
  const [status, setStatus] = useState(0);
  const [value, setValue] = useState(0);

  const tabbarOptions = ["New", "Pending", "Completed", "Cancelled"];

  return (
    <Fragment>
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
              setValue(k);
            }}
            style={{ width: "25%", padding: "10px" }}
            display="flex"
            className={value === k ? classes.activeTab : classes.tab}
            alignItems="center"
            key={k}
            justifyContent="center"
          >
            <Typography
              className={value === k ? classes.dark : classes.light}
              style={{ fontSize: 14 }}
            >
              {i}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        // onClick={() => history.push("/dashboard/store/locations/edit")}
        style={{ position: "fixed", right: "7vw", bottom: "15vh" }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
      <Box
        style={{
          padding: "1.5rem",
        }}
      >
        <Paper className={classes.paper}>
          <Box display="flex" justifyContent="space-between">
            <Box style={{ width: "70%" }} display="flex" flexDirection="column">
              <Typography style={{ fontSize: 14 }} className={classes.dark}>
                # 10352
              </Typography>
              <Typography
                style={{ fontSize: 12, margin: "10px 0" }}
                className={classes.dark}
              >
                99- Beads
              </Typography>
              <Typography
                style={{ fontSize: 12, margin: "10px 0" }}
                className={classes.light}
              >
                Ahmed Salem - Jun 04, 2019
              </Typography>
              <Typography
                style={{ fontSize: 16, margin: "10px 0" }}
                className={classes.dark}
              >
                125 KWD
              </Typography>
            </Box>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdQ4YVcPDZKQwChl8loPLB9ZJ_DzH-sfAmACfmT34gSpOCT101&usqp=CAU"
              style={{
                height: "20vh",
                width: "35%",
              }}
              variant="rounded"
            />{" "}
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Btn
              style={{
                marginLeft: 0,
                borderRadius: 10,
                background:'#eee'
              }}
            >
              Reject
            </Btn>
            <Btn
              style={{
                marginLeft: 0,
                borderRadius: 10,
              }}
            >
              Accept
            </Btn>
          </Box>
        </Paper>
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
  paper: {
    width: "100%",
    padding: "1rem",
  }
});

export default withStyles(styles)(Orders);
