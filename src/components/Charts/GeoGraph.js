import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const GeoGraph = ({ geoData }) => {
  let labels = [];
  let number = [];
  geoData.forEach((e) => {
    if (e.country === "United States of America") {
      labels.push("USA");
    } else if (e.country === "United Arab Emirates") {
      labels.push("UAE");
    } else {
      labels.push(e.country);
    }
    number.push(e.count);
  });
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
  const options = {
    plugins: {
      maintainAspectRatio: false,
      datalabels: {
        color: "#e8e6e3",
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GeoGraph;
