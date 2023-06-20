import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "goal",
  "no goal",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 50],
    },
  ],
};
const options = {
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      color: "red",
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Sectors",
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};
const SectorLine = () => {
  return (
    <div style={{ height: "20vh", margin: "1em" }}>
      <Line data={data} width={"100%"} options={options} />
    </div>
  );
};

export default SectorLine;
