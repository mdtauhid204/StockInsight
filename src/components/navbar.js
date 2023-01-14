import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
const Navbar = ({ setIndex, setCompany }) => {
  const handleBSE = () => {
    setIndex("BSE");
  };
  const handleNSE = () => {
    setIndex("NSE");
  };

  const styleInsight = {
    "font-size": "2rem",
    "font-family": "IBM Plex Sans Condensed', sans-serif",
  };
  const styleStock = {
    "font-size": "2.5rem",
    "font-family": "Platino Linotype",
    "font-weight": "Bold",
    "line-height": ".5",
    "margin-top": "15px",
  };
  return (
    <div className="container-fluid navcont">
      <div className="row logo">
        <div className="col-5 image">
          <img src="logo.png" />
        </div>
        <div className="col-7" style={{ "margin-left": "-5px" }}>
          <h3 style={styleStock}>STOCK </h3>
          <h3 style={styleInsight}> INSIGHT</h3>
        </div>
      </div>
      <div className="row mt-3 navrow">
        <h3 className="heading">COMPANY</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link text-muted"
              href="#"
              onClick={() => setCompany("ASHOKLEY")}
            >
              ASHOKLEY
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-muted"
              href="#"
              onClick={() => setCompany("CIPLA")}
            >
              CIPLA
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-muted"
              href="#"
              onClick={() => setCompany("EICHERMOT")}
            >
              EICHERMOT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-muted "
              href="#"
              onClick={() => setCompany("RELIANCE")}
            >
              RELIANCE
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-muted "
              href="#"
              onClick={() => setCompany("TATASTEEL")}
            >
              TATASTEEL
            </a>
          </li>
        </ul>
      </div>
      <div className="row mt-3">
        <h3 className="heading">INDEX</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-muted" href="#" onClick={handleBSE}>
              BSE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" onClick={handleNSE} href="#">
              NSE
            </a>
          </li>
        </ul>
      </div>
      <div className="row logbtn ">
        <button className="logoutbtn text-white">
          LOGOUT <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
