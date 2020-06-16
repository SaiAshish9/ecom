// import React, { Fragment } from "react";
// import Box from "@material-ui/core/Box";
// import withStyles from "@material-ui/core/styles/withStyles";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button"
// import {WiDirectionLeft} from 'react-icons/wi'
// import Divider from "@material-ui/core/Divider";

// const options=[
//     {
//         img:"https://cdn.pixabay.com/photo/2015/03/21/06/27/technology-683243_960_720.png",
//         title:"Intel i7 6469k",
//         desc:"CPU",
//         price:"KD 2,520"
//     },
//       {
//         img:"https://cdn.pixabay.com/photo/2016/09/24/23/14/nvidia-1692796_960_720.jpg",
//         title:"Nvidia GTX 1080 Ti",
//         desc:"CPU",
//         price:"KD 1,500"
//     },
//         {
//         img:"https://cdn.pixabay.com/photo/2012/04/13/17/00/lcd-32872_960_720.png",
//         title:"Samsung TL-102",
//         desc:"Monitor",
//         price:"KD 500"
//     }  
// ]


// const Test = ({ classes }) => {
//   return (
//     <Fragment>
//       <Box style={{ color: "white", padding: "2rem" }} className={classes.box}>
//         <Box display="flex" alignItems="center">
//           <a className={classes.btn} href="#">
//             <span className={classes.span}>
//               <WiDirectionLeft style={{ fontSize: 30 }} />
//             </span>
//           </a>

//           <Typography component="p" style={{ margin: "0 10px" }}>
//             <i>YOUR CART</i>
//           </Typography>
//           <p className={classes.light} style={{ margin: "0 5px" }}>
//             <i>(2 Items)</i>
//           </p>
//         </Box>

//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="space-between"
//           style={{
//             height: "20vh",
//             width: "100%",
//           }}
//         >
//           <Box style={{ width: "50%" }}>
//             <img
//               src="https://images.unsplash.com/photo-1542280756-2992e05fef7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
//               style={{
//                 width: "100%",
//                 height: "12vh",
//               }}
//             />
//           </Box>

//           <Box style={{ width: "47%", paddingLeft: "1%" }}>
//             <Typography>Alpha Fury</Typography>

//             <p className={classes.light}>KD 4500</p>
//           </Box>
//         </Box>

//         {options.map((i, k) => (
//           <Box key={k} className={classes.content}>
//             <img
//               src={i.img}
//               style={{
//                 height: "7vh",
//                 width: "4rem",
//                 position: "relative",
//                 right: "2rem",
//                 marginRight: 20,
//               }}
//             />
//             <Box display="flex" alignItems="center">
//               <Box
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="center"
//                 style={{
//                   position: "relative",
//                   right: "2rem",
//                   height: "6vh",
//                   width: "60%",
//                 }}
//               >
//                 <Typography style={{ fontSize: 12 }}>{i.title}</Typography>
//                 <p style={{ fontSize: 12 }} className={classes.light}>
//                   {i.desc}
//                 </p>
//               </Box>
//               <Box style={{ width: "60%" }}>
//                 <p className={classes.light}>{i.price}</p>
//               </Box>
//             </Box>
//           </Box>
//         ))}

//         <Box className={classes.content}>
//           <Box display="flex" alignItems="center">
//             <Box
//               style={{ marginLeft: "20%" }}
//               display="flex"
//               flexDirection="column"
//             >
//               <p style={{ fontSize: 12 }} className={classes.light}>
//                 Deliver to
//               </p>
//               <Typography style={{ fontSize: 12 }}>
//                 1295 Mateo Summit
//               </Typography>
//             </Box>
//             <Box style={{ position: "relative", left: "30%" }}>
//               <p className={classes.pink}>Change</p>
//             </Box>
//           </Box>
//         </Box>

//         <Box className={classes.description}>
//           <Box
//             display="flex"
//             alignItems="center"
//             style={{ height: "8vh", padding: "2rem" }}
//           >
//             <Typography style={{ fontSize: 12 }}>
//               Package Details(4 Items)
//             </Typography>{" "}
//           </Box>
//           <hr color="#333" />
//           <Box
//             display="flex"
//             alignItems="center"
//             flexDirection="column"
//             style={{ padding: " 1rem 2rem" }}
//           >
//             {[...Array(4).keys()].map((i, k) => (
//               <Box
//                 key={k}
//                 display="flex"
//                 alignItems="center"
//                 style={{ height: "8vh", width: "100%" }}
//               >
//                 <Typography style={{ fontSize: 12 }}>CPU</Typography>{" "}
//                 <Typography
//                   className={classes.light}
//                   style={{ marginLeft: 20, fontSize: 12 }}
//                 >
//                   i7 6469k
//                 </Typography>{" "}
//                 <Typography
//                   className={classes.light}
//                   style={{ marginLeft: "40%", fontSize: 12 }}
//                 >
//                   KD 4522
//                 </Typography>{" "}
//               </Box>
//             ))}
//           </Box>

//           <hr color="#333" />
//           <Box
//             display="flex"
//             alignItems="center"
//             style={{ height: "8vh", padding: "2rem" }}
//           >
//             <Typography style={{ fontSize: 12 }}>Total</Typography>{" "}
//             <Typography style={{ marginLeft: "60%", fontSize: 12 }}>
//               KD 4522
//             </Typography>{" "}
//           </Box>
//         </Box>

//         <Button className={classes.button}>
//           <Box
//             style={{ width: "100%" }}
//             display="flex"
//             alignItems="center"
//             justifyContent="space-between"
//           >
//             <Typography style={{ fontSize: 12 }}>PAY</Typography>{" "}
//             <Typography style={{ fontSize: 12 }}>KD 4500</Typography>
//           </Box>
//         </Button>

//         <p
//           className={classes.light}
//           style={{ margin: "25px auto", textAlign: "center" }}
//         >
//           Forgot to add something?
//         </p>

//         <Button 
//         style={{textTransform: "none"}}
//         className={classes.button1}>
// Continue Shopping
//         </Button>
//       </Box>
//     </Fragment>
//   );
// };

// const styles = (theme) => ({
//   box: {
//     minHeight: "100vh",
//     overflowX: "hidden",
//     position: "absolute",
//     right: 0,
//     left: 0,
//     width: "100vw",
//     background: "linear-gradient(180deg, #2A2D39 0%, #261D2A 100%)",
//   },
//   decorate: {},
//   background:
//     "linear-gradient(to right top, #eb12a3, #de00b3, #ca00c4, #ae00d7, #8512eb)",
//   pink: {
//     color: "#ca00c4",
//   },
//   btn: {
//     backgroundImage:
//       "linear-gradient(to right top, #eb12a3, #de00b3, #ca00c4, #ae00d7, #8512eb)",
//     borderRadius: "10px",
//     boxSizing: "border-box",
//     color: "#ca00c4",
//     display: "block",
//     font: "1.125rem 'Oswald', Arial, sans-serif",
//     height: "2.5rem",
//     letterSpacing: "1px",
//     padding: 2,
//     transform: "skew(-10deg)",
//     position: "relative",
//     width: "3.5rem",
//     zIndex: "2",
//     textDecoration: "none",
//   },
//   span: {
//     alignItems: "center",
//     background: "linear-gradient(180deg, #2A2D39 0%, #261D2A 100%)",
//     borderRadius: "10px",
//     display: "flex",
//     justifyContent: "center",
//     height: "100%",
//     transition: "background .5s ease",
//     width: "100%",
//   },
//   light: {
//     color: theme.palette.primary.gray,
//   },
//   content: {
//     margin: "20px 0",
//     position: "relative",
//     left: "3vw",
//     background:
//       "linear-gradient(to right, #343539, #2f2f36, #2b2933, #28232f, #261d2a)",
//     width: "120%",
//     height: "15vh",
//     borderRadius: "15px",
//     display: "flex",
//     alignItems: "center",
//     transform: "skew(-10deg)",
//   },
//   description: {
//     margin: "20px 0",
//     position: "relative",
//     left: "3vw",
//     background:
//       "linear-gradient(to right, #343539, #2f2f36, #2b2933, #28232f, #261d2a)",
//     width: "120%",
//     borderRadius: "15px",
//   },
//   button: {
//     width: "90%",
//     marginLeft: "5%",
//     padding: "0 1rem",
//     color: "white",
//     transform: "skew(-10deg)",
//     height: "7vh",
//     borderRadius: 10,
//     background:
//       "linear-gradient(to right top, #eb12a3, #de00b3, #ca00c4, #ae00d7, #8512eb)",
//   },
//   button1: {
//     width: "90%",
//     marginLeft: "5%",
//     padding: "0 1rem",
//     color: "white",
//     transform: "skew(-10deg)",
//     height: "7vh",
//     borderRadius: 10,
//     border: "1px solid #ca00c4",
//     background:
//       "linear-gradient(to right top, #521244, #54154a, #56184f, #581c55, #591f5b)",
//   },
// });

// export default withStyles(styles)(Test);
