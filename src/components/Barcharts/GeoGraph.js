import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const GeoGraph = ({ geoData }) => {
  let labels = [];
  let number = [];
  geoData.map((e) => {
    labels.push(e.country);
    number.push(e.count);
  });
  Chart.defaults.color = "#e8e6e3";
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Count",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: number,
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default GeoGraph;
