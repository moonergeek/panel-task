import { useState } from "react";
import styles from "./ContentMenu.module.css";

const ContentMenu = () => {
  const [state] = useState([
    "STATIONS",
    "OPERATORS",
    "WATCHERS",
    "RESOURCES",
    "SENSORS",
  ]);
  return (
    <nav>
      <ul className={`${styles.menu} d-flex gap-4 py-1`}>
        {state.map((item, index) => (
          <li key={index} className={`${styles.menuItem}`}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContentMenu;
