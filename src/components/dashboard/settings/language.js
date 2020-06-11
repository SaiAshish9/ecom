import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { FaCheck, FaRegDotCircle } from "react-icons/fa";

const Language = ({ classes, history }) => {
  return (
    <Grid lg={9} style={{ position: "relative", left: "2vw" }}>
      <Paper className={classes.form}>
        <a
          onClick={() => window.location.reload()}
          href="#googtrans(en|en)"
          className="lang-en lang-select"
          style={{
            textDecoration: "none",
            color: "#000",
          }}
          data-lang="en"
        >
          <Grid className={classes.grid}>
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              badgeContent={
                history.location.hash === "#googtrans(en|en)" ||
                history.location.hash === "" ? (
                  <FaCheck className={classes.plus} />
                ) : (
                  <FaRegDotCircle className={classes.plus1} />
                )
              }
            >
              <Avatar
                className={classes.avatar}
                src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
              />
            </Badge>

            <Typography>ENGLISH</Typography>
          </Grid>
        </a>

        <a
          onClick={() => window.location.reload()}
          href="#googtrans(en|ar)"
          className="lang-ar lang-select"
          data-lang="ar"
          style={{
            textDecoration: "none",
            color: "#000",
          }}
        >
          <Grid className={classes.grid}>
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              badgeContent={
                history.location.hash === "#googtrans(en|ar)" ? (
                  <FaCheck className={classes.plus} />
                ) : (
                  <FaRegDotCircle className={classes.plus1} />
                )
              }
            >
              <Avatar
                className={classes.avatar}
                src="https://i.pinimg.com/originals/96/a3/13/96a31347b63886171ae1764c0d88fcf0.png"
              />
            </Badge>

            <Typography style={{ fontSize: 30 }}>عربى</Typography>
          </Grid>
        </a>
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  form: {
    height: "90vh",
    width: "55vw",
    padding: "3rem",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    margin: 20,
  },
  avatar: {
    margin: 20,
    height: "4rem",
    width: "4rem",
    border: `2px solid ${theme.palette.primary.main}`,
  },
  plus: {
    height: 25,
    padding: 5,
    width: 25,
    borderRadius: "50%",
    position: "relative",
    right: 10,
    top: 10,
    fontSize: 10,
    color: "#fff",
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.paper}`,
  },
  plus1: {
    height: 27,
    padding: 3,
    width: 27,
    borderRadius: "50%",
    position: "relative",
    right: 10,
    top: 10,
    fontSize: 30,
    background: "#fff",
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.main}`,
  },
});

export default withRouter(withStyles(styles)(Language));
