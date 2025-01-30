import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useId } from "react";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrationForm.module.css";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short!")
    .max(50, "Name is too long!")
    .required("Name is a required field!"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is a required field!"),
  password: Yup.string()
    .matches(
      passwordRules,
      "Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number."
    )
    .required("Password is a required field!"),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    const response = await dispatch(register(values));
    console.log("Registration response:", response);

    if (response?.payload?.token) {
      navigate("/contacts");
    }

    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.formContact}>
          <label className={styles.formLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              className={styles.formErrorMessage}
              name="name"
              component="div"
            />
          </div>

          <label className={styles.formLabel} htmlFor={emailFieldId}>
            Email
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type="email"
              inputMode="email"
              name="email"
              id={emailFieldId}
            />
            <ErrorMessage
              className={styles.formErrorMessage}
              name="email"
              component="div"
            />
          </div>

          <label className={styles.formLabel} htmlFor={passwordFieldId}>
            Password
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type="password"
              inputMode="text"
              name="password"
              id={passwordFieldId}
            />
            <ErrorMessage
              className={styles.formErrorMessage}
              name="password"
              component="div"
            />
          </div>

          <button
            className={styles.formButton}
            type="submit"
            disabled={isSubmitting}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
