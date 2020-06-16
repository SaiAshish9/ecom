import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import TextField from "../../components/general/input";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/general/button";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "./auth";

const SignUp = ({ classes, history }) => {
  const mobileSize = useMediaQuery("( max-width:650px )");

  return (
    <React.Fragment>
      {mobileSize ? (
        <Paper elevation={1} className={classes.paper}>
          <IconButton
            onClick={() => {
              history.push("/");
            }}
            style={{
              position: "relative",
              right: "30vw",
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <Typography
            style={{
              position: "relative",
              right: "7vw",
            }}
          >
            SignUp
          </Typography>
        </Paper>
      ) : (
        <Dialog signUp={true} />
      )}

      {mobileSize && (
        <Grid
          style={{
            padding: "20px 15vw",
            // minHeight:'90vh',
            display: "flex",
            flexDirection: "column",
            // alignItems:'center',
            justifyContent: "space-around",
          }}
        >
          <Typography>Personal Detail</Typography>

          <Grid className={classes.textField}>
            <TextField type="text" label="NAME" placeholder="Azaa" />
          </Grid>

          <Grid className={classes.textField}>
            <TextField
              type="tel"
              label="PHONE NUMBER"
              style={{
                width: "70vw",
              }}
              placeholder=""
            />
          </Grid>

          <Grid className={classes.textField}>
            <TextField
              type="email"
              label="EMAIL"
              style={{
                width: "70vw",
              }}
              placeholder="Azaa@gmail.com"
            />
          </Grid>

          <Grid className={classes.textField}>
            <TextField
              type="password"
              icon={true}
              label="PASSWORD"
              iconStyle={{
                position: "relative",
                left: "80%",
                bottom: "2.7rem",
              }}
              style={{
                width: "70vw",
              }}
            />
          </Grid>

          <Grid className={classes.textField}>
            <TextField
              type="text"
              label="DISCOUNT CODE"
              style={{
                width: "70vw",
              }}
            />
          </Grid>

          <Typography
            style={{
              marginTop: "30px",
            }}
          >
            Store Detail
          </Typography>

          <Grid className={classes.textField}>
            <TextField
              type="text"
              label="STORE NAME"
              style={{
                width: "70vw",
              }}
              placeholder="Azaa"
            />
          </Grid>

          <Grid className={classes.textField}>
            <TextField
              type="text"
              label="STORE NAME IN ARABIC"
              style={{
                width: "70vw",
              }}
              placeholder=""
            />
          </Grid>

          <Grid className={classes.textField}>
            <TextField
              type="text"
              select={true}
              label="CATEGORY"
              style={{
                width: "70vw",
              }}
            />
          </Grid>

          <Typography style={{ fontSize: 12 }}>
            <Checkbox checked={true} />I agree with the Terms & Conditions of
            <span
              style={{ fontSize: 12, paddingLeft: 10 }}
              className={classes.primary}
            >
              ecom
            </span>
          </Typography>

          <Button
            onClick={() => {
              history.push("/verification");
            }}
            style={{
              width: "100%",
              position: "relative",
              right: "10px",
            }}
          >
            CREATE NOW
          </Button>
          <Typography style={{ fontSize: 12, textAlign: "center" }}>
            Already have an account?
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                history.push("/login");
              }}
              style={{ cursor: "pointer", fontSize: 14, paddingLeft: 10 }}
              className={classes.primary}
            >
              LOGIN
            </a>
          </Typography>
        </Grid>
      )}
    </React.Fragment>
  );
};

const styles = (theme) => ({
  primary: {
    color: theme.palette.primary.main,
  },

  paper: {
    width: "100%",
    height: "8vh",
    display: "flex",
    padding: "2vh 2vw",
    alignItems: "center",
    justifyContent: "center",
    // borderBottom:`1px solid ${theme.palette.primary.lightgray}`
  },
  textField: {
    width: "70vw",
    marginTop: "20px",
  },
});

export default withRouter(withStyles(styles)(SignUp));
