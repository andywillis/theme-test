import style from './index.module.css';

function Heading({ text }) {
  return <h2 class={style.heading}>{text}</h2>;
}

export default Heading;
