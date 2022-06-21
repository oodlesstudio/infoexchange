import React, { useEffect } from "react";
import { Link, useLocation, matchPath, useNavigate } from "react-router-dom";
// Components

// path match

const SideBar = (props) => {
  let path = useLocation().pathname;
  let navigate = useNavigate();

  // DashBoard Management Path
  let dashBoardPath = matchPath("/dashboard/*", path);
  if (dashBoardPath) {
    dashBoardPath = dashBoardPath.pathnameBase;
  }

  // route Re-Direct
  useEffect(() => {
    if (path === "/") {
      navigate("/dashboard/ejs-status");
    }
  });

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const activeBtnClass = (arr) => {
    if (arr === path) {
      return "accordion-button";
    }
    if (arr === dashBoardPath) {
      return "accordion-button";
    } else {
      return "accordion-button collapsed";
    }
  };
  const activeAriaExpand = (arr = []) => {
    if (arr === path) {
      return "true";
    }

    if (arr === dashBoardPath) {
      return "true";
    } else {
      return "false";
    }
  };
  const activeAccordionBodyClass = (arr) => {
    if (arr === path) {
      return "accordion-collapse collapse show";
    }
    if (arr === dashBoardPath) {
      return "accordion-collapse collapse show";
    } else {
      return "accordion-collapse collapse ";
    }
  };

  return (
    <div className="sideBar">
      <div className="accordion" id="accordionExample">
        {/* Dashboard*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDashboard">
            <button
              className={activeBtnClass("/dashboard")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDashboard"
              aria-expanded={activeAriaExpand("/dashboard")}
              aria-controls="collapseDashboard"
            >
              <span className="sidebarIconSize icon-Dashboard"></span>
              <span className="fontSize14 ms-2">Dashboard</span>
            </button>
          </h2>
          <div
            id="collapseDashboard"
            className={activeAccordionBodyClass("/dashboard")}
            aria-labelledby="headingDashboard"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li className={activeLink("/dashboard/ejs-status")}>
                  <Link to="/dashboard/ejs-status">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">EJ Status</span>
                  </Link>
                </li>
                <li
                  className={activeLink(
                    "/dashboard/statewise-ej-pulling-status"
                  )}
                >
                  <Link to="/dashboard/statewise-ej-pulling-status">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      State Wise EJ Pulling Status
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Vendor Wise EJ Pulling Status
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Current EJ Unsuccessful
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">EJ Pulling Status T+5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Configuration */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingConfiguration">
            <button
              className={activeBtnClass("/configuration")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseConfiguration"
              aria-expanded={activeAriaExpand("/configuration")}
              aria-controls="collapseConfiguration"
            >
              <span className="sidebarIconSize icon-Configuration"></span>
              <span className="fontSize14 ms-2">Configuration</span>
            </button>
          </h2>
          <div
            id="collapseConfiguration"
            className={activeAccordionBodyClass("/configuration")}
            aria-labelledby="headingConfiguration"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Terminal List</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Manage EJ */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingManageEJ">
            <button
              className={activeBtnClass("/downloads")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseManageEJ"
              aria-expanded={activeAriaExpand("/manage-ej")}
              aria-controls="collapseManageEJ"
            >
              <span className="sidebarIconSize icon-Manage-EJ"></span>
              <span className="fontSize14 ms-2">Manage EJ</span>
            </button>
          </h2>
          <div
            id="collapseManageEJ"
            className={activeAccordionBodyClass("/financial-report")}
            aria-labelledby="headingManageEJ"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Scheduled Pulling</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">OneTime Pulling</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      ReconfigurUnSuccessTrans
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">ReconfigurEJUploading</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">EJ Download</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Upload Today’s EJ-Trans
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Upload EJ-Supervisory Terminals
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Manage Images  */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingManageImage">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseManageImage"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseManageImage"
            >
              <span className="sidebarIconSize icon-Manage-Images"></span>
              <span className="fontSize14 ms-2">Manage Images</span>
            </button>
          </h2>
          <div
            id="collapseManageImage"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingManageImage"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">View Image</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Add Screen Library</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Add Screen Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Image Pulling Summary</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Report */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingReports">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseReports"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseReports"
            >
              <span className="sidebarIconSize icon-Reports"></span>
              <span className="fontSize14 ms-2">Reports</span>
            </button>
          </h2>
          <div
            id="collapseReports"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingReports"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">EJ Status-DayWise</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text" className={activeLink("/dummy-text")}>
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      EJ Pulling MIS-MonthWise
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Screen Upload Details</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Image Transaction Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Backlog EJ Pulling Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Terminal-wise HDD Details
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">EJ Audit Log</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Image Pulling Summary</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*EJ Docket*/}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingEJDocket">
            <button className="accordion-button collapsed" type="button">
              <span className="sidebarIconSize icon-EJ-Docket"></span>
              <span className="fontSize14 ms-2">EJ Docket</span>
            </button>
          </h2>
        </div>

        {/*Terminal Connect*/}
        <div className="accordion-item">
          <h2
            className="accordion-header hideArrowIcon"
            id="headingTerminalConnect"
          >
            <button className="accordion-button collapsed" type="button">
              <span className="sidebarIconSize icon-Terminal-Connect"></span>
              <span className="fontSize14 ms-2">Terminal Connect</span>
            </button>
          </h2>
        </div>

        {/*Bank Connect */}
        <div className="accordion-item">
          <h2
            className="accordion-header hideArrowIcon"
            id="headingBankConnect"
          >
            <button className="accordion-button collapsed" type="button">
              <span className="sidebarIconSize icon-Bank-Connect"></span>
              <span className="fontSize14 ms-2">Bank Connect</span>
            </button>
          </h2>
        </div>

        {/*ATM Restart */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingATMRestart">
            <button className="accordion-button collapsed" type="button">
              <span className="sidebarIconSize icon-ATM-Restart"></span>
              <span className="fontSize14 ms-2">ATM Restart</span>
            </button>
          </h2>
        </div>
      </div>

      <button
        type="button"
        className="sidebarButton d-flex justify-content-center align-items-center"
        onClick={props.buttonCollapse}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.44169 3.31909 9.61722 3.37353 9.75336 3.48669C9.8895 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBar;
