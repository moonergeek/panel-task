import { useState } from "react";
import { TbPencil } from "react-icons/tb";
import styles from "./Tags.module.css";
import Users from "../Users/Users";

const Tags = () => {
  const [tags] = useState<string[]>([
    "Morning | 7:00 AM - 2:00 PM",
    "Afternoon | 2:00 PM - 9:00 PM",
    "Night | 9:00 PM - 4:00 AM",
  ]);

  const tagRender = tags.map((item, index) => (
    <section key={index} className={`${styles.tag}`}>
      <div className={`${styles.top} d-flex gap-5`}>
        <span className={styles.date}>{item}</span>
        <TbPencil className={styles.curs} />
      </div>
      <div className={`w-100 d-flex gap-2 mt-2`}>
        <div className={`${styles.day} ${styles.done}`}>Mon</div>
        <div className={`${styles.day} ${styles.done}`}>Tue</div>
        <div className={`${styles.day} ${styles.done}`}>Wed</div>
        <div className={styles.day}>Thu</div>
        <div className={styles.day}>Fri</div>
        <div className={styles.day}>Sat</div>
        <div className={styles.day}>Sun</div>
      </div>
    </section>
  ));

  return (
    <div>
      <div className={styles.tagz}>{tagRender}</div>
      <Users />
    </div>
  );
};

export default Tags;
