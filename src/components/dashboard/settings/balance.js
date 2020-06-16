import React, { useState} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "../../general/button";
import TextField from "@material-ui/core/TextField";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import Divider from "@material-ui/core/Divider";

const EcomBalance = ({ classes, history }) => {
  const data1 = [
    {
      title: "Money transfer to your account",
      qty: "-200KWD",
    },
    {
      title: "Received from Order #123",
      qty: "+200KWD",
      desc: "-20 Fills ECOM",
    },
    {
      title: "Money sent to John Decrus ",
      qty: "-200KWD",
    },
    {
      title: "Money sent to John Decrus ",
      qty: "-200KWD",
    },
    {
      title: "Money transfer to your account",
      qty: "-200KWD",
    },
    {
      title: "Received from Order #123",
      qty: "+200KWD",
    },
  ];

  const [data, setData] = useState(data1);

  const sort = () => {
    // e.preventDefault()
    // data1.sort(x=>parseInt(x.qty.split('K')[0])?-1:1)
    setData(data1.sort((x) => (parseInt(x.qty.split("K")[0]) ? -1 : 1)));
  };

  return (
    <Grid lg={9} className={classes.grid}>
      <Grid
        style={{
          alignItems: "center",
          display: "flex",
          height: "7vh",
          marginBottom: "3vh",
        }}
      >
        <Paper
          elevation={0}
          style={{
            justifyContent: "space-between",
            padding: 10,
            marginLeft: "25%",
            width: "30vw",
            height: "6vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <label className={classes.label}>FROM</label>

          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <label className={classes.label}>TO</label>

          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Paper>

        <Button
          style={{
            borderRadius: "0px",
            fontSize: 12,
          }}
        >
          Download PDF
        </Button>
      </Grid>

      <Paper className={classes.form}>
        <Grid>
          <Grid style={{ margin: "1.5rem 2rem" }}>
            <Typography className={classes.label}>Current Balance</Typography>
            <Typography variant="h5">6,324 KWD</Typography>
          </Grid>

          <Grid className={classes.tag}>
            <Typography className={classes.dark}>All Transactions</Typography>

            <Typography
              style={{ display: "flex", alignItems: "center" }}
              className={classes.dark}
            >
              <IconButton onClick={sort}>
                <ImportExportIcon style={{ color: "#76b9d0" }} />
              </IconButton>
              Sort By
            </Typography>
          </Grid>

          {data.map((i, k) => (
            <Grid key={k}>
              <Grid
                style={{
                  display: "flex",
                  padding: "2rem 2rem 1rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Grid>
                  <label className={classes.dark}>{i.title}</label>
                  <br />
                  <label className={classes.label} style={{ fontSize: 10 }}>
                    04:40 pm - 17 June,2019
                  </label>
                </Grid>
                <Grid>
                  <Typography
                    className={
                      i.qty.includes("+") ? classes.green : classes.red
                    }
                  >
                    {i.qty}
                  </Typography>
                  <label className={classes.label}>{i.desc}</label>
                </Grid>
              </Grid>
              <Divider style={{ margin: "0px 2rem" }} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  tag: {
    background: theme.palette.primary.dashboardBackground,
    width: "100%",
    height: "7vh",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  green: {
    color: theme.palette.primary.labelGreen,
  },

  red: {
    color: "#ca3a3a",
  },

  textField: {
    color: theme.palette.primary.gray,
    // margin:'0px 20px',
    cursor: "pointer",
  },
  paper: {
    width: "40%",
    height: "10vh",
    border: "1px solid #eee",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // marginRight:20,
    color: theme.palette.primary.gray,
  },

  label: {
    fontSize: 12,
    color: theme.palette.primary.lightgray,
  },

  dark: {
    fontSize: 12,
    color: theme.palette.primary.gray,
  },
  form: {
    minHeight: "75vh",
    width: "55vw",
    marginLeft: "2vw",
    // padding:'2rem',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default withRouter(withStyles(styles)(EcomBalance));
