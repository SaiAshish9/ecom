import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    // color:theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing(3),
      // width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    color:theme.palette.primary.main,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon1: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    color:theme.palette.primary.gray,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    border: "1px solid #eee",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: theme.palette.primary.gray,
    [theme.breakpoints.up("md")]: {
      // width: '17ch',
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar({gray}) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Toolbar>
        <div className={classes.search}>
          <div className={gray?classes.searchIcon1:classes.searchIcon}>
            <SearchIcon    />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </div>
  );
}
