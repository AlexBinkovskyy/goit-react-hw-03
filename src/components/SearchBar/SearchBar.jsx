import CSS from './SearchBar.module.css';

export function SearchBar({ inputValue, handleChange }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={CSS.searchInput}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
