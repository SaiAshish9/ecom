import React, { Fragment } from "react";
import MNavbar from "../../general/mnavbar";
import Btn from "../../general/button";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Search from "../../general/search";

const Products = ({ classes, history }) => {
  return (
    <Fragment>
      <MNavbar title="CHOOSE PRODUCTS" link="/dashboard/orders" />
      <Box
        style={{ padding: "1.5rem", marginBottom: "10vh" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
          <Search gray/>
        {[...Array(2).keys()].map((_, k) => (
          <Box key={k} style={{ margin: "20px 0" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdQ4YVcPDZKQwChl8loPLB9ZJ_DzH-sfAmACfmT34gSpOCT101&usqp=CAU"
                style={{
                  height: "20vh",
                  width: "35%",
                }}
                variant="rounded"
              />{" "}
              <Box
                style={{
                  height: "20vh",
                  width: "55%",
                  padding: "1rem",
                }}
              >
                <Typography className={classes.dark}>
                  100- Wood Beads
                </Typography>
                <Typography color="primary">KD 80.0</Typography>
              </Box>
              <Box
                style={{
                  height: "20vh",
                  width: "10%",
                  padding: "1rem",
                }}
              >
                <Checkbox color="primary"
                 defaultChecked={k===0?true:false}
                  />
              </Box>
            </Box>
          </Box>
        ))}
        <Btn 
        onClick={()=>{
            history.push('/dashboard/orders/clientDetails')
        }}
        style={{ height: "3rem", width: "100%", margin: '20px 0' }}>NEXT</Btn>
      </Box>
    </Fragment>
  );
};

const styles = (theme) => ({
  dark: {
    color: theme.palette.primary.gray,
  },
});

export default withRouter(withStyles(styles)(Products));
