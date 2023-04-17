import classNames from 'classnames';

import style from './index.module.css';

function Icon({ type, handleClick, disabled }) {

  const cn = classNames([
    style.icon,
    style[type]
  ]);

  return (
    <button
      type="button"
      class={cn}
      data-type={type}
      onClick={handleClick}
      disabled={disabled}
    />
  );

}

export default Icon;
