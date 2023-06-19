import React from "react";
import "./Overall.css";
import data from "../../utils/data-store/MOCK-DATA";
import GeoGraph from "../Charts/GeoGraph";
import RelevancePie from "../Charts/RelevancePie";
import TopicsPie from "../Charts/TopicsPie";
import LikelihoodPie from "../Charts/LikelihoodPie";
import SectorLine from "../Charts/SectorLine";
export const Overall = () => {
  function getGeographicalData() {
    const countries = {};
    data.forEach((item) => {
      const { country } = item;
      if (country) {
        if (countries[country]) {
          countries[country]++;
        } else {
          countries[country] = 1;
        }
      }
    });
    const countByCountry = Object.keys(countries).map((country) => ({
      country,
      count: countries[country],
    }));

    return countByCountry;
  }
  let geoData = getGeographicalData();
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
