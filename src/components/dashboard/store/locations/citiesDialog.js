import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Btn from "../../../general/button";
import Check from "../../../general/checkbox";

const CitiesDialog = ({ open, classes, close, mobileView }) => {
  const options = [
    {
      label: "All Kuwait",
    },
    {
      label: "Sharq",
    },
    {
      label: "Salmiyah",
    },
    {
      label: "Bnied-al-gar",
    },
    {
      label: "Haawally",
    },
    {
      label: "Mangaf",
    },
    {
      label: "Mahboula",
    },
    {
      label: "Al Sabeh",
    },
    {
      label: "Al Salem",
    },
  ];

  return (
    <Dialog
      style={{
        width: mobileView && "100vw",
      }}
      open={open}
    >
      <DialogContent
        style={{
          width: mobileView && "90vw",
        }}
        className={classes.dialog}
      >
        <Grid
          style={{
            width: mobileView ? "95%" : "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ color: "#000" }} component="h6" variant="h6">
            Select cities to deliver
          </Typography>

          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Grid>

        <Grid>
          {options.map((i, k) => (
            <Grid
              key={k}
              style={{
                margin: "10px 0",
                width: mobileView ? "95%" : "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography className={classes.label}>{i.label}</Typography>
              <Typography>
                <Check />
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Btn
          style={{
            borderRadius: "0",
            width: mobileView ? "95%" : "100%",
            position: "relative",
            right: "0.8rem",
          }}
          onClick={close}
        >
          Save
        </Btn>
      </DialogContent>
    </Dialog>
  );
};

const styles = (theme) => ({
  dialog: {
    minHeight: "90vh",
    color: "white",
    width: "27vw",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  label: {
    color: theme.palette.primary.gray,
    fontSize: 13,
    margin: "7px 0",
  },
});

export default withStyles(styles)(CitiesDialog);
