// ./components/PieChart.js
import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";

const TopicsPie = ({ topicData }) => {
  let labels = [];
  let cnt = [];
  let colors = [];

  useEffect(() => {
    if (topicData.length > 0) {
      topicData.forEach((e) => {
        labels.push(e.topic);
        cnt.push(e.count);
        colors.push("#" + Math.floor(Math.random() * 16777215).toString(16));
      });
    }
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
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
        position: "left",
        display: false,
      },
    },
  };
  return (
    <div>
      {topicData.length > 0 ? (
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
export default TopicsPie;
