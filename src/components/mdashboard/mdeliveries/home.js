import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import MNavbar from "../../general/mnavbar";


const Customers = ({ classes, history }) => {
  return (
    <React.Fragment>
     <MNavbar title="Deliveries" link="/dashboard"/>
      <Box
        display="flex"
        flexDirection="column"
        style={{
          padding: "1.5rem ",
          marginBottom: "10vh",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          style={{
            margin: "10px 0",
          }}
        >
          <Paper elevation={0} className={classes.pink}>
            <Typography
              style={{
                fontSize: 11,
                margin: "2px 0",
              }}
              className={classes.light}
            >
              Local Deliveries
            </Typography>
            <Typography style={{ fontSize: 20 }} className={classes.dark}>
              324
            </Typography>
          </Paper>

          <Paper elevation={0} className={classes.pink1}>
            <Typography
              style={{
                fontSize: 11,
                margin: "2px 0",
              }}
              className={classes.light}
            >
              International Shippings
            </Typography>
            <Typography style={{ fontSize: 20 }} className={classes.dark}>
              2344
            </Typography>
          </Paper>
        </Box>

        <Box
          style={{ margin: "20px 0" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            style={{
              fontSize: 12,
            }}
            className={classes.light}
          >
            All Customers
          </Typography>

          <Box display="flex" alignItems="center">
            <Typography
              style={{
                fontSize: 12,
              }}
              className={classes.light}
            >
              Total KWD
            </Typography>

            <Typography
              style={{
                fontSize: 14,
                margin: "0 5px",
              }}
              className={classes.dark}
            >
              3493
            </Typography>
          </Box>
        </Box>

        {[...Array(4).keys()].map((i, k) => (
          <Box>
            <Paper elevation={1} key={k} className={classes.paper}>
              <Box>
                <Box display="flex" alignItems="center">
                  <Typography style={{ fontSize: 14 }} className={classes.dark}>
                    #10352
                  </Typography>
                  <Typography
                    style={{ fontSize: 12, marginLeft: 10 }}
                    className={classes.light}
                  >
                    KWD 39 .0
                  </Typography>
                </Box>
                <Typography style={{ marginTop: 10 }} className={classes.dark}>
                  99- Beads
                </Typography>
                <Typography
                  style={{ marginTop: 5, fontSize: 12 }}
                  className={classes.light}
                >
                  Ahmed Salem
                  <span style={{ margin:"0 2px"}}>&#x25CF;</span>
                  Jun 04,2019
                </Typography>
              </Box>

              <Typography className={classes.orange}>
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdQ4YVcPDZKQwChl8loPLB9ZJ_DzH-sfAmACfmT34gSpOCT101&usqp=CAU"
                  style={{
                    height: "10vh",
                    width: "4rem",
                  }}
                  variant="rounded"
                />
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
  },
  dark: {
    color: theme.palette.primary.gray,
    fontSize: 14,
  },
  orange: {
    color: theme.palette.primary.orange,
    fontSize: 12,
  },
  paper: {
    padding: "10px 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "15vh",
    margin: "5px 0",
    // border:`2px solid #f4f4f4`
  },
  pink: {
    height: "13vh",
    width: "48%",
    background: theme.palette.primary.lightOrange,
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "20px",
  },
  pink1: {
    height: "13vh",
    width: "48%",
    background: theme.palette.primary.dashboardBackground,
    border: `1px solid ${theme.palette.primary.lightgray}`,
    padding: "10px",
    display:"flex",
    flexDirection: "column",
    justifyContent: "center"
  },
});

export default withRouter(withStyles(styles)(Customers));
