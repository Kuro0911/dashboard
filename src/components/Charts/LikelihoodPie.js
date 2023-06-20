// ./components/PieChart.js
import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";

const LikelihoodPie = ({ likeData }) => {
  let labels = [];
  let cnt = [];
  let colors = [];

  useEffect(() => {
    if (likeData.length > 0) {
      likeData.forEach((e) => {
        labels.push(e.like);
        cnt.push(e.count);
        colors.push("#" + Math.floor(Math.random() * 16777215).toString(16));
      });
    }
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# likelihood",
        data: cnt,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      maintainAspectRatio: false,
      legend: {
        position: "right",
        display: false,
      },
    },
  };
  return (
    <div>
      {likeData.length > 0 ? (
        <Pie
          style={{ height: 120, width: 120 }}
          options={options}
          data={data}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default LikelihoodPie;
