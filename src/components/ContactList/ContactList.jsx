import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts, setFilter } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import { useMemo } from "react";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  // Використовуємо useMemo для оптимізації, але переконуємося, що contacts не змінює посилання
  const contacts = useMemo(() => [...filteredContacts], [filteredContacts]);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={handleFilterChange}
      />
      <ul className={s.contactList}>
        {contacts.map(({ id, number, name }) => {
          console.log("Contact ID:", id); // Додаємо лог для перевірки
          return <Contact key={id} id={id} number={number} name={name} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
