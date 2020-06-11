import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "../../general/button";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";

const Shipping = ({ classes }) => {
  return (
    <Grid lg={9} className={classes.grid}>
      <Paper className={classes.form}>
        <Grid className={classes.left}>
          <Typography className={classes.label}>AVG PREPARING ORDER</Typography>

          <Paper elevation={0} className={classes.disabled}>
            7 days
          </Paper>

          <Paper elevation={0} className={classes.first}>
            <label
              className={classes.label}
              style={{ fontSize: 13, maxWidth: "50%" }}
            >
              Enable Order Tracking For Customers
            </label>

            <Switch checked={true} color="primary" />
          </Paper>

          <Paper
            elevation={0}
            className={classes.first}
            style={{ flexDirection: "column" }}
          >
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <label
                className={classes.label}
                style={{ fontSize: 13, maxWidth: "50%" }}
              >
                Enable Own Delivery
              </label>

              <Switch checked={true} color="primary" />
            </Grid>

            <label
              className={classes.labellt}
              style={{ fontSize: 15, maxWidth: "50%" }}
            >
              COST OF DELIVERY
            </label>

            <input type="text" placeholder="KD1" className={classes.txtInput} />

            <label className={classes.labellt} style={{ fontSize: 12 }}>
              Cash on delivery only available for your own delivery
            </label>

            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                margin: "10px 0",
              }}
            >
              <label className={classes.label} style={{ fontSize: 13 }}>
                Enable Own Delivery
              </label>

              <Switch checked={!true} color="primary" />
            </Grid>
          </Paper>

          <Button>Save Changes</Button>
        </Grid>

        <Grid className={classes.right}>
          <Paper
            elevation={0}
            className={classes.first}
            style={{
              flexDirection: "column",
              marginTop: "7vh",
              opacity: 0.3,
              background: "#f4f4f4",
            }}
          >
            <label className={classes.labellt} style={{ fontSize: 15 }}>
              Local Shipping Companies
            </label>
            <Divider style={{ margin: 10 }} />
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                minWidth: "20vw",
              }}
            >
              <label
                className={classes.label}
                style={{ fontSize: 20, maxWidth: "50%" }}
              >
                Aramex
              </label>
              <Switch checked={true} disabled color="primary" />
            </Grid>
            <Divider style={{ margin: 10 }} />
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                margin: "10px 0",
              }}
            >
              <label className={classes.label} style={{ fontSize: 20 }}>
                bees
              </label>
              <Switch disabled checked={!true} color="primary" />
            </Grid>
          </Paper>

          <Paper
            elevation={0}
            className={classes.first}
            style={{ flexDirection: "column", marginTop: "7vh" }}
          >
            <label className={classes.labellt} style={{ fontSize: 15 }}>
              International Shipping Companies
            </label>
            <Divider style={{ margin: 7 }} />
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                minWidth: "20vw",
              }}
            >
              <label
                className={classes.label}
                style={{ fontSize: 20, maxWidth: "50%" }}
              >
                Aramex
              </label>
              <Switch checked={true} color="primary" />
            </Grid>
            <Divider style={{ margin: 7 }} />
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                margin: "10px 0",
              }}
            >
              <label className={classes.label} style={{ fontSize: 20 }}>
                bees
              </label>
              <Switch checked={!true} color="primary" />
            </Grid>
          </Paper>
        </Grid>
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  disabled: {
    height: "7vh",
    // width:''
    background: "#f8f9fb",
    display: "flex",
    alignItems: "center",
    padding: 10,
    color: "#999",
  },
  txtInput: {
    border: `2px solid ${theme.palette.primary.main} `,
    height: "2.5rem",
    margin: "20px 0",
    color: theme.palette.primary.gray,
    padding: 10,
    "&:focus": {
      border: `2px solid ${theme.palette.primary.main} `,
    },
    "&::placeholder": {
      color: theme.palette.primary.gray,
      fontWeight: "bold",
    },
  },

  first: {
    border: `1px solid ${theme.palette.primary.lightgray} `,
    minHeight: "10vh",
    display: "flex",
    flexWrap: "wrap",
    // alignItems:'center',
    padding: 10,
    justifyContent: "space-between",
  },

  label: {
    fontSize: 13,
    color: theme.palette.primary.gray,
  },
  labellt: {
    fontSize: 13,
    color: theme.palette.primary.label,
  },
  left: {
    display: "flex",
    width: "40%",
    minHeight: "75vh",
    justifyContent: "space-between",
    flexDirection: "column",
  },

  paper: {
    width: "40%",
    height: "10vh",
    border: "1px solid #eee",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 20,
    color: theme.palette.primary.gray,
  },

  form: {
    minHeight: "75vh",
    width: "55vw",
    marginLeft: "2vw",
    padding: "2rem",
    display: "flex",
    // flexDirection:'column',
    justifyContent: "space-between",
  },
});

export default withStyles(styles)(Shipping);
