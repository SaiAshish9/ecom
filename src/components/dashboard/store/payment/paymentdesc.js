import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "../../../general/button";
import Checkbox from "../../../general/checkbox";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";

import { withRouter } from "react-router-dom";

const PaymentDesc = ({ classes, history }) => {
  const cardData = ["KNET", "Visa / Mastercard", "Amex", "Cash on Delivery"];

  return (
    <Grid lg={9} className={classes.grid}>
      <Paper className={classes.form}>
        <Paper
          style={{
            width: "50%",
            height: "17vh",
            marginTop: "5vh",
            padding: 20,
          }}
          className={classes.paper}
        >
          <Grid className={classes.grid1}>
            <Typography style={{ fontSize: 20 }} className={classes.logoTxt}>
              ECOM Pay
            </Typography>
          </Grid>

          <Grid className={classes.grid3}>
            <Grid>
              <Typography className={classes.dark}>456789345</Typography>

              <Typography className={classes.light}>BANK NUMBER</Typography>
            </Grid>

            <Grid>
              <Typography className={classes.dark}>2345678909</Typography>

              <Typography className={classes.light}>IBAN</Typography>
            </Grid>

            <Grid>
              <Typography className={classes.dark}>NBK</Typography>

              <Typography className={classes.light}>BANK NAME</Typography>
            </Grid>
          </Grid>
        </Paper>

        <Button
          style={{
            borderRadius: "0",
            marginTop: "-10vh",
          }}
        >
          Edit Ecom Pay
        </Button>

        <Typography style={{ marginTop: "-5vh" }} className={classes.logoTxt}>
          Transaction Fee
        </Typography>

        <Grid
          className={classes.desc}
          style={{ width: "50%", marginTop: "-5vh" }}
        >
          <Grid
            style={{
              justifyContent: "space-around",
              display: "flex",
              flexWrap: "wrap",
              margin: "10px 0",
            }}
            className={classes.descPart}
          >
            {cardData.map((i, k) => (
              <Paper
                key={k}
                style={{
                  width: "100%",
                  minHeight: "20vh",
                  display: "flex",
                  flexDirection: "column",
                }}
                className={classes.paper}
              >
                <Grid
                  style={{ alignItems: "center", height: "5vh" }}
                  className={classes.grid1}
                >
                  <Typography
                    style={{ fontSize: 15, margin: "20px" }}
                    className={classes.logoTxt}
                  >
                    {i}
                  </Typography>
                  <Grid
                    style={{
                      margin: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      className={classes.dark}
                      style={{ fontSize: 12 }}
                    >
                      IS ACTIVE
                    </Typography>
                    <Switch checked={true} color="primary" />
                  </Grid>
                </Grid>
                <Divider style={{ position: "relative", bottom: 5 }} />
                <Grid>
                  <Grid
                    style={{
                      paddingLeft: 20,
                      margin: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Checkbox check={true} />
                    <Typography
                      className={classes.dark}
                      style={{ fontSize: 12 }}
                    >
                      Pay Service Charges
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      paddingLeft: 20,
                      margin: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Checkbox />
                    <Typography
                      className={classes.dark}
                      style={{ fontSize: 12 }}
                    >
                      Let customer pay services
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      paddingLeft: 20,
                      margin: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Checkbox />
                    <Typography
                      className={classes.dark}
                      style={{ fontSize: 12 }}
                    >
                      Split service charges with customers
                    </Typography>
                  </Grid>
                </Grid>
                <Grid className={classes.footer}>
                  <Typography className={classes.dark} style={{ fontSize: 12 }}>
                    Min 300 fills or 2.5%
                  </Typography>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </Grid>

        <Button style={{ marginTop: "10vh" }}>Save</Button>
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "5vh",
    position: "relative",
    top: 2,
    background: theme.palette.primary.dashboardBackground,
  },

  desc: {
    width: "90%",
    height: "40vh",
    display: "flex",
    justifyContent: "space-between",
  },

  descPart: {
    height: "60vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  dark: {
    color: theme.palette.primary.gray,
  },

  chip: {
    color: theme.palette.primary.green,
    background: theme.palette.primary.lightgreen,
  },
  chip1: {
    color: theme.palette.primary.orange,
    background: theme.palette.primary.lightOrange,
  },
  grid3: {
    display: "flex",
    justifyContent: "space-between",
  },

  paper: {
    width: "45%",
    height: "28vh",
    border: "1px solid #eee",
    // padding:20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 20,
    position: "relative",
    bottom: "5vh",
  },

  left: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    color: theme.palette.primary.lightgray,
    fontSize: 18,
  },

  grid1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "10px 30px",
    // borderBottom:`1px solid ${theme.palette.primary.lightgray}`,
  },

  logoTxt: {
    color: theme.palette.primary.gray,
  },
  preferred: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  form: {
    minHeight: "130vh",
    width: "55vw",
    marginLeft: "2vw",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  plus: {
    height: 25,
    padding: 5,
    width: 25,
    borderRadius: "50%",
    fontSize: 10,
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.paper}`,
  },
  plus1: {
    position: "absolute",
    left: "35%",
    top: "25%",
    height: 100,
    padding: 25,
    width: 100,
    color: "white",
    borderRadius: "50%",
    fontSize: 30,
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.paper}`,
  },
  iconBtn: {
    color: "#000",
    padding: 5,
    marginRight: 10,
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main,
      color: "#000",
    },
  },

  iconBtn1: {
    padding: 9,
    marginRight: 10,

    border: `2px solid ${theme.palette.primary.main}`,
    "&:hover": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
});

export default withRouter(withStyles(styles)(PaymentDesc));
