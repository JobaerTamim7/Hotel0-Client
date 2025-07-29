import React from "react";
import {
  FaSwimmingPool,
  FaWifi,
  FaConciergeBell,
  FaBed,
  FaCoffee,
} from "react-icons/fa"; // React icons

const services = [
  {
    icon: <FaSwimmingPool className="text-4xl text-primary" />,
    title: "Swimming Pool",
    description:
      "Relax and unwind in our luxurious outdoor pool, available for guests all year round.",
  },
  {
    icon: <FaWifi className="text-4xl text-primary" />,
    title: "Free Wi-Fi",
    description:
      "Enjoy complimentary high-speed internet throughout the hotel during your stay.",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-primary" />,
    title: "24/7 Concierge Service",
    description:
      "Our concierge team is available around the clock to assist you with any needs or requests.",
  },
  {
    icon: <FaBed className="text-4xl text-primary" />,
    title: "Comfortable Rooms",
    description:
      "Our spacious rooms are designed for maximum comfort, ensuring a restful stay.",
  },
  {
    icon: <FaCoffee className="text-4xl text-primary" />,
    title: "Coffee & Dining",
    description:
      "Start your day with a fresh cup of coffee or enjoy gourmet dining options available at our restaurant.",
  },
];

const OurServices = () => {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-semibold text-center text-white mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl p-6 text-center"
          >
            <div className="card-body flex flex-row">
              <div className="card-title mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium text-white/60">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
