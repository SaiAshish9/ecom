import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "../../general/button";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import TextField from "../../general/input";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const CategoriesDesc = ({ classes, history }) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    var file1 = e.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) => {
      setFile(reader.result);
      console.log(file)
    };
    reader.readAsDataURL(file1);
  };

  return (
    <Grid className={classes.grid}>
      <Grid style={{ display: "flex", alignItems: "center", width: "80vw" }}>
        <Grid style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              history.push("/dashboard/product");
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 20 }} />
          </IconButton>
          <Typography className={classes.dark}>Add New Category</Typography>
        </Grid>

        <Button
          style={{
            borderRadius: 0,
          }}
          // disabled={true}
        >
          Save
        </Button>
      </Grid>

      <Grid className={classes.form}>
        <Grid className={classes.grid1}>
          <input
            accept="image/*"
            onChange={(e) => handleChange(e)}
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
          />

          <label htmlFor="icon-button-file">
            <Paper
              style={{
                width: "100%",
                height: "60vh",
              }}
              elevation={0}
              className={classes.upload}
            >
              <CameraAltIcon className={classes.camera} />
            </Paper>
          </label>
        </Grid>

        <Paper style={{ height: "60vh" }} className={classes.grid2}>
          <TextField
            type="text"
            label=" CATEGORY NAME"
            placeholder="100- Wood Beads "
            style={{ width: "90%" }}
          />

          <TextField
            type="text"
            label="CATEGORY NAME[ARABIC]"
            placeholder="عربى"
            style={{ width: "90%" }}
          />

          <TextField
            type="text"
            label="ADD SUB CATEGORY"
            placeholder="Jwellery"
            style={{ width: "90%" }}
          />

          <AddCircleOutlineIcon className={classes.addIcon} />
        </Paper>
      </Grid>
    </Grid>
  );
};

const styles = (theme) => ({
  addIcon: {
    alignSelf: "flex-end",
    marginRight: "8%",
    cursor: "pointer",
    color: theme.palette.primary.lightgray,
  },

  label: {
    color: theme.palette.primary.lightgray,
    fontSize: 12,
  },

  icon: {
    backgroundColor: theme.palette.primary.dashboardBackground,
    borderRadius: "50%",
    color: theme.palette.primary.gray,
    padding: 5,
    position: "relative",
    // left:10,
    bottom: 10,
    cursor: "pointer",
  },

  avatar: {
    height: "5rem",
    width: "5rem",
    margin: "0 20px",
  },

  camera: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
  },

  form: {
    width: "100%",
    height: "75vh",
    marginTop: "5vh",
    // padding:'2rem',
    display: "flex",
  },

  form1: {
    width: "100%",
    height: "15vh",
    marginTop: "1vh",
    padding: "2rem",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },

  upload: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // height:'30vh',
    width: "90%",
    border: `1px solid ${theme.palette.primary.orange} `,
    background: theme.palette.primary.lightOrange,
  },

  grid1: {
    width: "40%",
    height: "65vh",
    display: "flex",
    // padding:'20px',
    // alignItems:'center',
    flexDirection: "column",
    marginLeft: "10vw",
    justifyContent: "space-around",
  },

  grid2: {
    width: "40%",
    height: "65vh",
    display: "flex",
    margin: 20,
    padding: 40,
    flexDirection: "column",
    justifyContent: "space-around",
  },

  grid: {
    padding: "4rem",
  },
  dark: {
    color: theme.palette.primary.gray,
  },
});

export default withRouter(withStyles(styles)(CategoriesDesc));
