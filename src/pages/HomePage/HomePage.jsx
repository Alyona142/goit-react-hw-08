import { FaAddressCard } from "react-icons/fa";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css["homepage-container"]}>
      <div className={css["home-content"]}>
        <h1>Your contacts are stored here</h1>
        <FaAddressCard color="blue" size={"14rem"} />
        <p>(Please register to start saving your contacts)</p>
      </div>
    </div>
  );
};

export default HomePage;
