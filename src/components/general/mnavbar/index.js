import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";

const Navbar = ({ link,classes, history,title,skip,icon,iconLink }) => {
  return (
    <Fragment>
      <Box
        display="flex"
        className={classes.nav}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          style={{
            position: "absolute",
            left: "5vw",
          }}
          onClick={() => {
            history.push(link);
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography className={classes.dark}>{title}</Typography>
        {skip && (
          <IconButton
            style={{
              position: "absolute",
              right: "5vw",
              fontSize: 16,
            }}
            color="primary"
          >
            Skip
          </IconButton>
        )}
        {icon && (
          <IconButton
           onClick={()=>{
               history.push(iconLink)
           }}
           className={classes.dark}
            style={{
              position: "absolute",
              right: "5vw",
              fontSize: 16,
            }}
          >
            {icon}
          </IconButton>
        )}
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
  dark: {
    color: theme.palette.primary.gray,
  },
});

export default withRouter(withStyles(styles)(Navbar));
