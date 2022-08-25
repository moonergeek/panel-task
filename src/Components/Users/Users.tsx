import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbUserCircle } from "react-icons/tb";
import styles from "./Users.module.css";

const Users = () => {
  const [label] = useState([
    {
      label: "Line 1",
      names: [
        { name: "Savannah Nguyen", station: "STATION-1" },
        { name: "Guy Hawkins", station: "STATION-2" },
        { name: "Brookl Simmons", station: "STATION-3" },
        { name: "Kathryn Murphy", station: "STATION-4" },
      ],
    },
    {
      label: "Line 1",
      names: [
        { name: "Eleanor Pena", station: "STATION-1" },
        { name: "Brookl Simmons", station: "STATION-1" },
      ],
    },
    {
      label: "Line 2",
      names: [
        { name: "Savannah Nguyen", station: "STATION-1" },
        { name: "Guy Hawkins", station: "STATION-2" },
        { name: "Kathryn Murphy", station: "STATION-3" },
      ],
    },
  ]);
  return (
    <div className={styles.userz}>
      {label.map((item, index) => (
        <div key={index} className="d-block">
          <div className={styles.label}>
            <p>{item.label}</p>
            <span>
              <BsThreeDotsVertical />
            </span>
          </div>

          {item.names.map((name, index) => (
            <div
              key={index}
              className={`${styles.user} d-flex justify-content-between p-4`}
            >
              <div className="d-flex gap-2">
                <span className={styles.icon}>
                  <TbUserCircle />
                </span>
                <span className="name">{name.name}</span>
              </div>
              <span className={styles.station}>{name.station}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Users;
