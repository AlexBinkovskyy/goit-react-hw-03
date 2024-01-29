import { Contact } from '../Contact/Contact';

export function ContactList({ contacts }) {
  return <ul className='list'>
    {contacts.map(contact => {
      const { id, name, number } = contact;
      return <Contact key={id} contacts={contacts} contact={contact} name={name} number={number} />;
    })}
  </ul>
}
