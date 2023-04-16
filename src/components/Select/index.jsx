import Option from './Option';

import style from './index.module.css';

function Select({ label, value, options, name, handleSelect }) {
  return (
    <select
      aria-label={name}
      class={style.select}
      value={value}
      onChange={handleSelect}
    >
      <option disabled selected>{label}</option>
      {options.map(option => {
        return <Option key={option.value} {...option} />;
      })}
    </select>
  );
}

export default Select;
