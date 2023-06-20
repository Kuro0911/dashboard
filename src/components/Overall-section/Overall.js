import React, { useEffect, useState } from "react";
import "./Overall.css";
import data from "../../utils/data-store/MOCK-DATA";
import GeoGraph from "../Charts/GeoGraph";
import RelevancePie from "../Charts/RelevancePie";
import TopicsPie from "../Charts/TopicsPie";
import LikelihoodPie from "../Charts/LikelihoodPie";
import SectorLine from "../Charts/SectorLine";
import { getGeoData } from "../../utils/api";
export const Overall = () => {
  const [geoData, setGeoData] = useState([]);
  useEffect(() => {
    getGeoData()
      .then((res) => {
        setGeoData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="overall">
      <div className="overall-left">
        <div className="overall-left-head">
          <h2>Geographical regions</h2>
        </div>
        <GeoGraph geoData={geoData} />
      </div>
      <div className="overall-right">
        <div className="overall-right-top">
          <div className="overall-right-top-head">
            <h2>Relevance levels</h2>
            <h2>Topics Covered</h2>
            <h2>Likelihood levels</h2>
          </div>
          <div className="overall-right-top-wrap">
            <RelevancePie />
            <TopicsPie />
            <LikelihoodPie />
          </div>
        </div>
        <div className="overall-right-bottom">
          <SectorLine />
        </div>
      </div>
    </div>
  );
};
