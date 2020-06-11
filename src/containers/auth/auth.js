import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Navbar from "../../components/general/navbar";
import Grid from "@material-ui/core/Grid";
import LoginDialog from "../../components/auth/loginDialog";
import SignUpDialog from "../../components/auth/signUpDialog";
import CreateStoreDialog from "../../components/auth/createStoreDialog";
import { FormDialogContext } from "../../contexts/FormDialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { withRouter } from "react-router-dom";
import AuthMobile from "./authMobile";

const Homepage = ({ classes, login, signUp, createStore, history }) => {
  const [display, setDisplay] = useState(false);
  const mobileSize = useMediaQuery("( max-width:650px )");

  return (
    <React.Fragment>
      {mobileSize ? (
        <AuthMobile />
      ) : (
        <FormDialogContext.Provider
          value={{
            display,
            toggleFormDisplay: () => setDisplay(!display),
          }}
        >
          <Typography component="div" className={classes.home}>
            <Navbar />
            <Grid
              container
              className={classes.grid}
              style={{ width: "100vw", height: "90vh" }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                lg={5}
                style={{
                  minHeight: "50vh",
                  display: "flex",
                  marginLeft: "8vw",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                component="div"
              >
                <Typography variant="h3" style={{ color: "white" }}>
                  Sell online with ecom
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: "white", marginTop: 10 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  volutpat lorem vel aliquet viverra.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                lg={5}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  background: "#ffc845",
                  paddingBottom: "5vh",
                }}
                component="div"
              >
                <img
                  src="https://image.freepik.com/free-vector/flat-store-facade-with-awning_23-2147542588.jpg"
                  alt="img"
                  style={{
                    height: "70vh",
                  }}
                />
              </Grid>

              {login && <LoginDialog />}

              {signUp && <SignUpDialog />}

              {history.location.pathname === "/createStore" && (
                <CreateStoreDialog />
              )}
            </Grid>
          </Typography>
        </FormDialogContext.Provider>
      )}
    </React.Fragment>
  );
};

const styles = (theme) => ({
  home: {
    width: "100vw",
    minHeight: "100vh",
    background: theme.palette.primary.main,
  },
  grid: {
    background: theme.palette.primary.main,
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    background: theme.palette.primary.main,
    justifyContent: "center",
    maxHeight: "90vh",
    width: "50vw",
    textAlign: "start",
  },
});

export default withRouter(withStyles(styles)(Homepage));
