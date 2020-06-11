import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";

const Checkbox = ({ classes, check }) => {
  const [checked, setChecked] = useState(check);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const styles = (theme) => ({
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
});

export default withStyles(styles)(Checkbox);
