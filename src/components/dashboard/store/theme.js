import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { FaPlus, FaMobileAlt } from "react-icons/fa";
import Button from "../../general/button";
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
  "https://d85wutc1n854v.cloudfront.net/live/products/icons/WB0CS9DSM.jpg?v=1.0",
];

const Theme = ({ classes }) => {
  return (
    <Grid lg={9} className={classes.grid}>
      <Paper className={classes.form}>
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
              style={{ height: "3.5rem", width: "3.5rem", background: "#fff" }}
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

        <Grid
          style={{ display: "flex", flexWrap: "wrap", marginBottom: "5vh" }}
        >
          {links.map((i, k) => (
            <Card
              key={k}
              style={{
                width: "40%",
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
        </Grid>

        <Button>Save Changes</Button>
      </Paper>
    </Grid>
  );
};

const styles = (theme) => ({
  left: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    color: theme.palette.primary.lightgray,
    fontSize: 18,
  },
  grid: {},
  logoTxt: {
    color: theme.palette.primary.gray,
  },
  preferred: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  form: {
    minHeight: "75vh",
    width: "55vw",
    marginLeft: "2vw",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
  iconBtn: {},
});

export default withStyles(styles)(Theme);
