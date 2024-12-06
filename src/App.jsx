// /src/App.js
import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import "./App.css"; // Add your styles here
import StatCard from "./components/StatCard";
import ProfileCard from "./components/ProfileCard";
import DiagnosticList from "./components/ScrollableTable";
import LabResults from "./components/LabResults";

const App = () => {
  const [chartData, setChartData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulate API call

    let username = "coalition";
    let password = "skills-test";
    let auth = btoa(`${username}:${password}`);

    // Authenticate (dummy API)
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(function (data) {
        const jessca_data = data?.find(
          (item) => item.name === "Jessica Taylor"
        );
        setUserData(jessca_data);

        const diagnosisHistory = jessca_data.diagnosis_history;

        const startDate = new Date("2023-09-01");
        const endDate = new Date("2024-03-31");

        const filteredData = diagnosisHistory
          .filter((record) => {
            const recordDate = new Date(`${record.month} 1, ${record.year}`);
            return recordDate >= startDate && recordDate <= endDate;
          })
          .sort((a, b) => {
            // Convert to date objects for proper comparison
            const dateA = new Date(`${a.month} 1, ${a.year}`);
            const dateB = new Date(`${b.month} 1, ${b.year}`);

            // Sort by month/year in ascending order
            return dateA - dateB;
          });

        const systolic = filteredData.map(
          (entry) => entry.blood_pressure.systolic.value
        );
        const diastolic = filteredData.map(
          (entry) => entry.blood_pressure.diastolic.value
        );
        const months = filteredData.map(
          (entry) => `${entry.month.substring(0, 3)} ${entry.year}`
        );

        console.log(systolic, diastolic, months, "heloeleoeoeo");

        setChartData({
          systolic: systolic,
          diastolic: diastolic,
          months: months,
        });

        console.log(jessca_data, "Hahhdwufhcdhkdhkdjh");
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  if (!chartData || !userData) {
    return <div className="loading">Loading...</div>;
  }

  const options = {
    chart: {
      type: "line",
      backgroundColor: "#F4F0FE",
    },
    title: {
      text: "Blood Pressure",
      align: "left",
    },
    xAxis: {
      categories: chartData.months,
    },
    yAxis: {
      title: {
        text: "Blood Pressure (mmHg)",
      },
      tickInterval: 20,
    },
    series: [
      {
        name: "Systolic",
        data: chartData.systolic,
        color: "#FF6FB5",
      },
      {
        name: "Diastolic",
        data: chartData.diastolic,
        color: "#9572FF",
      },
    ],
  };

  return (
    
    <div className="app-container">
      <div>
      <div className="diagnosis-history">
        <h2>Diagnosis History</h2>
        <div className="chart-container">
          <HighchartsReact highcharts={Highcharts} options={options} />

          <div className="chart-summary">
            <div className="reading systolic">
              <span className="label">Systolic</span>
              <span className="value">160</span>
              <span className="status up">Higher than Average</span>
            </div>
            <hr />
            <div className="reading diastolic">
              <span className="label">Diastolic</span>
              <span className="value">78</span>
              <span className="status down">Lower than Average</span>
            </div>
          </div>
        </div>
        <div className="stats-cards">
          <StatCard
            label="Respiratory Rate"
            value={
              userData.diagnosis_history[0].respiratory_rate.value + " bpm"
            }
            status={userData.diagnosis_history[0].respiratory_rate.levels}
            icon={"./src/assets/respiratory rate.svg"}
          />

          <StatCard
            label="Temprature"
            value={userData.diagnosis_history[0].temperature.value + "°F"}
            status={userData.diagnosis_history[0].temperature.levels}
            icon={"./src/assets/temperature.svg"}
          />

          <StatCard
            label="Heart Rate"
            value={userData.diagnosis_history[0].heart_rate.value + " bpm"}
            status={userData.diagnosis_history[0].heart_rate.levels}
            icon={"./src/assets/HeartBPM.svg"}
          />
        </div>

     
      </div>

      <DiagnosticList  diagnostic_list = {userData?.diagnostic_list} />
      </div>

      <div>
      <ProfileCard user={userData} />
      <LabResults lab_results = {userData?.lab_results} />
      </div>

     
    </div>
  );
};

export default App;
