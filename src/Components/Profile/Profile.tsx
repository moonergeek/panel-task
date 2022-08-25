import profile from "../../Assets/Images/profile.svg";
import { BiLogOut } from "react-icons/bi";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <section className={`${styles.profile} d-flex flex-column px-2 py-3`}>
        <div className="d-flex gap-2">
          <img src={profile} alt="profile" />
          <div>
            <p className="mb-1">Matthew Perry</p>
            <p className="email w-100">mathewperry@xyz.com</p>
          </div>
        </div>

        <div className={`${styles.logout} mt-3 gap-2 d-flex`}>
          <BiLogOut />
          <p>Logout</p>
        </div>
      </section>
    </>
  );
};

export default Profile;
