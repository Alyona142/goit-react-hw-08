import { FaAddressCard } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <h1> Your contacts are stored here</h1>
      <FaAddressCard color="blue" size={"14rem"} />
      <p>(Please register to start saving your contacts)</p>
    </div>
  );
};

export default HomePage;
