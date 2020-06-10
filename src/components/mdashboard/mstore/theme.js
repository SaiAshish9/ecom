import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import { FaPlus, FaMobileAlt } from "react-icons/fa";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import { GoCheck } from "react-icons/go";
import { AiOutlineLaptop } from "react-icons/ai";


const links = [
  "https://d85wutc1n854v.cloudfront.net/live/products/icons/WB0CS9DSM.jpg?v=1.0",
  "https://themewagon.com/wp-content/uploads/2018/10/furn.jpg",
  "https://d85wutc1n854v.cloudfront.net/live/products/icons/WB0CS9DSM.jpg?v=1.0"
];


const Theme = ({ classes, history }) => {
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

        <Typography className={classes.dark}>STORE THEME</Typography>

        <IconButton color="primary" style={{ fontSize: 16 }}>
          Skip
        </IconButton>
      </Box>

      <Box style={{ padding: "2rem",marginBottom:'10vh' }}>
        <Grid style={{ display: "flex", alignItems: "center" }}>
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={<FaPlus className={classes.plus} />}
          >
            <Avatar
              style={{
                height: "3.5rem",
                width: "3.5rem",
                background: "#fff",
              }}
            >
              <IconButton style={{ background: "#dae1ee", margin: "0 10px" }}>
                <FingerprintIcon
                  style={{ color: "#565a61", cursor: "pointer" }}
                />
              </IconButton>
            </Avatar>
          </Badge>
          <Grid style={{ marginLeft: 15 }}>
            <Typography className={classes.logoTxt}>Store Logo</Typography>
            <Typography className={classes.preferred}>
              Preferred logo size 150px*100px
            </Typography>
          </Grid>
        </Grid>

        {links.map((i, k) => (
          <Card
            key={k}
            style={{
              width: "100%",
              marginRight: "2rem",
              marginTop: "2rem",
            }}
          >
            <CardActionArea
              style={{
                background: "black",
              }}
            >
              <CardMedia
                style={{
                  opacity: k == 0 && 0.4,
                }}
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={i}
                title="Contemplative Reptile"
              />

              <GoCheck
                className={k === 0 && classes.plus1}
                style={{ display: k !== 0 && "none" }}
              />
            </CardActionArea>

            {k === 2 && (
              <CardContent
                style={{
                  color: "white",
                  background: "#46ac07",
                  height: "4vh",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  gutterBottom
                  style={{
                    fontSize: 12,
                    fontWeight: "lighter",
                    color: "#d5ecc7",
                  }}
                >
                  But this theme for{" "}
                </Typography>
                <Typography
                  gutterBottom
                  style={{ marginLeft: 2, fontSize: 12 }}
                >
                  {" "}
                  KWD 4.0
                </Typography>
              </CardContent>
            )}
            <CardActions>
              <Grid container alignItems="center" className={classes.left}>
                <Typography style={{ width: "70%" }}>Alpha Romoe</Typography>
                <Divider
                  style={{ height: "5vh" }}
                  orientation="vertical"
                  flexItem
                />
                <IconButton>
                  <AiOutlineLaptop className={classes.icon} />
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton>
                  <FaMobileAlt className={classes.icon} />
                </IconButton>
              </Grid>
            </CardActions>
          </Card>
        ))}
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
  logoTxt: {
    color: theme.palette.primary.gray,
  },
  preferred: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  plus: {
    height: 25,
    padding: 5,
    width: 25,
    borderRadius: "50%",
    fontSize: 10,
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.paper}`,
  },
  plus1: {
    position: "absolute",
    left: "35%",
    top: "25%",
    height: 100,
    padding: 25,
    width: 100,
    color: "white",
    borderRadius: "50%",
    fontSize: 30,
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.paper}`,
  },
});

export default withRouter(withStyles(styles)(Theme));
