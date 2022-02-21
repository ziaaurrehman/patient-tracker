import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import { Checkbox } from "antd";
function Addnewpatient() {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div>
      <DashboardHeader />
      <p
        className="dash_title
      pt-2"
      >
        Patients
      </p>
      <div className="patient_labels d-flex justify-content-between pr-5">
        <div className="patient_data">
          Patients /
          <span style={{ color: "#4A47A3", paddingLeft: "8px" }}>
            All patient data
          </span>
        </div>
        <div>
          <img src="/images/Group 479.svg" alt="" />
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-5">
        <div className="col-lg-5 pl-0 pr-0">
          <label className="input_label" for="validationCustom01">
            Patient ID
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            placeholder="Enter patient ID"
          />
        </div>
        <div className="col-lg-6 pr-0 pl-0 mt-5">
          <Checkbox onChange={onChange}>Disabled</Checkbox>
          <Checkbox onChange={onChange}>Transportation</Checkbox>
          <Checkbox onChange={onChange}>X-ray</Checkbox>
          <Checkbox onChange={onChange}>OV/W</Checkbox>
        </div>
      </div>
      <div className="row mr-0 ml-0 mt-4">
        <div className="col-lg-5 pl-0 pr-0">
          <label className="input_label" htmlFor="validationCustom01">
            First name
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="First name"
          />
        </div>
        <div className="col-lg-6 pl-0">
          <label className="input_label" htmlFor="validationCustom01">
            Last name
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="Enter last name"
          />
        </div>
      </div>
    </div>
  );
}

export default Addnewpatient;
