import Navbar from "./navbar";
import { useState } from "react";
import Graph from "./Graph";
import Slider2 from "./slider2";

const Home = () => {
  const [index, setIndex] = useState("BSE");
  const [company, setCompany] = useState("ASHOKLEY");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2' left">
          <Navbar setIndex={setIndex} setCompany={setCompany} />
        </div>
        <div className="col-10 right">
          <div className="row rightup mt-3">
            <div className="col-4">
              <h2 className="headtext text-muted">{index} SENSEX</h2>
            </div>
            <div className="col-8" style={{ width: "50%", height: "200px" }}>
              <div className="card">
                <Slider2 />
                <Slider2 />
              </div>
            </div>
          </div>
          <div className="row rightdown">
            <div className="col-12 col-sm-8">
              <h2 className="headtext">{company} CHART</h2>
              <Graph />
            </div>
            <div className="col-12 col-sm-4">Table</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
