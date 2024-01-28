import { FaUserTie } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import CSS from './Contact.module.css';
import { IconContext } from 'react-icons';

export function Contact({ name, number }) {
  return (
    <li className={CSS.listItem}>
      <div className={CSS.userName}>
        <FaUserTie className={CSS.icon} size="25px" />
        <h2 className={CSS.title}>{name}</h2>
      </div>
      <div className={CSS.userPhone}>
          <FaPhoneAlt className={CSS.icon} size="25px"/>
          <p className={CSS.title}>{number}</p>
      </div>
      <button type="button" className={CSS.button}>Delete contact</button>
    </li>
  );
}