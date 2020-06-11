import React from "react";

import styledRoot from "./styledRoot";
import App from "./App";
// import Typography from '@material-ui/core/typography'
import withStyles from "@material-ui/core/styles/withStyles";

const Root = ({ classes }) => {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  );
};

const styles = (theme) => ({});

export default styledRoot(withStyles(styles)(Root));
