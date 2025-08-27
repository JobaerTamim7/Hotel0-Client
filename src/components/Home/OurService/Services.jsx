import {
  FaSwimmingPool,
  FaWifi,
  FaConciergeBell,
  FaBed,
  FaCoffee,
} from "react-icons/fa";
import { BiSolidCctv } from "react-icons/bi";

export const services = [
  {
    icon: <FaSwimmingPool className="text-4xl text-primary" />,
    title: "Swimming Pool",
  },
  {
    icon: <FaWifi className="text-4xl text-primary" />,
    title: "Free Wi-Fi",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-primary" />,
    title: "24/7 Concierge Service",
  },
  {
    icon: <FaBed className="text-4xl text-primary" />,
    title: "Comfortable Rooms",
  },
  {
    icon: <FaCoffee className="text-4xl text-primary" />,
    title: "Coffee & Dining",
  },
  {
    icon: <BiSolidCctv className="text-4xl text-primary" />,
    title: "24/7 Security",
  },
];
