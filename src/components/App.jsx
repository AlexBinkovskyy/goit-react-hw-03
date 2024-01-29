import { useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';
import { ContactForm } from './ContactForm/ContactForm';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const searchName = () => {
    return contacts.filter(item => {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    });
  };

  return (
    <div>
      <h1 className="header">Phonebook</h1>
      <ContactForm/>
      <SearchBar inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={searchName()} />
    </div>
  );
};
