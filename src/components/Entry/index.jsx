import style from './index.module.css';

function Entry({ children }) {
  return (
    <section class={style.entry}>
      {children}
    </section>
  );
}

export default Entry;
