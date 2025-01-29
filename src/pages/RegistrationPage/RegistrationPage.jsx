import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div>
      <h2>Register</h2>
      <RegistrationForm />
      <p>
        You already have an account?
        <Link to="/login"> Login!</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
