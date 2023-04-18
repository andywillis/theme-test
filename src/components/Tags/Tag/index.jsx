import style from './index.module.css';

function Tag({ text }) {
  return (
    <li class={style.tag}>
      {text}
    </li>
  );
}

export default Tag;
