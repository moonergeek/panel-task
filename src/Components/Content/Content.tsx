import AddButton from "../AddButton/AddButton";
import ContentMenu from "../ContentMenu/ContentMenu";
import ManageShifts from "../ManageShifts/ManageShifts";
import Notification from "../Notification/Notification";
import Tags from "../Tags/Tags";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <main className={`${styles.content} w-100`}>
      <div
        className={`${styles.contentHead} px-5 mt-4`}
      >
        <ContentMenu />
        <Notification />
      </div>

      <div className="d-flex justify-content-between px-5 mt-4">
        <ManageShifts />
        <AddButton className="btn">+ Add Shift</AddButton>
      </div>

      <div className="mt-4">
        <Tags />
      </div>
    </main>
  );
};

export default Content;
