import { Contact } from '../Contact/Contact';
import CSS from "./ContactList.module.css"

export function ContactList({ contacts }) {
  return <ul className='list'>
    {contacts.map(contact => {
      const { id, name, number } = contact;
      return <Contact key={id} contact={contact} name={name} number={number} />;
    })}
  </ul>
}
