import { useState } from "react";
import {
  FaRegChartBar,
  FaFortAwesome,
  FaBookOpen,
  FaDiagnoses,
} from "react-icons/fa";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  const [state] = useState([
    { name: "Reports", icon: <FaRegChartBar /> },
    { name: "Factory", icon: <FaFortAwesome /> },
    { name: "Integrations", icon: <FaBookOpen /> },
    { name: "Support", icon: <FaDiagnoses /> },
  ]);
  return (
    <nav className={`${styles.sideMenu} mt-4`}>
      <ul className={styles.menuHolder}>
        {state.map((item, index) => (
          <li
            key={index}
            className={`${styles.menuItem} w-100 d-flex pl-4 gap-2 mb-4 fw-bold align-items-center`}
          >
            <span className={styles.icon}>{item.icon}</span>
            <p className="ml-4">{item.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
