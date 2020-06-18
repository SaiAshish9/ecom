import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Btn from "../../../general/button";
import MNavbar from "../../../general/mnavbar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";

const EditDetails = ({ classes, history }) => {
  return (
    <Fragment>
      <MNavbar title="STORE DETAILS" skip link="/dashboard/store/details" />
      <Box style={{ padding: "1.5rem", marginBottom: "10vh" }}>
        <Typography className={classes.Typography}>ABOUT US</Typography>
        <textarea className={classes.input} rows={7} />
        <Typography className={classes.Typography}>STORE POLICIES</Typography>
        <textarea className={classes.input} rows={7} />
        <Typography className={classes.Typography}>
          AVG PREPARATION OF ORDER
        </Typography>
        <ButtonGroup variant="contained" style={{ width: "11rem" }}>
          <Button className={classes.btnGrp}>Days</Button>
          <Button className={classes.btnGrp}>Hours</Button>
          <Button className={classes.btnGrp}>Mins</Button>
        </ButtonGroup>

        <Typography style={{ marginTop: "5vh" }} className={classes.Typography}>
          INSTAGRAM
        </Typography>

        <input type="text" className={classes.txtInput} />

        <Typography className={classes.Typography}>TWITTER</Typography>

        <input type="tel" className={classes.txtInput} />

        <Typography className={classes.Typography}>WHATSAPP</Typography>

        <input
          type="tel"
          placeholder="+91 123456789"
          className={classes.txtInput}
        />

        <Typography className={classes.Typography}>SNAPCHAT</Typography>

        <input
          type="text"
          placeholder="+91 123456789"
          className={classes.txtInput}
          rows={7}
        />
        <Box
          style={{
            margin: "20px 0",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label
            className={classes.label}
            style={{ fontSize: 12, color: "#9c9ea3" }}
          >
            Pickup Order[Optional]
          </label>
          <Switch checked={true} color="primary" />
        </Box>

        <Box
          style={{
            margin: "2px 0",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label
            className={classes.label}
            style={{ fontSize: 12, color: "#9c9ea3" }}
          >
            Minimum Order Amount[Optional]
          </label>
          <Switch checked={false} color="primary" />
        </Box>
        <input
          type="text"
          placeholder="Enter Amount"
          className={classes.txtInput}
          rows={7}
        />
        <Btn
          style={{
            margin: "20px 0",
            width: "100%",
            height: "3rem",
          }}
        >
          SAVE DETAILS
        </Btn>
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
  input: {
    border: `1px solid ${theme.palette.primary.main} `,
    borderRadius: 7,
    width: "85vw",
    color: theme.palette.primary.gray,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main} `,
    },
  },
  Typography: {
    color: theme.palette.primary.lightgray,
    fontSize: 14,
    margin: "10px 0",
  },
  btnGrp: {
    background: "#fff",
    textTransform: "none",
    border: `0.08rem solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.gray,
    "&:hover": {
      background: "white",
    },
  },
  txtInput: {
    border: `1px solid ${theme.palette.primary.main} `,
    height: "2.5rem",
    margin: "5px 0",
    width: "85vw",
    color: theme.palette.primary.gray,
    padding: 10,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main} `,
    },
    "&::placeholder": {
      color: theme.palette.primary.lightgray,
      fontWeight: "bold",
    },
  },
});

export default withRouter(withStyles(styles)(EditDetails));
