import React from "react";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/general/button";
import Logo from "../../assets/bag.png";
import Home from "../../assets/home.png";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { RiLogoutBoxRLine } from "react-icons/ri";
import IconButton from "@material-ui/core/IconButton";
import { Zoom} from "@material-ui/core";

const Homepage = ({ classes, history }) => {
  return (
    <Grid>
      <Paper className={classes.nav}>
        <Box display="flex" alignItems="center">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "3rem",
            }}
          />
          <Typography className={classes.dark}>ecom</Typography>
        </Box>

        <IconButton
          onClick={() => {
            history.push("/");
          }}
        >
          <RiLogoutBoxRLine />
        </IconButton>
      </Paper>

      <Box
        style={{
          width: "100%",
          height: "91vh",
        }}
        display="flex"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          style={{
            width: "60%",
            height: "91vh",
            padding: "10rem",
          }}
          flexDirection="column"
          alignItems="flex-start"
          // justifyContent="center"
        >
          <Box style={{ width: "80%" }}>
            <Typography component="h3" variant="h4">
              Congratulations on setting up your bussiness on ecom
            </Typography>
          </Box>

          <Box style={{ width: "80%" }}>
            <Typography className={classes.label}>
              Go ahead and explore your customer's journey.
            </Typography>
          </Box>

          <Button
            onClick={() => {
              history.push("/dashboard");
            }}
            style={{
              textTransform: "uppercase",
              width: "15rem",
              height: "3rem",
            }}
          >
            Continue to dashboard
          </Button>
        </Box>

        <Box
          //  style={{width:'50%',height:'91vh'}}
          display="flex"
          alignContent="flex-start"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <Zoom
            in={true}
            style={{ width: "80%", marginRight: "5rem", marginBottom: "3rem" }}
          >
            <img alt="img" style={{ width: "80%" }} src={Home} />
          </Zoom>
        </Box>
      </Box>
    </Grid>
  );
};

const styles = (theme) => ({
  dark: {
    color: theme.palette.primary.gray,
  },
  nav: {
    height: "9vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
  },
  label: {
    color: theme.palette.primary.lightgray,
    margin: "20px 0",
  },
});

export default withRouter(withStyles(styles)(Homepage));
