import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts, setFilter } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

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
        {filteredContacts.map(({ id, number, name }) => (
          <Contact key={id} id={id} number={number} name={name} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
