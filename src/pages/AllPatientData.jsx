import React from "react";
import DashboardHeader from "../components/DashboardHeader";
const AllPatientData = () => {
  const doctorData = [
    {
      DE: "9/1/2021",
      patientname: "David",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "David",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "David",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "David",
      DOB: "8/1/2021",
      Specialty: "8/1/2021",
      Phonenumber: "(000) 000-0000",
    },
  ];
  const doctorDataArea = (data, index) => {
    return (
      <tr key={index}>
        <td className="table_text">{data.DE}</td>
        <td className="table_text">{data.patientname}</td>
        <td className="table_text">{data.DOB}</td>
        <td className="table_text">{data.Specialty}</td>
        <td className="table_text">{data.Phonenumber}</td>
        <td className="table_text">
          <img src="/images/pen.svg" alt="" />
          <img src="/images/eye.svg" alt="" />
        </td>
      </tr>
    );
  };
  return (
    <>
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
        <div className="manage_with">
          <div className="serch">
            <img className="search_img" src="/images/searc.svg" alt="" />
            <input
              type="text"
              className="form-control search_input col-10"
              placeholder="Search data"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-8 padding_table mt-5 pl-0">
          <div className="table-responsive pl-0 pr-0">
            <table class="table  background_table">
              <thead class="thead-dark">
                <tr>
                  <th className="heading_table" scope="col">
                    D/E
                  </th>
                  <th className="heading_table" scope="col">
                    Patient name
                  </th>

                  <th className="heading_table" scope="col">
                    DOB
                  </th>
                  <th className="heading_table" scope="col">
                    Specialty
                  </th>
                  <th className="heading_table" scope="col">
                    Phone number
                  </th>
                  <th className="heading_table" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{doctorData.map(doctorDataArea)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPatientData;
