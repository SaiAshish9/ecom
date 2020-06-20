import React, { Fragment } from "react";
import MNavbar from "../../general/mnavbar";
import Btn from "../../general/button";
import Box from "@material-ui/core/Box";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Input from "../../general/input"


const ClientDetails = ({ classes, history }) => {
  return (
    <Fragment>
      <MNavbar title="ADD CLIENT DETAILS" link="/dashboard/orders/products" />
      <Box
        style={{ padding: "1.5rem", marginBottom: "10vh", minHeight: "80vh" }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Input select label="OLD CLIENT" placeholder="Ahmed Ali" />
        <Input type="text" placeholder="Samer" label="CLIENT NAME [OPTIONAL]" />
        <Input type="tel" placeholder="+965 4356633" label="MOBILE" />
        <Input type="text" placeholder="4" label="BLOCK" />
        <Input type="text" placeholder="4" label="STREET" />
        <Input type="text" placeholder="4" label="HOME" />
        <Input type="text" placeholder="4" label="ADDITIONAL DETAILS" />
        <Btn
          onClick={() => {
            history.push("/dashboard/orders/pending");
          }}
          style={{ height: "3rem", width: "100%", margin: "20px 0" }}
        >
          CREATE & SHARE LINK
        </Btn>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  dark: {
    color: theme.palette.primary.gray,
  },
});

export default withRouter(withStyles(styles)(ClientDetails));
