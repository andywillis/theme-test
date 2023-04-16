import Option from './Option';

function Select({ value, options, handleSelect }) {
  return (
    <select value={value} onChange={handleSelect}>
      <option disabled selected>Choose theme</option>
      {options.map(option => <Option {...option} />)}
    </select>
  );
}

export default Select;
