import { BiArrowBack } from "react-icons/bi";
import styles from "./ManageShifts.module.css";

const ManageShifts = () => {
  return (
    <section className={`${styles.shifts} d-flex gap-2`}>
      <span>
        <BiArrowBack />
      </span>
      <p>Manage Shifts</p>
    </section>
  );
};

export default ManageShifts;
