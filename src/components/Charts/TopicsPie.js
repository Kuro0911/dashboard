// ./components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Gas", "Oil", "Consumption", "Market"],
  datasets: [
    {
      label: "# of Votes",
      data: [50, 15, 35],
      backgroundColor: ["#007D9C", "#244D70", "#D123B3", "#F7E018"],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      position: "left",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};
const TopicsPie = () => {
  return (
    <div>
      <Pie style={{ height: 300, width: 250 }} options={options} data={data} />
    </div>
  );
};
export default TopicsPie;
