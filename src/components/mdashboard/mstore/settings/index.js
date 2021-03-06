import React,{useState,createContext} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Btn from "../../../general/button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Options from "../../../../constants/settings";
import Dialog1 from './dialog1';
import Dialog2 from "./dialog2";

 export const LaunchContext = createContext(null);

const Settings = ({ classes, history }) => {

  const [openDialog1,setOpenDialog1]=useState(false)
  const [openDialog2, setOpenDialog2] = useState(false);


  return (
    <LaunchContext.Provider
      value={{
         toggleDialog1:()=>{
          setOpenDialog1(!openDialog1);
        },       
        toggleDialog2:()=>{
          setOpenDialog2(!openDialog2);
        }
      
      }
        }
    >
      <Paper elevation={0} className={classes.nav}>
        <IconButton
          onClick={() => {
            history.push("/dashboard/store");
          }}
          style={{
            marginLeft: 10,
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <Typography
          className={classes.dark}
          style={{
            justifyContent: "center",
            marginLeft: "22vw",
            fontSize: 14,
          }}
        >
          STORE BUILDING
        </Typography>
      </Paper>

      <Box
        display="flex"
        flexDirection="column"
        style={{
          padding: "1.5rem",
          marginBottom: "10vh",
        }}
      >
        {Options.map((i, k) => (
          <Paper
            key={k}
            elevation={0}
            className={classes.paper}
            onClick={() => {
              history.push(k === 0 ? i.links[1] : i.links[0]);
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButton color="primary">{i.icon}</IconButton>
              <Typography className={classes.dark}>{i.title}</Typography>
            </Box>
            <Typography className={classes.orange}>
              {k !== 2 ? "Pending" : <MoreVertIcon className={classes.light} />}
            </Typography>
          </Paper>
        ))}

        <Btn
          style={{
            width: "100%",
            height: "3rem",
          }}
          onClick={() => {
            setOpenDialog1(true);
          }}
        >
          LAUNCH STORE NOW
        </Btn>
        {openDialog1 && <Dialog1 mobileView={true} open={true} />}
        {openDialog2 && <Dialog2 mobileView={true} open={true} />}
      </Box>
    </LaunchContext.Provider>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
  },
  nav: {
    width: "100%",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.primary.lightgray} `,
  },
  dark: {
    color: theme.palette.primary.gray,
    fontSize: 14,
  },
  orange: {
    color: theme.palette.primary.orange,
    fontSize: 12,
  },
  paper: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "9vh",
    margin: "10px 0",
    boxShadow: `0 0 20px #eee `,
  },
});

export default withRouter(withStyles(styles)(Settings));
