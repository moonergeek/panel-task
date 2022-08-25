import { BsBell } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import styles from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={`${styles.notif} gap-3`}>
      <BsBell />
      <span className={styles.offc}>
        <FiMenu />
      </span>
    </div>
  );
};

export default Notification;
