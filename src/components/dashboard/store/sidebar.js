import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { FaStore } from "react-icons/fa";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { GiWireframeGlobe } from "react-icons/gi";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { BsCreditCard } from "react-icons/bs";

import { withRouter } from "react-router-dom";

const Sidebar = ({ classes, history }) => {
  const settings = [
    {
      title: "Store Details",
      icon: <FaStore />,
      links: ["/dashboard/store"],
    },
    {
      title: "Store Theme",
      icon: <LaptopMacIcon />,
      links: ["/dashboard/store/theme"],
    },
    {
      title: "Domain",
      icon: <GiWireframeGlobe />,
      links: ["/dashboard/store/domain", "/dashboard/store/domain/edit"],
    },
    {
      title: "Shipping",
      icon: <BsCreditCard />,
      links: ["/dashboard/store/shipping"],
    },
    {
      title: "Store Locations",
      icon: <PinDropIcon />,
      links: ["/dashboard/store/locations", "/dashboard/store/locations/edit"],
    },
    {
      title: "Payment",
      icon: <FaStore />,
      links: ["/dashboard/store/payment", "/dashboard/store/payment/edit"],
    },
    {
      title: "Add Products",
      icon: <LoyaltyIcon />,
      links: ["/dashboard/store/products"],
    },
  ];

  return (
    <Grid lg={3} className={classes.grid}>
      {settings.map((i, k) => (
        <Paper
          onClick={() => {
            history.push(i.links[0]);
          }}
          elevation={i.links.includes(history.location.pathname) ? 1 : 0}
          key={k}
          className={
            i.links.includes(history.location.pathname)
              ? classes.activeCard
              : classes.settingsCard
          }
        >
          <IconButton color="primary">{i.icon}</IconButton>

          <Typography
            component="div"
            style={{ fontSize: 15, textAlign: "start", width: "60%" }}
          >
            {i.title}
          </Typography>

          <Typography component="div" className={classes.pending}>
            Pending
          </Typography>
        </Paper>
      ))}
    </Grid>
  );
};

const styles = (theme) => ({
  btnGrp: {
    background: "#fff",
    textTransform: "none",
    border: `0.08rem solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.gray,
  },
  input: {
    border: `1px solid ${theme.palette.primary.main} `,
    borderRadius: 7,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main} `,
    },
  },
  txtInput: {
    border: `1px solid ${theme.palette.primary.main} `,
    height: "2.5rem",
    padding: 10,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main} `,
    },
    "&::placeholder": {
      color: theme.palette.primary.lightgray,
      fontWeight: "bold",
    },
  },
  inputsCont: {
    display: "flex",
    height: "77vh",
    width: "50%",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "3rem",
  },
  label: {
    color: theme.palette.primary.lightgray,
  },
  main: {
    display: "flex",
    // justifyContent:'space-between'
  },

  typo: {
    color: theme.palette.primary.gray,
    fontSize: "1.2rem",
  },
  container: {
    padding: "3rem",
  },
  grid: {
    height: "77vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  settingsCard: {
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
    color: theme.palette.primary.gray,
    cursor: "pointer",
  },
  activeCard: {
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
    color: theme.palette.primary.gray,
    border: `0.1rem solid ${theme.palette.primary.main}`,
    cursor: "pointer",
  },
  pending: {
    color: theme.palette.primary.orange,
    background: theme.palette.primary.lightOrange,
    fontSize: 11,
    padding: 5,
    display: "flex",
    // alignSelf:'end',
    textAlign: "end",
  },
  form: {
    height: "75vh",
    width: "55vw",
    marginLeft: "2vw",
    display: "flex",
  },
});

export default withRouter(withStyles(styles)(Sidebar));
