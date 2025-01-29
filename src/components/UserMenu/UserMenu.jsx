import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => dispatch(logout());

  return (
    <div className={styles.wrapper}>
      {user && <p className={styles.username}>Welcome, {user.name}</p>}
      <button className={styles.btn} type="button" onClick={handleLogOut}>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserMenu;
