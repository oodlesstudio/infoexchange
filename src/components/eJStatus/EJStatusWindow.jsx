import React, { useState } from "react";
import Select from "react-select";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";

// Modals

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];
const options2 = [
  { value: "1", label: "option" },
  { value: "2", label: "option" },
  { value: "3", label: "option" },
  { value: "4", label: "option" },
];

const EJStatusWindow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Modals

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [make, setMake] = useState(false);
  const changeMake = () => setMake(true);

  const [binScheme, setBinScheme] = useState(false);
  const changeBinScheme = () => setBinScheme(true);

  const [siteType, setSiteType] = useState(false);
  const changeSiteType = () => setSiteType(true);

  const [siteClass, setSiteClass] = useState(false);
  const changeSiteClass = () => setSiteClass(true);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to pdf
    </Tooltip>
  );

  const renderTooltipExcel = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to excel
    </Tooltip>
  );

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="configLeft unmatchedContainer">
      {/* Breadcrumb Box */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          EJ Pulling Status
        </h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Dashboard</p>
          </Link>
          <span>
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <Link to="/">
            <p className="fontSize12">EJ Status</p>
          </Link>
        </div>
      </div>

      {/* Config Left Top */}

      <div className="configLeftTop configLeftTop2 mb-12">
        <div className="accordion" id="unmatchedFilters">
          <div className="accordion-item">
            <div
              className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
              id="unmatchedFiltersHeading"
            >
              <h6 className="fontWeight-600 colorBlack">Search Criteria</h6>
              <button
                className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#unmatchedFiltersCollapse"
                aria-expanded="true"
                aria-controls="unmatchedFiltersCollapse"
              >
                <span className="icon-Hide"></span>
                <span className="ms-1 fontSize12-m colorPrimaryDefault">
                  Show / Hide
                </span>
              </button>
            </div>
            <div
              id="unmatchedFiltersCollapse"
              className="accordion-collapse collapse show"
              aria-labelledby="unmatchedFiltersHeading"
              data-bs-parent="#unmatchedFilters"
            >
              <div className="accordion-body">
                <div className="hrGreyLine"></div>
                <div className="configSelectBoxTop row">
                  {/* bank */}
                  <div className="clientNameSelect col-1">
                    <label htmlFor="bank">Bank</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setClientName();
                        changeClientName();
                      }}
                      options={options2}
                      id="bank"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {clientName && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  {/* State */}
                  <div className="clientNameSelect col-1">
                    <label htmlFor="state">State</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setBinScheme();
                        changeBinScheme();
                      }}
                      options={options2}
                      id="state"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {binScheme && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  {/* make */}
                  <div className="clientNameSelect col-1">
                    <label htmlFor="make">CIT Agency</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setMake();
                        changeMake();
                      }}
                      options={options2}
                      id="make"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {make && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  {/* site Type */}
                  <div className="clientNameSelect col-1">
                    <label htmlFor="siteType">Site Type</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setSiteType();
                        changeSiteType();
                      }}
                      options={options2}
                      id="siteType"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {siteType && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  {/* dob */}
                  <div className="clientNameSelect col-1">
                    <label htmlFor="dob">Date Of Birth</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
                    />
                  </div>
                  {/* site Class */}
                  <div className="clientNameSelect col-1">
                    <label htmlFor="siteClass">Site Class</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setSiteClass();
                        changeSiteClass();
                      }}
                      options={options2}
                      id="siteClass"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {siteClass && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-center btnsBtm">
                  <button type="button" className="btnPrimaryOutline">
                    Clear
                  </button>
                  <button type="button" className="btnPrimary ms-2">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content Table 1 */}
      <div className="configLeftBottom">
        <div className="tableBorderBox">
          <h4 className="EjTableHeading">Overall EJ Summary</h4>
          <div className="infoXchangeHeader mt-3 mb-2">
            <div className="d-flex justify-content-between align-items-center w-100 ">
              <div className="clientNameSelect configFormatEntities">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  isSearchable={false}
                  classNamePrefix="reactSelectBox"
                  placeholder="10 Entries"
                />
              </div>
              <div className="d-flex">
                <div className="form-group has-search nav-search">
                  <span className="icon-Search form-control-feedback"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>

                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <button type="button" className="iconButtonBox">
                    <img src={Pdf} alt="Pdf" />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltipExcel}
                >
                  <button type="button" className="iconButtonBox">
                    <img src={Excel} alt="Excel" />
                  </button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="clientNameSelect configFormatPercentageEntities">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options2}
                isSearchable={false}
                classNamePrefix="reactSelectBox"
                placeholder="Percentage"
              />
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox infoxchangeTable">
            <table className="table table-initial-width table-striped table-hover table-borderless align-middle">
              <thead>
                <tr>
                  <th scope="col" className="p-0">
                    Title
                  </th>
                  <th scope="col">01</th>
                  <th scope="col">02</th>
                  <th scope="col">03</th>
                  <th scope="col">04</th>
                  <th scope="col">05</th>
                  <th scope="col">06</th>
                  <th scope="col">07</th>
                  <th scope="col">08</th>
                  <th scope="col">09</th>
                  <th scope="col">10</th>
                  <th scope="col">11</th>
                  <th scope="col">12</th>
                  <th scope="col">13</th>
                  <th scope="col">14</th>
                  <th scope="col">15</th>
                  <th scope="col">16</th>
                  <th scope="col">17</th>
                  <th scope="col">18</th>
                  <th scope="col">19</th>
                  <th scope="col">20</th>
                  <th scope="col">21</th>
                  <th scope="col">22</th>
                  <th scope="col">23</th>
                  <th scope="col">24</th>
                  <th scope="col">25</th>
                  <th scope="col">26</th>
                  <th scope="col">27</th>
                  <th scope="col">28</th>
                  <th scope="col">29</th>
                  <th scope="col">30</th>
                  <th scope="col">31</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0">Cashlive</td>
                  <td>4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">EJ Successful % till 10 am</td>
                  <td>4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">EJ Successful % (Exl ATM Down)</td>
                  <td className="colorPrimaryTd">4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">EJ Successful (Rolling)</td>
                  <td className="colorPrimaryTd">0.19</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">Day 1 EJ Not Pulled</td>
                  <td>22.23</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">ATM Down</td>
                  <td>4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">From 1 Month EJ Not Pulled</td>
                  <td>4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">EJ Unsuccessful other than ATM Down</td>
                  <td>4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Content Table 2 */}
      <div className="configLeftBottom">
        <div className="tableBorderBox">
          <h4 className="EjTableHeading">Platinum & Gold-EJ Summary</h4>
          <div className="infoXchangeHeader mt-3 mb-2">
            <div className="d-flex justify-content-between align-items-center w-100 ">
              <div className="clientNameSelect configFormatEntities">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  isSearchable={false}
                  classNamePrefix="reactSelectBox"
                  placeholder="10 Entries"
                />
              </div>
              <div className="d-flex">
                <div className="form-group has-search nav-search">
                  <span className="icon-Search form-control-feedback"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>

                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <button type="button" className="iconButtonBox">
                    <img src={Pdf} alt="Pdf" />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltipExcel}
                >
                  <button type="button" className="iconButtonBox">
                    <img src={Excel} alt="Excel" />
                  </button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="clientNameSelect configFormatPercentageEntities">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options2}
                isSearchable={false}
                classNamePrefix="reactSelectBox"
                placeholder="Percentage"
              />
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox infoxchangeTable">
            <table className="table table-initial-width table-striped table-hover table-borderless align-middle">
              <thead>
                <tr>
                  <th scope="col" className="p-0">
                    Title
                  </th>
                  <th scope="col">01</th>
                  <th scope="col">02</th>
                  <th scope="col">03</th>
                  <th scope="col">04</th>
                  <th scope="col">05</th>
                  <th scope="col">06</th>
                  <th scope="col">07</th>
                  <th scope="col">08</th>
                  <th scope="col">09</th>
                  <th scope="col">10</th>
                  <th scope="col">11</th>
                  <th scope="col">12</th>
                  <th scope="col">13</th>
                  <th scope="col">14</th>
                  <th scope="col">15</th>
                  <th scope="col">16</th>
                  <th scope="col">17</th>
                  <th scope="col">18</th>
                  <th scope="col">19</th>
                  <th scope="col">20</th>
                  <th scope="col">21</th>
                  <th scope="col">22</th>
                  <th scope="col">23</th>
                  <th scope="col">24</th>
                  <th scope="col">25</th>
                  <th scope="col">26</th>
                  <th scope="col">27</th>
                  <th scope="col">28</th>
                  <th scope="col">29</th>
                  <th scope="col">30</th>
                  <th scope="col">31</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0">Cashlive</td>
                  <td>4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">EJ Successful % till 10 am</td>
                  <td>4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">EJ Successful % (Exl ATM Down)</td>
                  <td className="colorPrimaryTd">4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">EJ Successful (Rolling)</td>
                  <td className="colorPrimaryTd">0.19</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">Day 1 EJ Not Pulled</td>
                  <td>22.23</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">ATM Down</td>
                  <td>4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">From 1 Month EJ Not Pulled</td>
                  <td>4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-0">EJ Unsuccessful other than ATM Down</td>
                  <td>4650</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EJStatusWindow;
