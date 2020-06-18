import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Checkbox from "../../../general/checkbox";
import Btn from "../../../general/button";
import Switch from "@material-ui/core/Switch";
import MNavbar from "../../../general/mnavbar";

const cardData = ["KNET", "Visa / Mastercard", "Amex", "Cash on Delivery"];

const PaymentDesc = ({ classes, history }) => {
  return (
    <Fragment>
      <MNavbar title="CHARGES" link="/dashboard/store/payment" />
      <Box style={{ padding: "1.5rem", marginBottom: "10vh" }}>
        <Paper
          style={{
            width: "100%",
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

        <Typography className={classes.logoTxt}>Transaction Fee</Typography>

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
                style={{ fontSize: 12, margin: "20px" }}
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
                <Typography className={classes.dark} style={{ fontSize: 12 }}>
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
                <Typography className={classes.dark} style={{ fontSize: 12 }}>
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
                <Typography className={classes.dark} style={{ fontSize: 12 }}>
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
                <Typography className={classes.dark} style={{ fontSize: 12 }}>
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

        <Btn
          style={{
            margin: "10px 0",
            width: "100%",
            height: "3rem",
          }}
          onClick={() => {
            history.push("/dashboard/store");
          }}
        >
          SAVE
        </Btn>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  label: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  dark: {
    color: theme.palette.primary.gray,
  },
  grid3: {
    display: "flex",
    justifyContent: "space-between",
  },
  grid1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "10px 30px",
  },
  paper: {
    width: "100%",
    height: "28vh",
    border: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "20px 0",
  },
  logoTxt: {
    color: theme.palette.primary.gray,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "5vh",
    position: "relative",
    top: 2,
    background: theme.palette.primary.dashboardBackground,
  },
});

export default withRouter(withStyles(styles)(PaymentDesc));
