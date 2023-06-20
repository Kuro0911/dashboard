import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

const SectorLine = ({ secData }) => {
  let labels = [];
  let cnt = [];

  useEffect(() => {
    secData.forEach((e) => {
      labels.push(e.sector);
      cnt.push(e.count);
    });
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sectors",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: cnt,
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
  console.log(data);
  return (
    <div style={{ height: "20vh", margin: "1em" }}>
      {secData.length > 0 ? (
        <Line data={data} width={"100%"} options={options} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SectorLine;
