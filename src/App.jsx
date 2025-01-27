import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import { fetchContacts, addContact, deleteContact } from "./redux/contactsOps";
import { selectContacts, selectIsLoading } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";
import { setNameFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name?.toLowerCase() === newContact.name?.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (filterValue) => {
    dispatch(setNameFilter(filterValue));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phone Book</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      {isLoading && <p>Loading contacts...</p>}
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </>
  );
}

export default App;
