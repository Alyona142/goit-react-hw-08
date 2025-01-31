import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import {
  selectLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useEffect } from "react";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../../redux/contacts/operations";
import styles from "./ContactsPage.module.css";
import Loader from "../../components/Loader/Loader";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <ContactForm onAddContact={handleAddContact} />
      <div>
        <SearchBox />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {contacts.length > 0 && !error && !loading && (
          <ContactList
            contacts={contacts}
            onDeleteContact={handleDeleteContact}
          />
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
