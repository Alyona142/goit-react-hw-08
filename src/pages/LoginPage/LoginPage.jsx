import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" />
          </label>
          <button type="sibmit">Login</button>
          <p>
            You do not have account?{" "}
            <Link to="../RegistrationPage">Lets create one!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
