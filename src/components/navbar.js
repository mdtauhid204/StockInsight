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
  return (
    <div className="container-fluid navcont">
      <div className="row logo">
        <div className="col-5 mt-3 image">
          <img src="logo.png" width="100%" />
        </div>
        <div className="col-7">
          <h2 className="">STOCK INSIGHT</h2>
        </div>
      </div>
      <div className="row mt-3 navrow">
        <h3 className="heading">COMPANY</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => setCompany("ASHOKLEY")}
            >
              ASHOKLEY
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => setCompany("CIPLA")}
            >
              CIPLA
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => setCompany("EICHERMOT")}
            >
              EICHERMOT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
              href="#"
              onClick={() => setCompany("RELIANCE")}
            >
              RELIANCE
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
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
            <a className="nav-link" href="#" onClick={handleBSE}>
              BSE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={handleNSE} href="#">
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
