// // import React, { Fragment, useState, useEffect } from "react";
// // import Box from "@material-ui/core/Box";
// // import withStyles from "@material-ui/core/styles/withStyles";
// // import Button from "@material-ui/core/Button";
// // import Collapse from "@material-ui/core/Collapse";
// // import MobileStepper from "@material-ui/core/MobileStepper";
// // import Slide from "@material-ui/core/Slide";

// // import { Switch, Route, withRouter } from "react-router-dom";

// // const Test = ({ history, classes }) => {
// //   const [msg, setMsg] = useState("");
// //   const [collapse, setCollapse] = useState(false);
// //   const [pos, setPos] = useState(0);

// //   const [op, setOp] = useState(1);

// //   useEffect(() => {
// //     //   console.log
// //     var scrollPos = 0;

// //     window.addEventListener("scroll", function () {
// //       if (document.body.getBoundingClientRect().top > scrollPos) {
// //         setMsg("up");
// //         console.log("up");
// //       } else {
// //         setMsg("down");
// //       }
// //       scrollPos = document.body.getBoundingClientRect().top;
// //       setPos(scrollPos);
// //       console.log(pos);
// //     });
// //   });

// //   return (
// //     <Fragment>
// //       <Box
// //         style={{
// //           width: "100vw",
// //           height: "10vh",
// //           position: "fixed",
// //           top: 0,
// //           background: "white",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //         }}
// //       >
// //         <Button onClick={(e) => {
// //             e.preventDefault()
// //             e.stopPropagation()
// //             history.push(1);
// //         }}>1</Button>
// //         <Button onClick={() => {history.push(2)}}>2</Button>
// //         <Button onClick={() => {history.push(3)}}>3</Button>
// //       </Box>

// //       <Switch>
// //         <Route exact path="/test">
// //           <Box
// //             className={[
// //               classes.primary,
// //               "animate__animated animate__bounceInDown",
// //             ]}
// //             style={{ textAlign: "center", padding: "10rem", marginTop: "10vh" }}
// //           ></Box>
// //         </Route>

// //         <Route exact path="/test/2">
// //           <Box
// //             className={[
// //               classes.secondary,
// //               "animate__animated animate__bounceInDown",
// //             ]}
// //             style={{ textAlign: "center", padding: "10rem", marginTop: "10vh" }}
// //           ></Box>
// //         </Route>

// //         <Route exact path="/test/3">
// //           <Box
// //             className={[
// //               classes.tertiary,
// //               "animate__animated animate__bounceInDown",
// //             ]}
// //             style={{ textAlign: "center", padding: "10rem", marginTop: "10vh" }}
// //           ></Box>
// //         </Route>
// //       </Switch>
// //     </Fragment>
// //   );
// // };

// // const styles = (theme) => ({
// //   primary: {
// //     backgroundColor: theme.palette.primary.main,
// //     height: "90vh",
// //     width: "100vw",
// //   },
// //   secondary: {
// //     backgroundColor: theme.palette.primary.orange,
// //     height: "90vh",
// //     width: "100vw",
// //   },
// //   tertiary: {
// //     backgroundColor: theme.palette.primary.gray,
// //     height: "90vh",
// //     width: "100vw",
// //   },
// // });

// // export default withRouter(withStyles(styles)(Test));
// import React, { Fragment, useState, useEffect } from "react";
// import Box from "@material-ui/core/Box";
// import withStyles from "@material-ui/core/styles/withStyles";
// import Button from "@material-ui/core/Button";

// import { Switch, Route, withRouter } from "react-router-dom";

// const First = ({ down }) => (
//   <Box
//     className={!down ? [""] : ["animate__animated animate__bounceInUp"]}
//     style={{
//       background: "orange",
//       height: "100vh",
//       width: "100vw",
//     }}
//   ></Box>
// );

// const Second = ({ down }) => (
//   <Box
//     className={
//       down
//         ? ["animate__animated animate__bounceInUp"]
//         : ["animate__animated animate__bounceInDown"]
//     }
//     style={{
//       background: "yellow",
//       height: "100vh",
//       width: "100vw",
//     }}
//   ></Box>
// );

// const Third = ({ down }) => (
//   <Box
//     className={
//       down
//         ? ["animate__animated animate__bounceInUp"]
//         : ["animate__animated animate__bounceInDown"]
//     }
//     style={{
//       background: "blue",
//       height: "100vh",
//       width: "100vw",
//     }}
//   ></Box>
// );

// class Test extends React.Component{


//   state={
//       pos:0,
//       scrollUp:false,
//       selected:1,
//       prev:1
//   }

  

//   componentDidMount() {
//       let that=this
//   window.addEventListener("scroll", function () { 
//  if (window.scrollY >0) {
//    if(that.state.selected===1){
//    that.setState({
//      ...that.state,
//      selected: 2,
//      pos: window.scrollY,
//    });
//    }else if(that.state.selected===2){
//       that.setState({
//         ...that.state,
//         selected: 3,
//         pos: window.scrollY,
//       });    
//    }else if(that.state.selected===3){
//           that.setState({
//             ...that.state,
//             selected: 1,
//             pos: window.scrollY,
//           })
//    }}
// // (parseInt(that.state.selected) % 3) + 1;
//     // window.scrollTo(0, 0);
//  console.log(that.state.selected)
// },1000)
// }






// render(){


//   const Arr = [<First />, <Second />, <Third />];

//   const Arr1 = [
//     <First down={true} />,
//     <Second down={true} />,
//     <Third down={true} />,
//   ];

//     const {history,classes} = this.props;

//    const {selected,prev}=this.state

//     return (
//     <Fragment>
//       <Box
//         style={{
//           position: "absolute",
//           width: "100vw",
//           height: "101vh",
//           //   bottom: "0",
//           top: "0",
//           zIndex: 1,
//           overflow: "scroll",
//         }}
//       >
//         <Box
//           style={{
//             width: "100vw",
//             height: "10vh",
//             position: "fixed",
//             top: 0,
//             background: "white",
//             zIndex: 1,
//           }}
//         ></Box>

//         {selected === 1 ? (selected >= prev ? Arr[0] : Arr1[0]) : null}
//         {selected === 2 ? (selected >= prev ? Arr[1] : Arr1[1]) : null}
//         {selected === 3 ? (selected >= prev ? Arr[2] : Arr1[2]) : null}

//         <Box
//           style={{
//             position: "absolute",
//             zIndex: 10,
//             top: "40vh",
//             right: "7vw",
//           }}
//         >
//           {[...Array(3).keys()].map((i, k) => (
//             <p
//               key={k}
//               onClick={() => {
//                 window.scrollTo(0, 0);
//                 this.setState({...this.state,prev:selected, selected:k+1});
//               }}
//               style={{
//                 height: 15,
//                 width: 15,
//                 borderRadius: "50%",
//                 background: selected === k + 1 && "#fff",
//                 cursor: "pointer",
//                 border: selected !== k + 1 && "2px solid #fff",
//               }}
//             ></p>
//           ))}
//         </Box>
//       </Box>
//     </Fragment>
//   );
// }


// };

// const styles = (theme) => ({});

// export default withRouter(withStyles(styles)(Test));
