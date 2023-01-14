import Navbar from "./navbar";
import { useState } from "react";

const Home = () => {
  const [index, setIndex] = useState("BSE");
  const [company, setCompany] = useState("ASHOKLEY");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2' left">
          <Navbar
            index={index}
            setIndex={setIndex}
            company={company}
            setCompany={setCompany}
          />
        </div>
        <div className="col-10 right">
          <div className="row rightup">
            <h1>{index} SENSEX</h1>
          </div>
          <div className="row rightdown">
            <div className="col-12 col-sm-8">
              <h2>{company}</h2>
            </div>
            <div className="col-12 col-sm-4">Table</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
