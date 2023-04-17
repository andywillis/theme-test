import Heading from '../Heading';

import style from './index.module.css';

function Entry({ data: entry }) {
  return (
    <section class={style.entry}>
      <header class={style.header}>
        <Heading text={entry.title} level="2" />
        <Heading text={entry.date} level="4" />
      </header>
    </section>
  );
}

export default Entry;
