import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import s from "./Contact.module.css";

import { deleteContact } from "../../redux/contacts/operations";

import { useDispatch } from "react-redux";

const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("Deleting contact ID:", id); // Лог перед видаленням
    dispatch(deleteContact(String(id))); // Перетворюємо id у рядок
  };

  return (
    <li className={s.contactItem}>
      <div>
        <div className={s.contactContext}>
          <IoIosContact />
          <span>{name}</span>
        </div>
        <div className={s.contactContext}>
          <MdPhoneInTalk />
          <a href={`tel: ` + number}>{number}</a>
        </div>
      </div>

      <button onClick={handleDelete}>Delete</button>
      {/* <button
        onClick={() => dispatch(deleteContact(id))}
        type="button"
        aria-label="delete button"
      >
        Delete
      </button> */}
    </li>
  );
};

export default Contact;
