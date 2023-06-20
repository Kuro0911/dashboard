// ./components/PieChart.js
import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";

const RelevancePie = ({ relData }) => {
  let rel_labels = [];
  let rel_cnt = [];
  useEffect(() => {
    if (relData.length > 0) {
      relData.forEach((e) => {
        rel_labels.push(e.rel_level);
        rel_cnt.push(e.count);
      });
      rel_cnt[0] = rel_cnt[0] + 4;
    }
  });

  const data = {
    labels: rel_labels,
    datasets: [
      {
        label: "# relevance",
        data: rel_cnt,
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
          "#7fffd4",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
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
      {relData.length > 0 ? (
        <Pie
          options={options}
          style={{ height: 120, width: 120 }}
          data={data}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default RelevancePie;
