import { BsBell } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import SideMenu from "../SideMenu/SideMenu";
import styles from "./Notification.module.css";
import Profile from "../Profile/Profile";

const Notification = () => {
  return (
    <div className={`${styles.notif} gap-3`}>
      <BsBell />
      <a
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
        className={styles.offc}
      >
        <FiMenu />
      </a>

      <div
        className={`${styles.bgNav} offcanvas offcanvas-start text-white`}
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Profile />
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Notification;
