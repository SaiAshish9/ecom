import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Btn from "../../../general/button";

const LocationDialog = ({ open, classes, close }) => {
  const options = [
    {
      label: "city",
      placeholder: "Kuwait City",
    },
    {
      label: "block street",
      placeholder: "45",
    },
    {
      label: "avenue",
      placeholder: "Divone",
    },
    {
      label: "building",
      placeholder: "White",
    },
    {
      label: "phone number",
      placeholder: "1234",
    },
    {
      label: "additional details",
      placeholder: "NA",
    },
  ];

  return (
    <Dialog open={open}>
      <DialogContent className={classes.dialog}>
        <Grid
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ color: "#000" }} component="h6" variant="h6">
            Add An Address
          </Typography>

          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Grid>

        <Grid>
          <Typography className={classes.label}>Map</Typography>

          <img
            src="https://i.stack.imgur.com/mPsIw.png"
            style={{ width: "100%", height: "25vh" }}
            alt="map"
          />
        </Grid>

        {options.map((i, k) => (
          <Grid key={i}>
            <Typography className={classes.label}>{i.label}</Typography>
            <input
              type="text"
              placeholder={i.placeholder}
              className={classes.txtInput}
            />
          </Grid>
        ))}

        <Btn
          onClick={close}
          style={{
            borderRadius: "0",
            width: "100%",
            position: "relative",
            right: "0.8rem",
          }}
        >
          Save
        </Btn>
      </DialogContent>
    </Dialog>
  );
};

const styles = (theme) => ({
  dialog: {
    minHeight: "120vh",
    color: "white",
    width: "27vw",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  label: {
    color: theme.palette.primary.lightgray,
    fontSize: 13,
    margin: "7px 0",
    textTransform: "uppercase",
  },
  txtInput: {
    border: `1px solid ${theme.palette.primary.main} `,
    height: "2.5rem",
    width: "100%",
    color: theme.palette.primary.gray,
    padding: 10,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main} `,
    },
    "&::placeholder": {
      color: theme.palette.primary.gray,
      fontWeight: "bold",
    },
  },
});

export default withStyles(styles)(LocationDialog);
