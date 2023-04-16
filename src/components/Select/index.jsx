import Option from './Option';

import style from './index.module.css';

function Select({ value, options, name, handleSelect }) {
  return (
    <select
      aria-label={name}
      class={style.select}
      value={value}
      onChange={handleSelect}
    >
      <option disabled selected>Choose theme</option>
      {options.map(option => {
        return <Option key={option.value} {...option} />;
      })}
    </select>
  );
}

export default Select;
