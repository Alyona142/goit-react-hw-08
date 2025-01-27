import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import s from "./Contact.module.css";

import { deleteContact } from "../../redux/contactsOps";

import { useDispatch } from "react-redux";

const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();

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
      <button
        onClick={() => dispatch(deleteContact(id))}
        type="button"
        aria-label="delete button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
