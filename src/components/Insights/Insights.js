import React, { useEffect, useState } from "react";
import "./Insights.css";
import Pagination from "@mui/material/Pagination";
import { getData } from "../../utils/api";
import FilterListIcon from "@mui/icons-material/FilterList";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const Insights = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  // filter set up

  const [year, setYear] = useState("");
  const [topic, setTopic] = useState("");
  const [sector, setSector] = useState("");
  const [region, setRegion] = useState("");
  const [source, setSource] = useState("");
  const [intensity, setIntensity] = useState("");
  const [country, setCountry] = useState("");

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };
  const handleSectorChange = (e) => {
    setSector(e.target.value);
  };
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };
  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };
  const handleIntensityChange = (e) => {
    setIntensity(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const applyFilters = (e) => {
    let filters = {
      year: year,
      topic: topic,
      sector: sector,
      region: region,
      source: source,
      intensity: intensity,
      country: country,
    };
    console.log(filters);
  };
  // filter setup over

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <div className="filter-head">
            <h2>
              <button onClick={handleOpen}>
                <FilterListIcon fontSize={"large"} />
              </button>
            </h2>
          </div>
        </div>
        <div className="insight-data">
          <Modal
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            open={open}
            onClose={handleClose}
          >
            <div className="filter-modal">
              <div className="filter-modal-head">
                <h1>Add Filters</h1>
              </div>
              <div className="filter-modal-body">
                <div className="filter-modal-body-top">
                  <div className="filter-modal-body-top-ele">
                    <span className="filter-modal-body-top-head">
                      end year :
                    </span>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "50%", marginLeft: "2em" }}
                      value={year}
                      onChange={handleYearChange}
                    >
                      <MenuItem value={10}>2001</MenuItem>
                      <MenuItem value={20}>2002</MenuItem>
                      <MenuItem value={30}>2003</MenuItem>
                    </Select>
                  </div>
                  <div className="filter-modal-body-top-ele">
                    <span className="filter-modal-body-top-head">
                      topics :{" "}
                    </span>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "50%", marginLeft: "2em" }}
                      value={topic}
                      onChange={handleTopicChange}
                    >
                      <MenuItem value={10}>t 1 </MenuItem>
                      <MenuItem value={20}>t 2</MenuItem>
                      <MenuItem value={30}>t 3</MenuItem>
                    </Select>
                  </div>
                  <div className="filter-modal-body-top-ele">
                    <span className="filter-modal-body-top-head">sector</span>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "50%", marginLeft: "2em" }}
                      value={sector}
                      onChange={handleSectorChange}
                    >
                      <MenuItem value={10}>t 1 </MenuItem>
                      <MenuItem value={20}>t 2</MenuItem>
                      <MenuItem value={30}>t 3</MenuItem>
                    </Select>
                  </div>
                  <div className="filter-modal-body-top-ele">
                    <span className="filter-modal-body-top-head">region :</span>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "50%", marginLeft: "2em" }}
                      value={region}
                      onChange={handleRegionChange}
                    >
                      <MenuItem value={10}>t 1 </MenuItem>
                      <MenuItem value={20}>t 2</MenuItem>
                      <MenuItem value={30}>t 3</MenuItem>
                    </Select>
                  </div>
                  <div className="filter-modal-body-top-ele">
                    <span className="filter-modal-body-top-head">Source :</span>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "50%", marginLeft: "2em" }}
                      value={source}
                      onChange={handleSourceChange}
                    >
                      <MenuItem value={10}>t 1 </MenuItem>
                      <MenuItem value={20}>t 2</MenuItem>
                      <MenuItem value={30}>t 3</MenuItem>
                    </Select>
                  </div>
                  <div className="filter-modal-body-top-ele">
                    <span className="filter-modal-body-top-head">
                      intensity :
                    </span>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "50%", marginLeft: "2em" }}
                      value={intensity}
                      onChange={handleIntensityChange}
                    >
                      <MenuItem value={10}>t 1 </MenuItem>
                      <MenuItem value={20}>t 2</MenuItem>
                      <MenuItem value={30}>t 3</MenuItem>
                    </Select>
                  </div>
                  <div className="filter-modal-body-top-ele">
                    <span className="filter-modal-body-top-head">Country</span>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "50%", marginLeft: "2em" }}
                      value={country}
                      onChange={handleCountryChange}
                    >
                      <MenuItem value={10}>t 1 </MenuItem>
                      <MenuItem value={20}>t 2</MenuItem>
                      <MenuItem value={30}>t 3</MenuItem>
                    </Select>
                  </div>
                </div>
                <div className="filter-modal-body-bottom">
                  <Button
                    sx={{
                      width: "30%",
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    variant="text"
                    size="large"
                    onClick={applyFilters}
                  >
                    APPLY
                  </Button>
                </div>
              </div>
            </div>
          </Modal>

          <div className="insight-data-wrap">
            {data.map((e) => (
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
