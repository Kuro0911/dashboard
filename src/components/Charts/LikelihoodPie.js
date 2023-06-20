// ./components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["L1", "L2", "L3", "L4", "L5"],
  datasets: [
    {
      label: "# of Votes",
      data: [35, 25, 22, 20, 33],
      backgroundColor: ["#007D9C", "#244D70", "#D123B3", "#F7E018", "#fff"],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
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
const LikelihoodPie = () => {
  return (
    <div>
      <Pie
        style={{ height: 220, width: 220, marginTop: 15, marginRight: 30 }}
        options={options}
        data={data}
      />
    </div>
  );
};
export default LikelihoodPie;
