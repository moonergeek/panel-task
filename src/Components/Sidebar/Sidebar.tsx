import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";
import SideMenu from "../SideMenu/SideMenu";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside
      className={`${styles.sidebar} text-white flex-column justify-content-between`}
    >
      <section>
        <Logo />
        <SideMenu />
      </section>

      <Profile />
    </aside>
  );
};

export default Sidebar;
