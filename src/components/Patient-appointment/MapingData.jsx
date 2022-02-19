import React from "react";
export default function MapingData() {
  const doctorData = [
    {
      name: "Alexis John",
      time: "10 : 00 AM",
      Specialty: "Orthopedic",
    },
    {
      name: "Alexis John",
      time: "10 : 00 AM",
      Specialty: "Orthopedic",
    },
    {
      name: "Alexis John",
      time: "11 : 00 AM",
      Specialty: "Orthopedic",
    },
    {
      name: "Alexis John",
      time: "04: 00 AM",
      Specialty: "Orthopedic",
    },
  ];
  const doctorDataArea = (data, index) => {
    return (
      <tr key={index}>
        <td className="table_text">{data.name}</td>
        <td className="table_text">{data.time}</td>
        <td className="table_text">{data.Specialty}</td>
      </tr>
    );
  };
  return (
    <>
      <div className="dashboard">
        <div className="pr-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 padding_table">
              <div className="table-responsive">
                <div className="table_label mb-3 mt-3">
                  <div className="upcom_lable">Upcoming appointments</div>
                  <div>
                    <div>
                      <img src="/images/see.svg" alt="" />
                    </div>
                  </div>
                </div>
                <table class="table  background_table">
                  <thead class="thead-dark">
                    <tr>
                      <th className="heading_table" scope="col">
                        Name
                      </th>
                      <th className="heading_table" scope="col">
                        Time
                      </th>

                      <th className="heading_table" scope="col">
                        Specialty
                      </th>
                    </tr>
                  </thead>
                  <tbody>{doctorData.map(doctorDataArea)}</tbody>
                </table>
                <div className="text-center pb-4">
                  <img src="/images/dateimg.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 padding_table">
              <div className="table-responsive">
                <div className="table_label mb-3 mt-3">
                  <div className="upcom_lable">New patients</div>
                  <div>
                    <img src="/images/hos-doc.svg" alt="" />
                  </div>
                </div>
                <table class="table background_table">
                  <thead class="thead-dark">
                    <tr>
                      <th className="heading_table" scope="col">
                        Name
                      </th>
                      <th className="heading_table" scope="col">
                        Time
                      </th>

                      <th className="heading_table" scope="col">
                        Specialty
                      </th>
                    </tr>
                  </thead>
                  <tbody>{doctorData.map(doctorDataArea)}</tbody>
                </table>
                <div className="text-center pb-4">
                  <img src="/images/dateimg.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
