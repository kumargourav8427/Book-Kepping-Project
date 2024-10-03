import React, { useState } from "react";
import Chart from "react-apexcharts";

function App() {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33],
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Average High & Low Temperature",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Temperature",
        },
        min: 5,
        max: 40,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  });

  return (
    <>
      <div className="p-5 bg-gray-100 ">
        <h1 className="text-4xl mb-5 font-bold">Report</h1>
        <div className="first_row flex justify-between text-center items-center flex-wrap mx-auto mb-4">
          <div className="rounded-lg border p-4 bg-white">
            <p className="text-3xl font-bold">Total Balance</p>
            <p className="text-2xl font-semibold">1064564.00 rupees</p>
          </div>
          <div className="rounded-lg border p-4  bg-white ">
            <p className="text-3xl font-bold">Total Expense</p>
            <p className="text-2xl font-semibold">1064564.00 rupees</p>
          </div>
          <div className="rounded-lg border p-4  bg-white ">
            <p className="text-3xl font-bold">Total Profit</p>
            <p className="text-2xl font-semibold">1064564.00 rupees</p>
          </div>
        </div>

        <div id="chart" className=" ">
          <Chart
            options={chartState.options}
            series={chartState.series}
            type="line"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </>
  );
}

export default App;
