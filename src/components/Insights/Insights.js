import React, { useEffect, useState } from "react";
import "./Insights.css";
import Pagination from "@mui/material/Pagination";
import { getData } from "../../utils/api";
export const Insights = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const handleChange = (event, value) => {
    setPage(value);
    getData(value)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const temp = data.slice(0, 5);
  useEffect(() => {
    getData(page)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div className="insights">
      <div className="insight-content">
        <div className="insight-content-top">
          <div className="title-head">
            <h2>Title</h2>
          </div>
          <div className="region-head">
            <h2>Region</h2>
          </div>
          <div className="insight-head">
            <h2>Insights</h2>
          </div>
        </div>
        <div className="insight-data">
          <div className="insight-data-wrap">
            {temp.map((e) => (
              <div className="insight-data-ele">
                <div className="insight-data-ele-head">{e.title}</div>
                <div className="insight-data-ele-region">{e.region}</div>
                <div className="insight-data-ele-insight">{e.insight}</div>
              </div>
            ))}
          </div>
          <Pagination
            count={200}
            page={page}
            onChange={handleChange}
            color={"secondary"}
          />
        </div>
      </div>
    </div>
  );
};
