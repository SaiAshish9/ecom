import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import Btn from "../../../general/button";
import MNavbar from "../../../general/mnavbar";

const Payment = ({ classes, history }) => {
  const [checked, setChecked] = useState(false);

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) => {
      setFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Fragment>
      <MNavbar
      title="ECOM PAY"
      skip
      link="/dashboard/store/settings"
      />
      <Box style={{ padding: "1.5rem", marginBottom: "10vh" }}>
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <Paper variant="outlined" className={classes.uploadPaper}>
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Grid>
                <input
                  accept="image/*"
                  onChange={(e) => handleChange(e)}
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                />

                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>

                <Typography className={classes.upload}>Upload</Typography>
              </Grid>

              <Grid
                style={{
                  height: "12vh",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography style={{ margin: "10px 0", fontSize: 12 }}>
                  Civil ID
                </Typography>
                <Typography style={{ fontSize: 12 }}>Bussiness ID</Typography>
              </Grid>
            </Grid>
          </Paper>

          <Avatar
            src={file ? file : "https://static.toiimg.com/photo/59385796.cms"}
            variant="rounded"
            className={classes.rounded}
          ></Avatar>
        </Grid>
        <Grid className={classes.inputsCont}>
          <label className={classes.label}>ACCOUNT HOLDER NAME</label>

          <input
            type="text"
            placeholder="100- Wood Beeds"
            className={classes.txtInput}
          />

          <label className={classes.label}>BANK NAME</label>

          <input type="text" className={classes.txtInput} />

          <label className={classes.label}>IBAN NUMBER</label>

          <input
            type="text"
            placeholder="Description about the shop..."
            className={classes.txtInput}
          />

          <label className={classes.label}>ACCOUNT NUMBER</label>

          <input
            type="text"
            placeholder="+91 123456789"
            className={classes.txtInput}
            rows={7}
          />
          <Grid style={{ display: "flex", alignItems: "center" }}>
            {checked ? (
              <IconButton
                className={classes.iconBtn}
                onClick={() => setChecked(false)}
              >
                <CheckIcon style={{ fontSize: 12, fontWeight: "bold" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => setChecked(true)}
                className={classes.iconBtn1}
              ></IconButton>
            )}

            <p className={classes.label} style={{ fontSize: 12 }}>
              I agree with
              <span className={classes.span} style={{ fontSize: 15 }}>
                Terms & Conditions
              </span>
              of Ecom.
            </p>
          </Grid>
        </Grid>

        <Btn
          onClick={() => {
            history.push("/dashboard/store/payment/edit");
          }}
          style={{
            width: "100%",
            margin: "10px 0",
            height: "3rem",
          }}
        >
          CREATE ECOMPAY ACCOUNT
        </Btn>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  dark: {
    color: theme.palette.primary.gray,
  },
  span: {
    color: theme.palette.primary.gray,
    margin: "0 5px",
  },
  iconBtn: {
    color: "#000",
    padding: 5,
    marginRight: 10,
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main,
      color: "#000",
    },
  },

  iconBtn1: {
    padding: 9,
    marginRight: 10,

    border: `2px solid ${theme.palette.primary.main}`,
    "&:hover": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
  rounded: {
    width: "30%",
    height: "14vh",
    marginRight: 5,
  },

  upload: {
    color: theme.palette.primary.gray,
  },

  uploadPaper: {
    height: "14vh",
    width: "65%",
    background: "#f8f9fb",
  },

  txtInput: {
    border: `1px solid ${theme.palette.primary.main} `,
    height: "2.5rem",
    color: theme.palette.primary.gray,
    margin: "15px 0",
    padding: 10,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main} `,
    },
    "&::placeholder": {
      color: theme.palette.primary.gray,
      fontWeight: "bold",
    },
  },
  label: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },
  inputsCont: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    margin: "20px 0",
  },
});

export default withRouter(withStyles(styles)(Payment));
