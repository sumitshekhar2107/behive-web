import React from "react";
import data from "./data.json";
import "./Global.css";

const Overview: React.FC = () => {
  return (
    <>
      <div className="overview-title">
        <h2>Our Space Overview</h2>
      </div>
      <div className="grid">
        {data.map((item) => (
          <div key={item.id} className="card">
            <div className="overview-header">
              <h2>HSR Sector 6, Service Road</h2>
              <img
                src="https://i.postimg.cc/hz4DLLhR/placeholder.jpg"
                alt="Placeholder"
              />
            </div>
            <img src={item.images} alt={item.address} />
            <div className="inner-section">
              <div className="inner-content">
                <p>Day pass</p>
                <div className="inner-price">
                  <p>{"₹" + item.day_pass_price + " / Day"}</p>
                </div>
              </div>
              <div className="inner-content">
                <img
                  src="https://i.postimg.cc/qMxhDmJv/Group-1000007117.png"
                  alt="Day PassImage"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Overview;
