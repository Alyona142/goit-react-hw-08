import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

// import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import { addContact } from "../../redux/contactsOps";

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, `The "Name" is too Short!`)
    .max(50, `The "Name" is too Long!`)
    .required('The "Name" is Required field!'),
  number: Yup.string()
    .min(3, `The "Number" is too Short!`)
    .max(50, `The "Number" is too Long!`)
    .required('The "Number" is Required field!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      phone: values.number,
    };

    dispatch(addContact(newContact));

    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={{
          username: "",
          number: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <label className={s.label}>
              <span>Name</span>
              <Field
                className={s.input}
                type="text"
                name="username"
                id="username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className={s.errorMessage}
              />
            </label>
            <label className={s.label}>
              <span>Number</span>
              <Field
                className={s.input}
                type="text"
                name="number"
                id="number"
              />
              <ErrorMessage
                name="number"
                component="div"
                className={s.errorMessage}
              />
            </label>
            <button className={s.button} type="submit" disabled={isSubmitting}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
