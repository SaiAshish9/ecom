import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CreateIcon from "@material-ui/icons/Create";
import Btn from "../../general/button";

const data = [
  {
    option: "instagram",
    desc: "@storeapp",
  },
  {
    option: "twitter",
    desc: "@storeapp",
  },
  {
    option: "whatsapp",
    desc: "+96555555555",
  },
];

const Details = ({ classes, history }) => {
  return (
    <Fragment>
      <Box
        display="flex"
        className={classes.nav}
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton
          onClick={() => {
            history.push("/dashboard/store/settings");
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <Typography>STORE DETAILS</Typography>

        <IconButton>
          <CreateIcon />
        </IconButton>
      </Box>

      <Box
        className={classes.main}
        style={{
          padding: "2rem",
          marginBottom: "10vh",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          // alignItems="center"
        >
          <Box>
            <Typography className={classes.dark}>Salim Store</Typography>
            <Typography>محل سالم</Typography>
          </Box>
          <Typography style={{ fontSize: 12 }} className={classes.dark}>
            10AM-6PM
          </Typography>
        </Box>

        <Box style={{ marginTop: "3vh", marginRight: 10 }} display="flex">
          <Btn
            style={{
              height: "1.5rem",
              width: "5rem",
              fontSize: 12,
              borderRadius: 0,
              margin: 0,
            }}
          >
            Clothes
          </Btn>

          <Box
            className={classes.lbbox}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <Typography style={{ fontSize: 12 }}>7 days</Typography>

            <Typography style={{ fontSize: 12 }} className={classes.label}>
              avg preparation
            </Typography>
          </Box>
        </Box>
        <Box
          className={classes.lbbox}
          style={{
            margin: "10px 0",
            width: "8rem",
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Typography style={{ fontSize: 12 }}>10AM-6PM </Typography>
          <Typography style={{ fontSize: 12 }} className={classes.label}>
            Open
          </Typography>
        </Box>

        <Typography
          className={classes.bg}
          style={{ margin: "20px 0", fontSize: 14 }}
        >
          ABOUT US
        </Typography>

        <Typography className={classes.dark} style={{ fontSize: 12 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
          rutrum risus. Morbi id arcu in nunc interdum porta vel a nibh. Orci
          varius natoque penatibus et magnis dis parturient.
          <br />
          <br />
          Nulla molestie luctus urna at ornare. Ut dictum mollis risus, eget
          aliquet felis maximus et. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Aliquam at mi at leo
          tincidunt pulvinar.
        </Typography>

        <Typography
          className={classes.bg}
          style={{ margin: "20px 0", fontSize: 14 }}
        >
          STORE POLICY
        </Typography>

        <Typography className={classes.dark} style={{ fontSize: 12 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
          rutrum risus. Morbi id arcu in nunc interdum porta vel a nibh. Orci
          varius natoque penatibus et magnis dis parturient.
          <br />
          <br />
          Nulla molestie luctus urna at ornare. Ut dictum mollis risus, eget
          aliquet felis maximus et. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Aliquam at mi at leo
          tincidunt pulvinar.
        </Typography>

        {data.map((i, k) => (
          <Paper key={k} elevation={0} className={classes.paper}>
            <Typography
              className={classes.label}
              style={{ textTransform: "uppercase", fontSize: 12 }}
            >
              {i.option}
            </Typography>
            <Typography style={{ fontSize: 12 }} className={classes.dark}>
              {i.desc}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  lbbox: {
    background: theme.palette.primary.dashboardBackground,
    height: "1.5rem",
    width: "10rem",
    marginLeft: 10,
  },
  label: {
    color: theme.palette.primary.lightgray,
  },
  nav: {
    height: "10vh",
    padding: 20,
    borderBottom: `1px solid ${theme.palette.primary.lightgray} `,
  },
  dark: {
    color: theme.palette.primary.gray,
  },
  bg: {
    color: theme.palette.primary.lightgray,
  },
  paper: {
    background: theme.palette.primary.dashboardBackground,
    height: "7vh",
    border: `1px solid ${theme.palette.primary.lightgray}`,
    margin: "18px 0",
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default withRouter(withStyles(styles)(Details));
