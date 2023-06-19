import React from "react";
import "./Overall.css";
import data from "../../utils/data-store/MOCK-DATA";
import GeoGraph from "../Barcharts/GeoGraph";
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
        <div className="overall-right-top">Relevance levels</div>
        <div className="overall-right-bottom">Likelihood levels</div>
      </div>
    </div>
  );
};
