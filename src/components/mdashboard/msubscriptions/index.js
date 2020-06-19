import React,{ Fragment,useState} from 'react'
import Box from "@material-ui/core/Box";
import MNavbar from "../../general/mnavbar"
import withStyles from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "../../general/button";


const Subscriptions = ({ classes}) => {
     const [left, setLeft] = useState(true);
    return (
      <Fragment>
        <MNavbar title="SUBSCRIPTION" link="/dashboard/store" />
        <Box style={{ padding: "1.5rem", marginBottom: "10vh" }}>
          <Grid style={{ display: "flex", alignItems: "center" }}>
            <Grid
              style={{ marginLeft: 15, display: "flex", alignItems: "center" }}
            >
              <Typography
                className={left ? classes.dark : classes.light}
                style={{ margin: 0 }}
              >
                Pay monthly
              </Typography>

              <Switch
                checked={!left}
                onClick={() => setLeft(!left)}
                color="primary"
              />

              <Typography
                className={!left ? classes.dark : classes.light}
                style={{ margin: 0 }}
              >
                Pay Annually
              </Typography>
            </Grid>
          </Grid>

          <Grid
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              flexWrap: "wrap",
              marginBottom: "5vh",
            }}
          >
            <Paper className={classes.paper}>
              <Grid className={classes.grid1}>
                <Typography className={classes.light}>1 user</Typography>
                <Typography className={classes.light}>1 store</Typography>
                <Typography className={classes.dark}>9 KD/Month</Typography>
                <Typography
                  className={classes.light}
                  style={{ fontSize: 12, textAlign: "center" }}
                >
                  All prices are excl. VAT.
                </Typography>
                <Button
                  style={{
                    width: "80%",
                    height: "2.5rem",
                    position: "relative",
                    top: "4vh",
                  }}
                >
                  Select
                </Button>
              </Grid>
            </Paper>

            <Paper className={classes.paper}>
              <Grid className={classes.grid1}>
                <Typography className={classes.light}>5 users</Typography>
                <Typography className={classes.light}>5 stores</Typography>
                <Typography className={classes.dark}>19 KD/Month</Typography>
                <Typography
                  className={classes.light}
                  style={{ fontSize: 12, textAlign: "center" }}
                >
                  All prices are excl. VAT.
                </Typography>
                <Button
                  style={{
                    width: "80%",
                    height: "2.5rem",
                    position: "relative",
                    top: "4vh",
                  }}
                >
                  Select
                </Button>
              </Grid>
            </Paper>

            <Paper className={classes.paper}>
              <Grid className={classes.grid1}>
                <Typography className={classes.light}>15 users</Typography>
                <Typography className={classes.light}>15 stores</Typography>
                <Typography className={classes.dark}>19 KD/Month</Typography>
                <Typography
                  className={classes.light}
                  style={{ fontSize: 12, textAlign: "center" }}
                >
                  All prices are excl. VAT.
                </Typography>
                <Button
                  style={{
                    width: "80%",
                    height: "2.5rem",
                    position: "relative",
                    top: "4vh",
                  }}
                >
                  Select
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Box>
      </Fragment>
    );
}

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 17,
    marginTop: 10,
  },
  dark: {
    color: "#000",
    fontSize: 17,
    marginTop: 5,
  },
  grid1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  paper: {
    width: "45%",
    border: "1px solid #eee",
    paddingTop: 10,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 10,
    marginTop:40
  },
});

export default withStyles(styles)(Subscriptions)
