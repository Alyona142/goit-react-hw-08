import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";
import { useState } from "react";
import LogOutModal from "../LogOutModal/LogOutModal";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className={styles.wrapper}>
      {user && <p className={styles.username}>Welcome, {user.name}</p>}

      <button className={styles.btn} type="button" onClick={openModal}>
        <span>Logout</span>
      </button>

      {showModal && <LogOutModal closeModal={closeModal} />}
    </div>
  );
};

export default UserMenu;
