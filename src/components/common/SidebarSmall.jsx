import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

// const activeLink = (arr) => {};

const SidebarSmall = (props) => {
  const path = useLocation().pathname;

  // DashBoard Management Path
  let dashBoardPath = matchPath("/dashboard/*", path);
  if (dashBoardPath) {
    dashBoardPath = dashBoardPath.pathnameBase;
  }

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    }
    if (arr === dashBoardPath) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const dashboardPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li className={activeLink("/dashboard/ejs-status")}>
            <Link to="/dashboard/ejs-status">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">EJ Status</span>
            </Link>
          </li>
          <li className={activeLink("/dashboard/statewise-ej-pulling-status")}>
            <Link to="/dashboard/statewise-ej-pulling-status">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">State Wise EJ Pulling Status</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Vendor Wise EJ Pulling Status
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Current EJ Unsuccessful</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">EJ Pulling Status T+5</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const configurationPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Terminal List</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const manageEJPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Scheduled Pulling</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">OneTime Pulling</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">ReconfigurUnSuccessTrans</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">ReconfigurEJUploading</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">EJ Download</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Upload Today’s EJ-Trans</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const manageImagePopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">View Image</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Add Screen Library</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Add Screen Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Image Pulling Summary</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const reportsPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">EJ Status-DayWise</span>
            </Link>
          </li>
          <li className={activeLink("/reports/reports")}>
            <Link to="/reports/reports">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">EJ Pulling MIS-MonthWise</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Screen Upload Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Image Transaction Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Backlog EJ Pulling Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Terminal-wise HDD Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">EJ Audit Log</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Image Pulling Summary</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="sidebarSmall">
      {/* Dashboard */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={dashboardPopover}
          rootClose
        >
          <div className={activeLink("/dashboard")}>
            <span className="sidebarIconSize icon-Dashboard">
              {/* icon-Reports Small Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* Configuration */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={configurationPopover}
          rootClose
        >
          <div className={activeLink("/dummy-text")}>
            <span className="sidebarIconSize icon-Configuration">
              {/* icon-Dashboard Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* Manage EJ */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={manageEJPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Manage-EJ">
            {/* icon-savings Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Manage Images */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={manageImagePopover}
          rootClose
        >
          <span className=" sidebarIconSize icon-Manage-Images">
            {/*  icon-admin-management Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={reportsPopover}
          rootClose
        >
          <div className={activeLink("/reports")}>
            <span className="sidebarIconSize icon-Reports">
              {/* icon-customer-application Small Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* EJ Docket */}
      <div className="sidebarSmallImg">
        <Link to="/">
          <span className="sidebarIconSize icon-EJ-Docket">
            {/* EJ Docket  Small Icon */}
          </span>
        </Link>
      </div>

      {/* Terminal Connect */}
      <div className="sidebarSmallImg">
        <Link to="/">
          <span className="sidebarIconSize icon-Terminal-Connect">
            {/* Terminal Connect  Small Icon */}
          </span>
        </Link>
      </div>

      {/* Bank Connect */}
      <div className="sidebarSmallImg">
        <Link to="/">
          <span className="sidebarIconSize icon-Bank-Connect">
            {/* Bank Connect  Small Icon */}
          </span>
        </Link>
      </div>

      {/* Bank Connect */}
      <div className="sidebarSmallImg">
        <Link to="/">
          <span className="sidebarIconSize icon-ATM-Restart">
            {/* ATM Restart  Small Icon */}
          </span>
        </Link>
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
            d="M6.78 3.33331C6.8796 3.33297 6.978 3.35496 7.06799 3.39764C7.15797 3.44033 7.23725 3.50263 7.3 3.57998L10.52 7.57998C10.6181 7.69927 10.6717 7.8489 10.6717 8.00331C10.6717 8.15773 10.6181 8.30736 10.52 8.42665L7.18667 12.4266C7.07351 12.5628 6.9109 12.6484 6.73462 12.6647C6.55833 12.6809 6.38281 12.6265 6.24667 12.5133C6.11052 12.4002 6.02491 12.2375 6.00865 12.0613C5.9924 11.885 6.04684 11.7095 6.16 11.5733L9.14 7.99998L6.26 4.42665C6.17848 4.32879 6.12669 4.20963 6.11077 4.08326C6.09485 3.9569 6.11546 3.82861 6.17017 3.7136C6.22487 3.59858 6.31138 3.50164 6.41945 3.43424C6.52753 3.36685 6.65264 3.33182 6.78 3.33331Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarSmall;
