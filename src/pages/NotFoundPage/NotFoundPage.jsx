import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NoFoundPage = () => {
  return (
    <div className={styles.centering}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <button>
        <Link to="/">Go to Homepage</Link>
      </button>
    </div>
  );
};

export default NoFoundPage;
