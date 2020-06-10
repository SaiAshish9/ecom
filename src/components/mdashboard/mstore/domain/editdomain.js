import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Button from "../../../general/button";
import Divider from "@material-ui/core/divider";

const DomainDesc = ({ classes, history }) => {
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
        <Typography style={{ marginRight: "27vw" }} className={classes.dark}>
          PRIMARY DOMAIN
        </Typography>
      </Box>

      <Box style={{ padding: "1.5rem" }}>
        <Paper
          onClick={() => history.push("/dashboard/store/domain/edit")}
          className={classes.paper}
        >
          <Grid className={classes.grid1}>
            <Typography style={{ fontSize: 20 }} className={classes.logoTxt}>
              Primary Domain
            </Typography>
            <Chip className={classes.chip} color="primary" label="Connected" />
          </Grid>
          <Grid className={classes.grid2}>
            <Grid className={classes.grid2}>
              <Typography className={classes.light}>DOMAIN NAME</Typography>
              <Typography className={classes.dark}>
                salim-store.ecom.com
              </Typography>
            </Grid>
          </Grid>
          <Grid className={classes.grid3}>
            <Grid>
              <Typography className={classes.light}>RENEWED ON</Typography>
              <Typography className={classes.dark}>Januray 7, 2020</Typography>
            </Grid>
            <Grid>
              <Typography className={classes.light}>PROVIDER</Typography>
              <Typography className={classes.dark}>Ecom</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box display="flex" style={{ paddingLeft: "1.5rem" }}>
        <Box>
          <Typography style={{ margin: "1rem" }} className={classes.label}>
            DNS
          </Typography>
        </Box>

        <Box>
          <Typography style={{ margin: "1rem" }} className={classes.dark}>
            Manage
          </Typography>
          <Box className={classes.highlight}></Box>
        </Box>
      </Box>

      <Divider />

      <Box
        display="flex"
        flexDirection="column"
        style={{ padding: "1.5rem", marginBottom: "10vh" }}
      >
        <Typography
          style={{ fontSize: 14, textTransform: "uppercase" }}
          className={classes.light}
        >
          Name
        </Typography>

        <Typography
          style={{ fontSize: 14, marginBottom: "2rem" }}
          className={classes.dark}
        >
          John Doe
        </Typography>

        <Typography
          style={{ fontSize: 14, textTransform: "uppercase" }}
          className={classes.light}
        >
          address
        </Typography>

        <Typography
          style={{ fontSize: 14, marginBottom: "2rem" }}
          className={classes.dark}
        >
          19 Koss Landing
        </Typography>

        <Typography
          style={{ fontSize: 14, textTransform: "uppercase" }}
          className={classes.light}
        >
          contact number
        </Typography>

        <Typography
          style={{ fontSize: 14, marginBottom: "2rem" }}
          className={classes.dark}
        >
          +965 8785844
        </Typography>

        <Typography
          style={{ fontSize: 14, textTransform: "uppercase" }}
          className={classes.light}
        >
          Email
        </Typography>

        <Typography
          style={{ fontSize: 14, marginBottom: "2rem" }}
          className={classes.dark}
        >
          johndoe@gmail.com
        </Typography>

        <Button
          style={{
            margin: 0,
            width: "100%",
            height: "3rem",
            margin: "20px 0",
          }}
        >
          EDIT DETAILS
        </Button>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  nav: {
    height: "10vh",
    padding: 20,
    borderBottom: `1px solid ${theme.palette.primary.lightgray} `,
  },
  highlight: {
    borderBottom: `4px solid ${theme.palette.primary.main}`,
    width: "60%",
    marginLeft: "12%",
  },
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  label: {
    color: theme.palette.primary.lightgray,
  },
  dark: {
    color: theme.palette.primary.gray,
  },
  chip: {
    color: theme.palette.primary.green,
    background: theme.palette.primary.lightgreen,
  },
  grid3: {
    display: "flex",
    justifyContent: "space-between",
  },
  grid1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  paper: {
    width: "100%",
    height: "28vh",
    marginTop: "1.5rem",
    border: "1px solid #eee",
    padding: 20,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default withRouter(withStyles(styles)(DomainDesc));
