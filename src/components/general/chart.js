import React, { Fragment, useState } from "react";
import Box from "@material-ui/core/Box";
import Chart from "react-apexcharts";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Graph = ({ classes, width }) => {

  const mediaSize=useMediaQuery("( max-width:400px )");
  const [selected, setSelected] = useState(2);

  var series = [
    {
      name: "Statistics",
      data: [1356, 1000, 1400, 500, 700, 900, 1200, 700, 560, 456, 0, 0],
    },
  ];

  var options = {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
        endingShape: "rounded",
      },
    },
    chart: {
      foreColor: "#babbbf",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    annotations: {
      yaxis: [
        {
          y: 1000,
          borderColor: "#ffc845",
          label: {
            borderColor: "none",
            style: {
              color: "#ffc845",
              background: "#fff",
            },
            text: "Target KD 1000",
          },
        },
      ],
    },
    grid: {
      borderColor: "#eee",
      strokeDashArray: 7,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    fill: {
      colors: [
        function ({ value, seriesIndex, w }) {
          if (value > 1000) {
            return "#ffc845";
          } else {
            return "#ccc";
          }
        },
      ],
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          `<div style="padding:7px; ">` +
          "<span style='font-size:12px; color:#686b73;'>" +
          series[seriesIndex][dataPointIndex] +
          "</span>" +
          "</div>"
        );
      },
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
  };

  return (
    <Fragment>
      <Paper elevation={0}>
        <Box
          style={{
            padding: "1rem",
            height: "3rem",
            width: { width },
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography className={classes.light}>Statistics</Typography>

          <Box display="flex" alignItems="center">
            <Button className={
                mediaSize?
                classes.btnsm:
                classes.btn
                }>Set Target</Button>
            <Box
              display="flex"
              alignItems="center"
              style={{ marginLeft: "10px" }}
            >
              <Button
                onClick={() => setSelected(1)}
                className={selected === 1 ? classes.btn2 : classes.btn1}
              >
                D
              </Button>
              <Button
                onClick={() => setSelected(2)}
                className={selected === 2 ? classes.btn2 : classes.btn1}
              >
                M
              </Button>{" "}
              <Button
                onClick={() => setSelected(3)}
                className={selected === 3 ? classes.btn2 : classes.btn1}
              >
                Y
              </Button>
            </Box>
          </Box>
        </Box>

        <Chart options={options} type="bar" series={series} width={width} />
      </Paper>
    </Fragment>
  );
};

const styles = (theme) => ({
  light: {
    color: theme.palette.primary.lightgray,
    fontSize: 14,
  },
  btn: {
    textTransform: "none",
    fontSize: 10,
    border: `2px solid ${theme.palette.primary.lightOrange}`,
    background: theme.palette.primary.lightOrange,
    color: theme.palette.primary.main,
  },
  btnsm: {
    textTransform: "none",
    fontSize: 8,
    marginLeft: 10,
    border: `2px solid ${theme.palette.primary.lightOrange}`,
    background: theme.palette.primary.lightOrange,
    color: theme.palette.primary.main,
  },
  btn1: {
    background: "#fff",
    fontSize: 12,
    color: theme.palette.primary.lightgray,
    border: `2px solid #fff`,
    width: "1rem",
    "&:hover": {
      background: "#fff",
    },
  },
  btn2: {
    background: "#fff",
    fontSize: 12,
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    width: "1rem",
    "&:hover": {
      background: "#fff",
    },
  },
});

export default withStyles(styles)(Graph);
