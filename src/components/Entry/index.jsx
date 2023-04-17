import Code from '../Code';
import Heading from '../Heading';

import style from './index.module.css';

const code = JSON.stringify([
  { id: 1, name: 'Andy', age: 20 }
], null, 2);

function Entry() {
  return (
    <section class={style.entry}>
      <header class={style.header}>
        <Heading text="Parkes Operation Center (Apollo 11)" level="2" />
        <Heading text="Tuesday, 26 July 2022" level="4" />
      </header>
      <p>Just finished watching <a href="https://en.wikipedia.org/wiki/The_Dish">&quot;The Dish&quot;</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was based on the actual events the film-makers used fictional characters.</p>
      <Code code={code} />
    </section>
  );
}

export default Entry;
