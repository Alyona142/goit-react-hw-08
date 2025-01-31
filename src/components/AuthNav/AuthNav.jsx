import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div>
      <div className={styles.navContainer}>
        <NavLink className={styles.nameLink} to="/register">
          Register
        </NavLink>
        <NavLink className={styles.nameLink} to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNav;
