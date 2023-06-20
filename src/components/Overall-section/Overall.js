import React, { useEffect, useState } from "react";
import "./Overall.css";
import GeoGraph from "../Charts/GeoGraph";
import RelevancePie from "../Charts/RelevancePie";
import TopicsPie from "../Charts/TopicsPie";
import LikelihoodPie from "../Charts/LikelihoodPie";
import SectorLine from "../Charts/SectorLine";
import {
  getGeoData,
  getLikeData,
  getRelData,
  getSecData,
  getTopicData,
} from "../../utils/api";
export const Overall = () => {
  const [geoData, setGeoData] = useState([]);
  const [relData, setRelData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [likeData, setLikeData] = useState([]);
  const [sectorData, setSectorData] = useState([]);

  useEffect(() => {
    if (geoData.length === 0) {
      getGeoData()
        .then((res) => {
          setGeoData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (relData.length === 0) {
      getRelData()
        .then((res) => {
          setRelData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (topicData.length === 0) {
      getTopicData()
        .then((res) => {
          setTopicData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (likeData.length === 0) {
      getLikeData()
        .then((res) => {
          setLikeData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (sectorData.length === 0) {
      getSecData()
        .then((res) => {
          setSectorData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
            <RelevancePie relData={relData} />
            <TopicsPie topicData={topicData} />
            <LikelihoodPie likeData={likeData} />
          </div>
        </div>
        <div className="overall-right-bottom">
          <SectorLine secData={sectorData} />
        </div>
      </div>
    </div>
  );
};
