import { Formik, Field, Form } from "formik";

const RegistrationPage = () => {
  const initialValues = {
    password: "",
    email: "",
    name: "",
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
            <span>Name:</span>
            <Field name="name" />
          </label>
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
            You already have account?
            <Link to="../LoginPage">Login!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationPage;
