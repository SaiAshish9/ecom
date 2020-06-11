import React, { useState, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { FormDialogContext } from "../../contexts/FormDialog";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import ClearIcon from "@material-ui/icons/Clear";
import Typography from "@material-ui/core/Typography";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { withRouter, Redirect } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const FormDialog = ({ classes, width, history }) => {
  const mediaSize = useMediaQuery("(max-width:650px)");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (isWidthDown("xs", width)) {
      setSmall(true);
    } else {
      setSmall(false);
    }
  }, [width]);

  const { display, toggleFormDisplay } = useContext(FormDialogContext);

  return (
    <React.Fragment>
      {mediaSize ? (
        <Redirect to="/" />
      ) : (
        <Backdrop
          className={classes.backdrop}
          fullScreen={small && true}
          maxWidth="sm"
          open={!display}
        >
          <Container className={classes.form}>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "4vh",
                marginRight: "2rem",
              }}
            >
              Create Store
            </Typography>

            <Divider />

            <Box
              display="flex"
              justifyContent="flex-end"
              style={{
                position: "relative",
                left: "2.7vw",
                bottom: "16vh",
              }}
            >
              <IconButton
                className={classes.clear}
                //  onClick={toggleFormDisplay}
                onClick={() => {
                  history.push("/");
                }}
                color="primary"
              >
                <ClearIcon style={{ color: "#515151" }} />
              </IconButton>
            </Box>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(email, password);
                setEmail("");
                setPassword("");
                history.push("/home");
                toggleFormDisplay();
              }}
            >
              <Box
                style={{ marginBottom: "7vh" }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography
                  style={{
                    textTransform: "uppercase",
                    color: "#999",
                    marginLeft: "2vw",
                  }}
                >
                  <Typography className={classes.label} component="p">
                    NAME
                  </Typography>
                  <br />
                  <input
                    type="text"
                    className={classes.input}
                    //  value={email}
                    //  onChange={e=>setEmail(e.target.value)}
                    style={{
                      width: "90%",
                      height: "6vh",
                      borderRadius: 7,
                      border: "2px solid #eee",
                      marginBottom: "20px",
                    }}
                  />
                </Typography>

                <Typography
                  component="div"
                  style={{
                    textTransform: "uppercase",
                    color: "#999",
                    marginLeft: "2vw",
                  }}
                >
                  <Typography className={classes.label} component="p">
                    NAME IN ARABIC
                  </Typography>
                  <br />
                  <input
                    type="text"
                    className={classes.input}
                    //  value={email}
                    //  onChange={e=>setEmail(e.target.value)}
                    style={{
                      width: "90%",
                      height: "6vh",
                      borderRadius: 7,
                      border: "2px solid #eee",
                      marginBottom: "20px",
                    }}
                  />
                </Typography>

                <Typography
                  component="div"
                  style={{
                    textTransform: "uppercase",
                    color: "#999",
                    marginLeft: "2vw",
                  }}
                >
                  <Typography className={classes.label} component="p">
                    CATEGORY
                  </Typography>
                  <br />
                  <input
                    type="text"
                    className={classes.input}
                    //  value={email}
                    //  onChange={e=>setEmail(e.target.value)}
                    style={{
                      width: "90%",
                      height: "6vh",
                      borderRadius: 7,
                      border: "2px solid #eee",
                      marginBottom: "10px",
                    }}
                  />
                </Typography>
              </Box>

              <Button
                type="submit"
                className={classes.btn}
                variant="contained"
                color="primary"
                disableElevation
              >
                CREATE STORE
              </Button>

              <Typography
                component="div"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px 0",
                }}
              >
                <Typography
                  as="h6"
                  style={{ color: "#333", fontWeight: "bold" }}
                >
                  Already have an account?{" "}
                </Typography>

                <Typography
                  as="h6"
                  color="primary"
                  onClick={() => {
                    history.push("/login");
                  }}
                  style={{
                    fontWeight: "bold",
                    marginLeft: 5,
                    cursor: "pointer",
                  }}
                >
                  Login
                </Typography>
              </Typography>
            </form>
          </Container>
        </Backdrop>
      )}
    </React.Fragment>
  );
};

const styles = (theme) => ({
  form: {
    width: "28vw",
    height: "89vh",
    // minWidth:'27rem',
    background: "white",
    margin: "3vh",
    display: "flex",
    flexDirection: "column",
    // alignItems:'center',
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "3rem",
      height: "70vh",
      marginTop: "10vh",
    },
  },

  input: {
    outline: "none",
    color: "#999",
    [theme.breakpoints.down("sm")]: {
      width: "70% !important",
      margin: "10px 20px !important",
    },
  },
  forgot: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center !important",
    },
  },
  label: {
    // marginLeft:'20px'
  },
  clear: {
    color: "#515151",
    background: "#eee",
    padding: 5,
    position: "relative",
    zIndex: 1,
    "&:hover": {
      background: "#eee",
    },
    [theme.breakpoints.down("xs")]: {
      // position:'absolute',
      // right:'6vw'
    },
  },
  btn: {
    width: "70%",
    height: "6.5vh",
    margin: "7px 12%",
    borderRadius: 20,
    fontWeight: "bold",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

export default withRouter(withWidth()(withStyles(styles)(FormDialog)));
