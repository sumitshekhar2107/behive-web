import React from "react";
export {};

const data = [
  {
    id: 1,
    icon: "https://i.postimg.cc/N0Rjwfd2/Group-3.png",
    text: "Community Events",
  },
  {
    id: 2,
    icon: "https://i.postimg.cc/N0Rjwfd2/Group-3.png",
    text: "Gym Facilities",
  },
  {
    id: 3,
    icon: "https://i.postimg.cc/FsnyYDNg/Vector-7.png",
    text: "High-Speed WiFi",
  },
  {
    id: 4,
    icon: "https://i.postimg.cc/fWCjNMPP/Group-5.png",
    text: "Cafe & Tea Bar",
  },
  {
    id: 5,
    icon: "https://i.postimg.cc/cChckSpV/Group-2.png",
    text: "Affordable",
  },
  {
    id: 6,
    icon: "https://i.postimg.cc/WzNGkydS/Group-4.png",
    text: "Comfort Lounges",
  },
  {
    id: 7,
    icon: "https://i.postimg.cc/JnWc10mf/Vector-6.png",
    text: "Quick Booking",
  },
  {
    id: 8,
    icon: "https://i.postimg.cc/VNtWQny9/Vector-5.png",
    text: "Sports Area",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="overview-title">
        <h2>Why Choose us?</h2>
      </div>
      <div className="grid-container">
        {data.map((item) => (
          <div key={item.id} className="grid-item">
            <div className="icon-box">
              <img src={item.icon} alt={`Icon ${item.id}`} />
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyChooseUs;
