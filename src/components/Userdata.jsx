import React from "react";

const Userdata = () => {
  const data = [
    {
      image: "/images/g-1.svg",
      text: "1,823",
      description: `Lorem ipsum`,
      imagee: "/images/contactimg.svg",
    },
    {
      image: "/images/g-1.svg",
      text: "1,823",
      description: `Lorem ipsum`,
      imagee: "/images/contactimg.svg",
    },
    {
      image: "/images/g-1.svg",
      text: "1,823",
      description: `Lorem ipsum`,
      imagee: "/images/contactimg.svg",
    },
    {
      image: "/images/g-1.svg",
      text: "1,823",
      description: `Lorem ipsum`,
      imagee: "/images/contactimg.svg",
    },
  ];
  return (
    <div className="main_user_data">
      {data.map((el) => {
        return (
          <div className="graphic_div mb-3 pt-4 pl-3 pr-3 pb-4">
            <div style={{ display: "flex" }}>
              <div>
                <img className="mr-4" alt="" src={el.imagee}></img>
              </div>
              <div>
                <p>{el.text}</p>
                <p>{el.description}</p>
              </div>
            </div>
            <div>
              <img alt="" src={el.image}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Userdata;
